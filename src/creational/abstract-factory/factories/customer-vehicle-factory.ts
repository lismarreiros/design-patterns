import { Customer } from "../customer/customer";
import { Vehicle } from "../vehicle/vehicle";

export interface CreateVehicleCustomerFactory {
  createCustomer(name: string): Customer
  createVehicle(name: string, customer: string): Vehicle
}

