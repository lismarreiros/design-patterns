import { SystemUserProxy } from "./system-user/system-user-proxy";

async function clientcode() {
  const user = new SystemUserProxy('lis', 'l1s');
  console.log('Isso vai levar 2 segundos.')
  console.log(await user.getAddresses())

  console.log('Isso vai se repetir (CACHE)')
  
  for(let i=0;i < 5; i++) {
    console.log(await user.getAddresses())
  }
}

clientcode()
