import { Category } from "./category.entity";
import { Supplier } from "./supplier.entity";

export class Product {
    productId: number;
    productName: string;
    category: Category;
    supplier: Supplier;
    quantityPerUnit: number;
    unitPrice: number;
    unitsInStock: number;
    unitsOnOrder: number;
    discontinued: boolean;

    constructor(
        productName: string,
        unitPrice: number,
        category: Category,
        supplier: Supplier
    ) {
        this.productName = productName;
        this.unitPrice = unitPrice;
        this.category = category;
        this.supplier = supplier;
        this.discontinued = false;
        this.quantityPerUnit = 0;
        this.unitsInStock = 0;
        this.unitsOnOrder = 0;
    }

    static create(
        productName: string,
        unitPrice: number,
        category: Category,
        supplier: Supplier
    ): Product {
        return new Product(productName, unitPrice, category, supplier);
    }
}
