import { Category } from '../entities/category.entity';

export interface CategoryRepository {
  findAll(): Promise<Category[]>;
  findById(id: number): Promise<Category | null>;
  save(category: Category): Promise<void>;
}