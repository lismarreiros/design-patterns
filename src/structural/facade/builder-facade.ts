import { MainDishBuilder } from "../../creational/builder/classes/main-dish";

export class BuilderFacade {
  // Essa é a fachada para a pasta src/creational/builder/index.ts
  private mainDishBuilder = new MainDishBuilder();
  
  makeMeal1(): void {
    this.mainDishBuilder.makeMeal();
    console.log(this.mainDishBuilder.getMeal())
    console.log(this.mainDishBuilder.getPrice())
  }

  makeMeal2(): void {
    this.mainDishBuilder.reset();
    const meal2 = this.mainDishBuilder.makeBeverage().getMeal();
    console.log(meal2)
  }

}