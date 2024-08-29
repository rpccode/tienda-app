// src/interfaces/http/controllers/category.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCategoryUseCase } from 'src/application/use-cases/category/create-category.usecase';
import { ListCategoriesUseCase } from 'src/application/use-cases/category/list-categories.usecase';


@Controller('categories')
export class CategoryController {
  constructor(
    private readonly createCategoryUseCase: CreateCategoryUseCase,
    private readonly listCategoriesUseCase: ListCategoriesUseCase,
  ) {}

  @Get()
  async list() {
    return this.listCategoriesUseCase.execute();
  }

  @Post()
  async createCategory(@Body() body: { name: string, description: string, picture: string }) {
    await this.createCategoryUseCase.execute(body.name, body.description, body.picture);
  }
}
