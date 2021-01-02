import {ApplicationConfig, CoreBindings, Getter, inject} from '@loopback/core';
import {DefaultCrudRepository, Entity, juggler} from '@loopback/repository';
import {MiddlewareBindings, MiddlewareContext} from '@loopback/rest';
const ipRangeCheck = require('ip-range-check');

export class BaseCrudRepository<
  T extends Entity,
  ID,
  Relations extends object = {}
> extends DefaultCrudRepository<T, ID, Relations> {
  constructor(
    entityClass: typeof Entity & {
      prototype: T;
    },
    dataSource: juggler.DataSource,
    @inject.getter(MiddlewareBindings.CONTEXT)
    protected getHttpContext: Getter<MiddlewareContext>,
    @inject(CoreBindings.APPLICATION_CONFIG)
    protected appConfig: ApplicationConfig,
  ) {
    super(entityClass, dataSource);
  }

  async isAdminReq(
    httpCtx: any,
    ignoreAccessToken?: boolean,
    ignoreSurrogate?: boolean,
  ): Promise<boolean> {
    // internal requests
    if (!httpCtx) {
      return true;
    }
    const request = httpCtx.req || httpCtx.request;
    if (!request) {
      return true;
    }
    if (!ignoreSurrogate) {
      if (
        request.get('SM_UNIVERSALID') ||
        request.get('sm_user') ||
        request.get('smgov_userdisplayname') ||
        request.get('is_anonymous')
      ) {
        return false;
      }
    }
    if (!ignoreAccessToken) {
      try {
        const token = httpCtx.args.options?.accessToken;
        if (token?.userId) {
          return true;
        }
      } catch (ex) {}
    }

    const adminIps = this.appConfig.adminIps || this.appConfig.defaultAdminIps;
    if (adminIps && adminIps.length > 0) {
      return adminIps.some(function (e: string) {
        return ipRangeCheck(request.ip, e);
      });
    }
    return false;
  }

  async getCurrentUser(httpCtx: any) {
    // internal requests
    if (!httpCtx) return null;
    const request = httpCtx.req || httpCtx.request;
    if (!request) return null;
    const currUser =
      request.get('SM_UNIVERSALID') ||
      request.get('sm_user') ||
      request.get('smgov_userdisplayname');
    if (!currUser) {
      return null;
    }
    if (await this.isAdminReq(httpCtx, undefined, true)) {
      return currUser;
    }
    const siteMinderReverseProxyIps =
      this.appConfig.siteMinderReverseProxyIps ||
      this.appConfig.defaultSiteMinderReverseProxyIps;
    if (!siteMinderReverseProxyIps || siteMinderReverseProxyIps.length <= 0) {
      return null;
    }
    // rely on express 'trust proxy' settings to obtain real ip
    const realIp = request.ip;
    const isFromSM = siteMinderReverseProxyIps.some(function (e: string) {
      return ipRangeCheck(realIp, e);
    });
    return isFromSM ? currUser : null;
  }

  async updateTimestamp(ctx: any) {
    let req;
    try {
      const httpCtx = await this.getHttpContext();
      req = httpCtx.request;
    } catch (ex) {}
    let token;
    try {
      // todo: obtain access token
      token = ctx.options.httpContext.args.options?.accessToken;
    } catch (ex) {}
    try {
      if (ctx.data) {
        ctx.data.updated = new Date();
        ctx.data.updatedBy = {
          ip: req?.ip,
          eventSrc: ctx.options?.eventSrc,
        };
        if (token?.userId) {
          ctx.data.updatedBy.adminUser = token.userId;
        }
        if (ctx.isNewInstance) {
          ctx.data.createdBy = {
            ip: req?.ip,
          };
          if (token?.userId) {
            ctx.data.createdBy.adminUser = token.userId;
          }
        }
      }
    } catch (ex) {}
  }
}
