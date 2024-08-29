export class Supplier {
  constructor(
    public readonly supplierId: number,
    public readonly companyName: string,
    public readonly contactName: string,
    public readonly contactTitle: string,
    public readonly address: string,
    public readonly city: string,
    public readonly postalCode: string,
    public readonly country: string,
    public readonly phone: string,
    public readonly homepage: string,
  ) {}
}
