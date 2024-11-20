// import { Car } from "./vehicle/car";

import { CarFactory } from "./factories/car-factory";

// const fusca = new Car('Fusca');
// fusca.pickUp('Joana');
// fusca.stop()

const carFactory = new CarFactory();
const fusca = carFactory.getVehicle('Fusca');
fusca.pickUp('Joana');
fusca.stop();