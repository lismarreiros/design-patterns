import { AlcoholicDrink } from "./alcoholic-drink";
import { Cigar } from "./cigar";
import { Food } from "./food";

export interface TaxVisitorProtocol {
  calculateTaxesForFood(food: Food): number
  calculateTaxesForCigar(cigar: Cigar): number
  calculateTaxesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number
}