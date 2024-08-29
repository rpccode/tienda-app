// src/interfaces/http/controllers/supplier.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateSupplierUseCase } from 'src/application/use-cases/supplier/create-supplier.usecase';
import { ListSuppliersUseCase } from 'src/application/use-cases/supplier/list-suppliers.usecase';


@Controller('suppliers')
export class SupplierController {
  constructor(
    private readonly createSupplierUseCase: CreateSupplierUseCase,
    private readonly listSuppliersUseCase: ListSuppliersUseCase,
  ) {}

  @Get()
  async list() {
    return this.listSuppliersUseCase.execute();
  }

  @Post()
  async createSupplier(@Body() body: { 
    companyName: string, 
    contactName: string, 
    contactTitle: string, 
    address: string, 
    city: string, 
    postalCode: string, 
    country: string, 
    phone: string, 
    homepage: string 
  }) {
    await this.createSupplierUseCase.execute(
      body.companyName,
      body.contactName,
      body.contactTitle,
      body.address,
      body.city,
      body.postalCode,
      body.country,
      body.phone,
      body.homepage,
    );
  }
}
