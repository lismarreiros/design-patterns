import { ShoppingOrder } from "./shopping-order";
import { ShoppingOrderState } from "./shopping-order-state";

export class OrderRejected implements ShoppingOrderState {
  private name = 'Rejeitado!'

  constructor(private order: ShoppingOrder) {} 

  getName(): string {
    return this.name
  }

  approvePayment(): void {
    console.log('Não é possível aprovar o pagament, devido ao pagamento recusado.')
  }

  rejectPayment(): void {
    console.log('Não é possível recusar um pagamento já recusado.')
  }

  waitPayment(): void {
    console.log('Não é possível mover para pendente, devido ao pagamento recusado.')
  }

  shipOrder(): void {
    console.log('Não é possível enviar o pedido, devido ao pagamento recusado.')
  }
}