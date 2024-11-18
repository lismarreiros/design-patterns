import { MyDatabaseClassic } from "./db/my-database-classic";
import { db1 } from './module_a';

const db2 = MyDatabaseClassic.instance;
db2.add({ name: 'Lando', age: 40 });
db2.add({ name: 'Lewis', age: 42 });
db2.add({ name: 'Charles', age: 30 });
db2.remove(0);
db2.show();

console.log(db1 === db2)