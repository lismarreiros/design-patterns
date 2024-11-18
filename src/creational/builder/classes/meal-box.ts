import { MealCompositeProtocol } from "../interfaces/meal-composite-protocol";

export class MealBox implements MealCompositeProtocol {
  private readonly _children: MealCompositeProtocol[] = [];

  getPrice(): number {
    return this._children.reduce((sum, meal) => sum + meal.getPrice(), 0);
  }

  add(...meal: MealCompositeProtocol[]): void { // will accept more than 1 type of food
    meal.forEach((item) => this._children.push(item))
  }
}