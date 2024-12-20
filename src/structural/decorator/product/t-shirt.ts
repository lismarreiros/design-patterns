import { ProductProtocol } from "./product-protocol";

export class Tshirt implements ProductProtocol {
  private name = 'Camiseta';
  private price = 49.9;

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }
}