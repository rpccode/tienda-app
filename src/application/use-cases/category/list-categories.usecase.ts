// src/application/use-cases/list-categories.usecase.ts

import { Inject } from "@nestjs/common";
import { CategoryRepository } from "src/domain/repositories/category.repository";

export class ListCategoriesUseCase {
  constructor(
    @Inject('CategoryRepository')
    private readonly categoryRepository: CategoryRepository) {}

  async execute() {
    return this.categoryRepository.findAll();
  }
}
