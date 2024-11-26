import { MyDataStructure } from "./my-data-structure";

const dataStructure = new MyDataStructure();
dataStructure.addItem('A', 'B', 'C', 'D', 'E', 'F')

for(const data of dataStructure) {
  console.log(data)
}