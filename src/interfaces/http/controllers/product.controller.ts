// src/interfaces/http/controllers/product.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateProductUseCase } from '../../../application/use-cases/product/create-product.usecase';
import { ListProductsUseCase } from 'src/application/use-cases/product/list-products.usecase';


@Controller('products')
export class ProductController {
  constructor(
    private readonly createProductUseCase: CreateProductUseCase,
    private readonly listProductsUseCase: ListProductsUseCase,
  ) {}

  @Get()
  async list() {
    return this.listProductsUseCase.execute();
  }

  @Post()
  async create(@Body() body: { name: string; price: number; categoryId: number; supplierId: number }) {
    await this.createProductUseCase.execute(body.name, body.price, body.categoryId, body.supplierId);
  }
}


