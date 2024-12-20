import { CEOBudgetHandler } from "./ceo-budget-handler";
import { CustomerBudget } from "./customer-budget";
import { DirectorBudgetHandler } from "./director-budget-handler";
import { ManagerBudgetHandler } from "./manager-budget-handler";
import { SellerBudgetHandler } from "./seller";

const customerBudget = new CustomerBudget(50000);
const seller = new SellerBudgetHandler();
seller
  .setNextHandler(new ManagerBudgetHandler())
  .setNextHandler(new DirectorBudgetHandler())
  .setNextHandler(new CEOBudgetHandler())

seller.handle(customerBudget)
console.log(customerBudget)