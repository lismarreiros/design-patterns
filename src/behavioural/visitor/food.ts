import { TaxVisitorProtocol } from "./tax-visitor-protocol";
import { VisitablProduct } from "./visitable-product";

export class Food extends VisitablProduct {
  constructor(protected price: number) {
    super('Food', price)
  }

  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxesForFood(this)
  }
}