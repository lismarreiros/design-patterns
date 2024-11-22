import { ProductDecorator } from "./product/product-decorator";
import { Tshirt } from "./product/t-shirt";

const tshirt = new Tshirt();
const decoratedTshirt = new ProductDecorator(tshirt)
console.log(decoratedTshirt.getName())
console.log(decoratedTshirt.getPrice())