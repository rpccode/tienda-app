import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateCategoryUseCase } from 'src/application/use-cases/category/create-category.usecase';
import { ListCategoriesUseCase } from 'src/application/use-cases/category/list-categories.usecase';
import { CategoryTypeOrmRepository } from 'src/infrastructure/persistence/Category.orm.repository';
import { CategoryEntity } from 'src/infrastructure/persistence/entities/category.entity';
import { CategoryController } from 'src/interfaces/http/controllers/category.controller';

@Module({
    imports: [TypeOrmModule.forFeature([CategoryEntity])],
    controllers: [CategoryController],
    providers: [
      {
        provide: 'CategoryRepository',
        useClass: CategoryTypeOrmRepository,
      },
      CreateCategoryUseCase,
      ListCategoriesUseCase,
    ],
    exports: ['CategoryRepository'],
    
  })
export class CategoryModule {}
