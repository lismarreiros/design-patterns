import { MyDatabaseClassic } from "./db/my-database-classic";

const db1 = MyDatabaseClassic.instance;
db1.add({ name: 'Max', age: 40 });
db1.add({ name: 'Carlos', age: 42 });
db1.add({ name: 'Ocon', age: 30 });
db1.remove(2);

export { db1 };
