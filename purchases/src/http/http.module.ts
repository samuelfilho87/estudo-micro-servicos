import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import path from 'path';
import { MessagingModule } from 'src/messaging/messaging.module';
import { CustomersService } from 'src/services/customers.service';
import { ProductsService } from 'src/services/product.service';
import { PurchaseService } from 'src/services/purchase.service';

import { DatabaseModule } from '../database/database.module';
import { CustomersResolver } from './graphql/resolvers/customers.resolver';
import { ProductsResolver } from './graphql/resolvers/products.resolver';
import { PurchasesResolver } from './graphql/resolvers/purchases.resolver';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    MessagingModule,
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/ schema.gql'),
    }),
  ],
  providers: [
    // Services
    ProductsService,
    PurchaseService,
    CustomersService,

    // Resolvers
    ProductsResolver,
    PurchasesResolver,
    CustomersResolver,
  ],
})
export class HttpModule {}
