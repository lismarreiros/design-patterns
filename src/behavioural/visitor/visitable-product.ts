import { TaxVisitorProtocol } from "./tax-visitor-protocol"

export abstract class  VisitablProduct {
  constructor(private name: string, protected price: number) {}

  getName(): string {
   return this.name
  }

  getPrice(): number {
    return this.price
  }

  abstract getPriceWithTaxes(visitor: TaxVisitorProtocol): number;
}