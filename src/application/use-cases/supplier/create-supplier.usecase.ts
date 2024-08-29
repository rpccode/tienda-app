// src/application/use-cases/create-supplier.usecase.ts
import { Inject } from "@nestjs/common";
import { Supplier } from "src/domain/entities/supplier.entity";
import { SupplierRepository } from "src/domain/repositories/supplier.repository";

export class CreateSupplierUseCase {
  constructor(
    @Inject('SupplierRepository')
    private readonly supplierRepository: SupplierRepository) {}

  async execute(
    companyName: string,
    contactName: string,
    contactTitle: string,
    address: string,
    city: string,
    postalCode: string,
    country: string,
    phone: string,
    homepage: string,
  ): Promise<void> {
    const supplier = new Supplier(
      0,
      companyName,
      contactName,
      contactTitle,
      address,
      city,
      postalCode,
      country,
      phone,
      homepage,
    );
    await this.supplierRepository.save(supplier);
  }
}
