import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateSupplierUseCase } from 'src/application/use-cases/supplier/create-supplier.usecase';
import { ListSuppliersUseCase } from 'src/application/use-cases/supplier/list-suppliers.usecase';
import { SupplierEntity } from 'src/infrastructure/persistence/entities/supplier.entity';
import { SupplierTypeOrmRepository } from 'src/infrastructure/persistence/supplier.orm.repository';
import { SupplierController } from 'src/interfaces/http/controllers/supplier.controller';

@Module({
    imports: [TypeOrmModule.forFeature([SupplierEntity])],
    controllers: [SupplierController],
    providers: [
      {
        provide: 'SupplierRepository',
        useClass: SupplierTypeOrmRepository,
      },
      CreateSupplierUseCase,
      ListSuppliersUseCase,
    ],
    exports: ['SupplierRepository'],
    
  })
export class SupplierModule {}
