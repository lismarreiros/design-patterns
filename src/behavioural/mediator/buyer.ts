import { Mediator } from "./mediator";

export class Buyer {
  constructor(private mediator: Mediator) {}

  viewProducts(): void { // saber quais produtos tem
    this.mediator.showProducts()
  }

  buy(id: string): void {
    this.mediator.buy(id)
  }
}