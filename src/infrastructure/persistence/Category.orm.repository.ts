// src/infrastructure/typeorm/repositories/category.typeorm-repository.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/domain/entities/category.entity';
import { CategoryRepository } from 'src/domain/repositories/category.repository';
import { Repository } from 'typeorm';
import { CategoryEntity } from './entities/category.entity';


@Injectable()
export class CategoryTypeOrmRepository implements CategoryRepository {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  async findById(id: number): Promise<Category | null> {
    const categoryEntity = await this.categoryRepository.findOne({ where: { id } });
    if (!categoryEntity) {
      return null;
    }
    return new Category(
      categoryEntity.id,
      categoryEntity.categoryName,
      categoryEntity.description,
      categoryEntity.picture,
    );
  }

  async save(category: Category): Promise<void> {
    const categoryEntity = this.categoryRepository.create(category);
    await this.categoryRepository.save(categoryEntity);
  }

  async findAll(): Promise<Category[]> {
    const categoryEntities = await this.categoryRepository.find();
    return categoryEntities.map(
      (entity) =>
        new Category(
          entity.id,
          entity.categoryName,
          entity.description,
          entity.picture,
        ),
    );
  }
}
