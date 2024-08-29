// src/application/use-cases/list-suppliers.usecase.ts

import { Inject } from "@nestjs/common";
import { SupplierRepository } from "src/domain/repositories/supplier.repository";


export class ListSuppliersUseCase {
  constructor(
    @Inject('SupplierRepository')
    private readonly supplierRepository: SupplierRepository) {}

  async execute() {
    return this.supplierRepository.findAll();
  }
}
