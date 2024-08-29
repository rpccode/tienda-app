export class Category {
  constructor(
    public readonly categoryId: number,
    public readonly categoryName: string,
    public readonly description: string,
    public readonly picture: string,
  ) {}
}
