import { Inject } from "@nestjs/common";
import { ProductRepository } from "src/domain/repositories/product.repository";


export class ListProductsUseCase {
  constructor(
    @Inject('ProductRepository')
    private readonly productRepository: ProductRepository
  ) {}

  async execute() {
    return this.productRepository.findAll();
  }
}