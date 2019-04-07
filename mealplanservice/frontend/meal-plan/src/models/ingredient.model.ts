export class Ingredient {
  id: number;

  constructor(
    public designation: string,
    public quantity: number,
    public unit: string
  ) {
  }
}
