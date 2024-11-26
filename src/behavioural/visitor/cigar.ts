import { TaxVisitorProtocol } from "./tax-visitor-protocol";
import { VisitablProduct } from "./visitable-product";

export class Cigar extends VisitablProduct {
  constructor(protected price: number) {
    super('Cigar', price)
  }

  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxesForCigar(this)
  }
}