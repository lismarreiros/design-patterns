import { SystemUserAddressesProtocol, SystemUserProtocol } from "./system-user-protocol";

export class AdminUser implements SystemUserProtocol {
  public firstName: string;
  public userName: string;

  constructor(firstName: string, userName: string) {
    this.firstName = firstName;
    this.userName = userName;
  }
  async getAddresses(): Promise<SystemUserAddressesProtocol[]> {
    return new Promise((resolve) => {
      return setTimeout(() => {
        return resolve([
          {street: 'Av. Brasil', number: 313},
          {street: 'Rua Avocado', number: 404}
        ])
      }, 2000)
    }) 
  }
}