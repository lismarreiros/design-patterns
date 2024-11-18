// composite - object tree
// creating a restaurant software, charging by item
// item price + total order price

import { MainDishBuilder } from "./classes/main-dish";

// import { MealBox } from "./classes/meal-box";
// import { Beans, Meat, Rice } from "./classes/meals";

// const rice = new Rice('Arroz', 5);
// const beans = new Beans('Feijão', 2);
// const meat = new Meat('Carne', 20);
// const mealBox = new MealBox();
// mealBox.add(rice, beans, meat);
// console.log(mealBox);
// console.log(mealBox.getPrice());

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal();
mainDishBuilder.makeDessert();
console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());
mainDishBuilder.reset();
const meal2 = mainDishBuilder.makeBeverage().getMeal()
console.log(meal2)