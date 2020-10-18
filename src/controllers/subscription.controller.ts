import {
  ApplicationConfig,
  CoreBindings,
  inject,
  intercept,
} from '@loopback/core';
import {Filter, Where} from '@loopback/filter';
import {Count, CountSchema, repository} from '@loopback/repository';
import {
  del,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  oas,
  param,
  patch,
  post,
  put,
  requestBody,
} from '@loopback/rest';
import {
  AccessCheckForGetRequestInterceptor,
  SubscriptionAfterRemoteInteceptorInterceptor,
} from '../interceptors';
import {Subscription} from '../models';
import {ConfigurationRepository, SubscriptionRepository} from '../repositories';
import {BaseController} from './base.controller';

@intercept(SubscriptionAfterRemoteInteceptorInterceptor.BINDING_KEY)
@oas.tags('subscription')
export class SubscriptionController extends BaseController {
  constructor(
    @repository(SubscriptionRepository)
    public subscriptionRepository: SubscriptionRepository,
    @inject(CoreBindings.APPLICATION_CONFIG)
    appConfig: ApplicationConfig,
    @repository(ConfigurationRepository)
    public configurationRepository: ConfigurationRepository,
  ) {
    super(appConfig, configurationRepository);
  }

  @post('/subscriptions', {
    responses: {
      '200': {
        description: 'Subscription model instance',
        content: {'application/json': {schema: {'x-ts-type': Subscription}}},
      },
    },
  })
  async create(
    @requestBody() subscription: Subscription,
  ): Promise<Subscription> {
    return this.subscriptionRepository.create(subscription);
  }

  @intercept(AccessCheckForGetRequestInterceptor.BINDING_KEY)
  @get('/subscriptions/count', {
    responses: {
      '200': {
        description: 'Subscription model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Subscription)) where?: Where,
  ): Promise<Count> {
    return this.subscriptionRepository.count(where);
  }

  @intercept(AccessCheckForGetRequestInterceptor.BINDING_KEY)
  @get('/subscriptions', {
    responses: {
      '200': {
        description: 'Array of Subscription model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Subscription}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Subscription))
    filter?: Filter,
  ): Promise<Subscription[]> {
    return this.subscriptionRepository.find(filter);
  }

  @patch('/subscriptions', {
    responses: {
      '200': {
        description: 'Subscription PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() subscription: Subscription,
    @param.query.object('where', getWhereSchemaFor(Subscription)) where?: Where,
  ): Promise<Count> {
    return this.subscriptionRepository.updateAll(subscription, where);
  }

  @get('/subscriptions/{id}', {
    responses: {
      '200': {
        description: 'Subscription model instance',
        content: {'application/json': {schema: {'x-ts-type': Subscription}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Subscription> {
    return this.subscriptionRepository.findById(id);
  }

  @patch('/subscriptions/{id}', {
    responses: {
      '204': {
        description: 'Subscription PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() subscription: Subscription,
  ): Promise<void> {
    await this.subscriptionRepository.updateById(id, subscription);
  }

  @put('/subscriptions/{id}', {
    responses: {
      '204': {
        description: 'Subscription PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() subscription: Subscription,
  ): Promise<void> {
    await this.subscriptionRepository.replaceById(id, subscription);
  }

  @del('/subscriptions/{id}', {
    responses: {
      '204': {
        description: 'Subscription DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.subscriptionRepository.deleteById(id);
  }
}
