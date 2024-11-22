export type SystemUserAddressesProtocol = {street: string, number: number}

export interface SystemUserProtocol {
  firstName: string;
  userName: string;

  getAddresses(): Promise<SystemUserAddressesProtocol[]>
}