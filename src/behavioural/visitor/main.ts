import { AlcoholicDrink } from "./alcoholic-drink";
import { BrazilTaxVisitor } from "./brazil-tax-visitor";
import { Cigar } from "./cigar";
import { Food } from "./food";

const food = new Food(10)
const cigar = new Cigar(12)
const alcoholicDrink = new AlcoholicDrink(20)
const brazilTaxVisitor = new BrazilTaxVisitor()

const cart = [food, cigar, alcoholicDrink] 
const total = cart.reduce((sum, item) => item.getPrice() + sum, 0)
const totalWithBrazilTaxes = cart.reduce((sum, item) => item.getPriceWithTaxes(brazilTaxVisitor) + sum, 0)

console.log(total, totalWithBrazilTaxes)