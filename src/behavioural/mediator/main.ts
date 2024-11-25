import { Buyer } from "./buyer"
import { Mediator } from "./mediator"
import { Seller } from "./seller"

const mediator = new Mediator()
const seller1 = new Seller()
const seller2 = new Seller()

seller1.addProduct({ id: '1', name: 'Camisa', price: 79.0})
seller1.addProduct({ id: '2', name: 'Calça', price: 79.0})

seller2.addProduct({ id: '4', name: 'Blusa', price: 79.0})
seller2.addProduct({ id: '5', name: 'Short', price: 79.0})

mediator.addSeller(seller1, seller2)

const buyer = new Buyer(mediator)
buyer.viewProducts()
buyer.buy('4')
buyer.buy('2')

buyer.viewProducts()
seller1.buy('1')

seller1.viewProducts()