//Component
export abstract class ProductComponent {
  abstract getPrice(): number;

  add(product: ProductComponent): void {}
  remove(product: ProductComponent): void {}
}

// Leaf
export class ProductLeaf extends ProductComponent{
  constructor(public name: string, public price: number) {
    super()
  }

  getPrice(): number {
    return this.price;
  }
}

// Composite
export class ProductComposite extends ProductComponent {
  private children: ProductComponent[] = []
  
  add(...products: ProductComponent[]) {
    products.forEach(product => (this.children.push(product)))
  }

  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);
    if(productIndex !== -1) this.children.splice(productIndex, 1)
  }

  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0)
  }
}

const camiseta = new ProductLeaf('T-shirt', 40)
const celular = new ProductLeaf('Smartphone', 1000)
const caneta = new ProductLeaf('Pen', 10)
const productBox = new ProductComposite()
productBox.add(camiseta, celular, caneta)
console.log(productBox.getPrice())

const tablet = new ProductLeaf('Ipad', 3000)
const ereader = new ProductLeaf('Kindle', 1000)
const anotherBox = new ProductComposite()
anotherBox.add(tablet, ereader)
productBox.add(anotherBox)

console.log(productBox)
console.log(productBox.getPrice())