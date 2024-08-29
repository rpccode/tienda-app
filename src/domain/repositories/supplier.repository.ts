import { Supplier } from '../entities/supplier.entity';

export interface SupplierRepository {
  findAll(): Promise<Supplier[]>;
  findById(id: number): Promise<Supplier | null>;
  save(supplier: Supplier): Promise<void>;
}