import { Product } from "src/domain/entities/product.entity";
import { ProductRepository } from "src/domain/repositories/product.repository";
import { CategoryRepository } from "src/domain/repositories/category.repository";
import { SupplierRepository } from "src/domain/repositories/supplier.repository";
import { Inject } from "@nestjs/common";

export class CreateProductUseCase {
    constructor(
        @Inject('ProductRepository')
        private readonly productRepository: ProductRepository,
        @Inject('CategoryRepository')
        private readonly categoryRepository: CategoryRepository,
        @Inject('SupplierRepository')
        private readonly supplierRepository: SupplierRepository
    ) {}
  
    async execute(
        name: string,
        price: number,
        categoryId: number,
        supplierId: number
    ): Promise<void> {
        // Fetch Category and Supplier entities by ID
        const category = await this.categoryRepository.findById(categoryId);
        const supplier = await this.supplierRepository.findById(supplierId);

        if (!category) {
            throw new Error(`Category with ID ${categoryId} not found`);
        }

        if (!supplier) {
            throw new Error(`Supplier with ID ${supplierId} not found`);
        }

        // Create the Product instance
        const product = Product.create(name, price, category, supplier);
        await this.productRepository.save(product);
    }
}
