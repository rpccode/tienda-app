// src/infrastructure/typeorm/repositories/supplier.typeorm-repository.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Supplier } from 'src/domain/entities/supplier.entity';
import { SupplierRepository } from 'src/domain/repositories/supplier.repository';
import { Repository } from 'typeorm';
import { SupplierEntity } from './entities/supplier.entity';


@Injectable()
export class SupplierTypeOrmRepository implements SupplierRepository {
  constructor(
    @InjectRepository(SupplierEntity)
    private readonly supplierRepository: Repository<SupplierEntity>,
  ) {}

  async findById(id: number): Promise<Supplier | null> {
    const supplierEntity = await this.supplierRepository.findOne({ where: { supplierId:id } });
    if (!supplierEntity) {
      return null;
    }
    return new Supplier(
      supplierEntity.supplierId,
      supplierEntity.companyName,
      supplierEntity.contactName,
      supplierEntity.contactTitle,
      supplierEntity.address,
      supplierEntity.city,
      supplierEntity.postalCode,
      supplierEntity.country,
      supplierEntity.phone,
      supplierEntity.homepage,
    );
  }

  async save(supplier: Supplier): Promise<void> {
    const supplierEntity = this.supplierRepository.create(supplier);
    await this.supplierRepository.save(supplierEntity);
  }

  async findAll(): Promise<Supplier[]> {
    const supplierEntities = await this.supplierRepository.find();
    return supplierEntities.map(
      (entity) =>
        new Supplier(
          entity.supplierId,
          entity.companyName,
          entity.contactName,
          entity.contactTitle,
          entity.address,
          entity.city,
          entity.postalCode,
          entity.country,
          entity.phone,
          entity.homepage,
        ),
    );
  }
}
