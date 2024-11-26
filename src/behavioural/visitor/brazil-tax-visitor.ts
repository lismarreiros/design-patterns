import { AlcoholicDrink } from "./alcoholic-drink";
import { Cigar } from "./cigar";
import { Food } from "./food";
import { TaxVisitorProtocol } from "./tax-visitor-protocol";

export class BrazilTaxVisitor implements TaxVisitorProtocol {
  calculateTaxesForFood(food: Food): number {
    return food.getPrice() + food.getPrice() * 0.05
  }

  calculateTaxesForCigar(cigar: Cigar): number {
    return cigar.getPrice() + cigar.getPrice() * 1.5 
  }

  calculateTaxesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number {
    return alcoholicDrink.getPrice() + alcoholicDrink.getPrice() * 0.5
  }
}