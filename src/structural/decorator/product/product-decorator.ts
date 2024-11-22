import { ProductProtocol } from "./product-protocol";

export class ProductDecorator implements ProductProtocol {
  constructor(protected product: ProductProtocol) {}

  getName(): string {
   return `${this.product.getName()} has a new stamp`
  }

  getPrice(): number {
    return this.product.getPrice() + 20
  }
}