// src/application/use-cases/create-category.usecase.ts
import { Inject } from "@nestjs/common";
import { Category } from "src/domain/entities/category.entity";
import { CategoryRepository } from "src/domain/repositories/category.repository";

export class CreateCategoryUseCase {
  constructor(
    @Inject('CategoryRepository')
    private readonly categoryRepository: CategoryRepository) {}

  async execute(
    categoryName: string,
    description: string,
    picture: string,
  ): Promise<void> {
    const category = new Category(
      0,
      categoryName,
      description,
      picture,
    );
    await this.categoryRepository.save(category);
  }
}
