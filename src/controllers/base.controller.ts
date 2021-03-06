// Copyright 2016-present Province of British Columbia
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {authenticate} from '@loopback/authentication';
import {inject} from '@loopback/context';
import {ApplicationConfig, CoreBindings} from '@loopback/core';
import {repository} from '@loopback/repository';
import axios from 'axios';
import _ from 'lodash';
import {Configuration} from '../models';
import {ConfigurationRepository} from '../repositories';

const toSentence = require('underscore.string/toSentence');
const pluralize = require('pluralize');

interface SMSBody {
  MessageBody: string;
  [key: string]: string;
}

@authenticate(
  'ipWhitelist',
  'clientCertificate',
  'accessToken',
  'oidc',
  'siteMinder',
  'anonymous',
)
export class BaseController {
  constructor(
    @inject(CoreBindings.APPLICATION_CONFIG)
    protected appConfig: ApplicationConfig,
    @repository(ConfigurationRepository)
    public configurationRepository: ConfigurationRepository,
  ) { }

  smsClient: any;
  async sendSMS(to: string, textBody: string, data: any, cb?: Function) {
    const smsServiceProvider = this.appConfig.smsServiceProvider;
    const smsConfig = this.appConfig.sms[smsServiceProvider];
    switch (smsServiceProvider) {
      case 'swift':
        try {
          const url = `${smsConfig['apiUrlPrefix']}${smsConfig['accountKey']
            }/${encodeURIComponent(to)}`;
          const body: SMSBody = {
            MessageBody: textBody,
          };
          if (data?.id) {
            body.Reference = data.id;
          }
          await axios.post(url, body, {
            headers: {
              'Content-Type': 'application/json;charset=UTF-8',
            },
          });
        } catch (ex) {
          return cb?.(ex);
        }
        cb?.();
        break;
      default: {
        // Twilio Credentials
        const accountSid = smsConfig.accountSid;
        const authToken = smsConfig.authToken;
        //require the Twilio module and create a REST client
        this.smsClient =
          this.smsClient || require('twilio')(accountSid, authToken);

        this.smsClient.messages.create(
          {
            to: to,
            from: smsConfig.fromNumber,
            body: textBody,
          },
          function (err: any, message: any) {
            cb?.(err, message);
          },
        );
      }
    }
  }

  nodemailer = require('nodemailer');
  directTransport = require('nodemailer-direct-transport');
  transporter: any;
  sendEmail(mailOptions: any, cb?: Function) {
    return new Promise((resolve, reject) => {
      if (!this.transporter) {
        const smtpCfg = this.appConfig.smtp || this.appConfig.defaultSmtp;
        if (smtpCfg.direct) {
          this.transporter = this.nodemailer.createTransport(
            this.directTransport(smtpCfg),
          );
        } else {
          this.transporter = this.nodemailer.createTransport(smtpCfg);
        }
      }
      this.transporter.sendMail(mailOptions, function (error: any, info: any) {
        try {
          if (!error && info.accepted.length < 1) {
            error = new Error('delivery failed');
          }
        } catch (ex) { }
        if (cb) {
          return cb(error, info);
        } else {
          if (error) {
            return reject(error);
          } else {
            return resolve(info);
          }
        }
      });
    });
  }

  mailMerge(srcTxt: any, data: any, httpCtx: any) {
    let output = srcTxt;
    try {
      output = output.replace(
        /\{subscription_confirmation_code\}/gi,
        data.confirmationRequest.confirmationCode,
      );
    } catch (ex) { }
    try {
      output = output.replace(/\{service_name\}/gi, data.serviceName);
    } catch (ex) { }
    try {
      if (output.match(/\{unsubscription_service_names\}/i)) {
        const serviceNames = _.union(
          [data.serviceName],
          data.unsubscribedAdditionalServices
            ? data.unsubscribedAdditionalServices.names
            : [],
        );
        output = output.replace(
          /\{unsubscription_service_names\}/gi,
          pluralize('service', serviceNames.length) +
          ' ' +
          toSentence(serviceNames),
        );
      }
    } catch (ex) { }
    let httpHost;
    try {
      const req = httpCtx.req || httpCtx.request;
      if (req) {
        httpHost = req.protocol + '://' + req.get('host');
      }
      if (this.appConfig.httpHost) {
        httpHost = this.appConfig.httpHost;
      }
      let args: any;
      try {
        args = httpCtx.getSync('args');
      } catch (ex) { }
      if (args?.data?.httpHost) {
        httpHost = args.data.httpHost;
      } else if (httpCtx.instance?.httpHost) {
        httpHost = httpCtx.instance.httpHost;
      } else if (data?.httpHost) {
        httpHost = data.httpHost;
      }
      output = output.replace(/\{http_host\}/gi, httpHost);
    } catch (ex) { }
    try {
      output = output.replace(
        /\{rest_api_root\}/gi,
        this.appConfig.restApiRoot,
      );
    } catch (ex) { }
    try {
      output = output.replace(/\{subscription_id\}/gi, data.id);
    } catch (ex) { }
    try {
      output = output.replace(
        /\{unsubscription_code\}/gi,
        data.unsubscriptionCode,
      );
    } catch (ex) { }
    try {
      output = output.replace(
        /\{unsubscription_url\}/gi,
        httpHost +
        this.appConfig.restApiRoot +
        '/subscriptions/' +
        data.id +
        '/unsubscribe?unsubscriptionCode=' +
        data.unsubscriptionCode,
      );
    } catch (ex) { }
    try {
      output = output.replace(/\{firstname\}/gi, data.firstname)
    } catch (ex) { }
    try {
      output = output.replace(/\{lastname\}/gi, data.lastname)
    } catch (ex) { }
    try {
      output = output.replace(/\{campaign\}/gi, data.campaign)
    } catch (ex) { }
    try {
      output = output.replace(/\{survey_url\}/gi, data.survey_url)
    } catch (ex) { }
    try {
      output = output.replace(
        /\{unsubscription_all_url\}/gi,
        httpHost +
        this.appConfig.restApiRoot +
        '/subscriptions/' +
        data.id +
        '/unsubscribe?unsubscriptionCode=' +
        data.unsubscriptionCode +
        '&additionalServices=_all',
      );
    } catch (ex) { }
    try {
      output = output.replace(
        /\{subscription_confirmation_url\}/gi,
        httpHost +
        this.appConfig.restApiRoot +
        '/subscriptions/' +
        data.id +
        '/verify?confirmationCode=' +
        data.confirmationRequest.confirmationCode,
      );
    } catch (ex) { }
    try {
      output = output.replace(
        /\{unsubscription_reversion_url\}/gi,
        httpHost +
        this.appConfig.restApiRoot +
        '/subscriptions/' +
        data.id +
        '/unsubscribe/undo?unsubscriptionCode=' +
        data.unsubscriptionCode,
      );
    } catch (ex) { }

    // for backward compatibilities
    try {
      output = output.replace(
        /\{confirmation_code\}/gi,
        data.confirmationRequest.confirmationCode,
      );
    } catch (ex) { }
    try {
      output = output.replace(/\{serviceName\}/gi, data.serviceName);
    } catch (ex) { }
    try {
      output = output.replace(/\{restApiRoot\}/gi, this.appConfig.restApiRoot);
    } catch (ex) { }
    try {
      output = output.replace(/\{subscriptionId\}/gi, data.id);
    } catch (ex) { }
    try {
      output = output.replace(
        /\{unsubscriptionCode\}/gi,
        data.unsubscriptionCode,
      );
    } catch (ex) { }
    try {
      if (data.data) {
        // substitute all other tokens with matching data.data properties
        const matches = output.match(/{.+?}/g);
        if (matches) {
          matches.forEach(function (e: string) {
            try {
              const token = (e.match(/{(.+)}/) ?? [])[1];
              const val = _.get(data.data, token);
              if (val) {
                output = output.replace(e, val);
              }
            } catch (ex) { }
          });
        }
      }
    } catch (ex) { }
    return output;
  }

  async getMergedConfig(
    configName: string,
    serviceName: string,
    next?: Function,
  ) {
    let data;
    try {
      data = await this.configurationRepository.findOne({
        where: {
          name: configName,
          serviceName: serviceName,
        },
      });
    } catch (ex) {
      if (next) {
        return next(ex, null);
      } else {
        throw ex;
      }
    }
    let res;
    try {
      res = _.merge({}, this.appConfig[configName]);
    } catch (ex) { }
    try {
      res = _.merge({}, res, (data as Configuration).value);
    } catch (ex) { }
    next?.(null, res);
    return res;
  }
}

export {axios};
