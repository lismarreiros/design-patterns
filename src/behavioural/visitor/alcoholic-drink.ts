import { TaxVisitorProtocol } from "./tax-visitor-protocol";
import { VisitablProduct } from "./visitable-product";

export class AlcoholicDrink extends VisitablProduct {
  constructor(protected price: number) {
    super('AlcoholicDrink', price)
  }

  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxesForAlcoholicDrink(this)
  }
}