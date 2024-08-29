import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateProductUseCase } from 'src/application/use-cases/product/create-product.usecase';
import { ListProductsUseCase } from 'src/application/use-cases/product/list-products.usecase';
import { ProductEntity } from 'src/infrastructure/persistence/entities/product.entity';
import { TypeOrmProductRepository } from 'src/infrastructure/persistence/product.orm.repository';
import { ProductController } from 'src/interfaces/http/controllers/product.controller';
import { CategoryModule } from './category.module';
import { SupplierModule } from './supplier.module';

@Module({
    imports: [TypeOrmModule.forFeature([ProductEntity]),CategoryModule,SupplierModule],
    controllers: [ProductController],
    providers: [
      {
        provide: 'ProductRepository',
        useClass: TypeOrmProductRepository,
      },
      CreateProductUseCase,
      ListProductsUseCase,
    ],
  })
export class ProductModule {}
