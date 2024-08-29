import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { DomainModule } from './domain/domain.module';
import { ApplicationModule } from './application/application.module';
import { InterfacesModule } from './interfaces/interfaces.module';
import { ProductModule } from './modules/product.module';
import { CategoryModule } from './modules/category.module';
import { SupplierModule } from './modules/supplier.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from './infrastructure/persistence/entities/category.entity';
import { ProductEntity } from './infrastructure/persistence/entities/product.entity';
import { SupplierEntity } from './infrastructure/persistence/entities/supplier.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'northwind',
      password: 'northwind',
      database: 'northwind',
      entities: [
          ProductEntity,
          CategoryEntity,
          SupplierEntity
      ],
      synchronize: false,
      logging:['query']
  }),
    InfrastructureModule,
    DomainModule,
    ApplicationModule,
    InterfacesModule,
    ProductModule,
    CategoryModule,
    SupplierModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
