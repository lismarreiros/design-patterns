import { deliveryContext } from "./delivery/delivery-context"
import { DeliveryFactory } from "./delivery/delivery-factory"

const factory = new DeliveryFactory()
deliveryContext(factory, 'luiz', '29a', 'Av. Brasil', 'sp')
deliveryContext(factory, 'helena', '20', 'Av. Marechal', 'bh')
deliveryContext(factory, 'joão', '29a', 'Av. Brasil', 'sp')

console.log()
console.log(factory.getLocations())