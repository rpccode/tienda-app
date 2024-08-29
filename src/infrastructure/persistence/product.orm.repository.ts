import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "src/domain/entities/product.entity";
import { ProductRepository } from "src/domain/repositories/product.repository";
import { Repository } from "typeorm";
import { ProductEntity } from "./entities/product.entity";
import { CategoryEntity } from "./entities/category.entity";
import { SupplierEntity } from "./entities/supplier.entity";


@Injectable()
export class TypeOrmProductRepository implements ProductRepository {
    constructor(
        @InjectRepository(ProductEntity)
        private readonly repository: Repository<ProductEntity>,
        @Inject('CategoryRepository')
        private readonly categoryRepository: Repository<CategoryEntity>,
        @Inject('SupplierRepository')
        private readonly supplierRepository: Repository<SupplierEntity>,
    ) {}

    async findAll(): Promise<Product[]> {
        const entities = await this.repository.find({
            relations: ['category', 'supplier']
        });

        return entities.map(
            e => Product.create(e.productName, e.unitPrice, e.category, e.supplier)
        );
    }

    async findById(id: number): Promise<Product | null> {
        const entity = await this.repository.findOne({
            where: { productId: id },
            relations: ['category', 'supplier']
        });

        if (!entity) {
            return null;
        }

        return Product.create(entity.productName, entity.unitPrice, entity.category, entity.supplier);
    }

    async save(product: Product): Promise<void> {
        const entity = new ProductEntity();
        entity.productName = product.productName;
        entity.unitPrice = product.unitPrice;
        entity.category = product.category as CategoryEntity; // assuming Category is of type CategoryEntity
        entity.supplier = product.supplier as SupplierEntity; // assuming Supplier is of type SupplierEntity
        entity.quantityPerUnit = product.quantityPerUnit;
        entity.unitsInStock = product.unitsInStock;
        entity.unitsOnOrder = product.unitsOnOrder;
        entity.discontinued = product.discontinued;

        await this.repository.save(entity);
    }
}
