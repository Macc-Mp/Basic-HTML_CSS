let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Neapolitan", "Mint Chip"];
iceCreamFlavors.find(flavor => flavor === "Chocolate") // "Chocolate"

let iceCreamFlavors = [
  { name: "Chocolate", type: "Chocolate" }, 
  { name: "Strawberry", type: "fruit"}, 
  { name: "Vanilla", type: "Vanilla"}, 
  { name: "Pistachio", type: "Nuts"}, 
  { name: "Neapolitan", type: "Chocolate"}, 
  { name: "Mint Chip", type: "Chocolate"}
];

iceCreamFlavors.filter(flavor => flavor.type === "Chocolate") // [{ name: "Chocolate", type: "Chocolate" }, { name: "Neapolitan", type: "Chocolate"}, { name: "Mint Chip", type: "Chocolate"}]
iceCreamFlavors.some(flavor => flavor.type === "Nuts") // true
iceCreamFlavors.filter(flavor => flavor.type !== "Nuts") // returns everything except for Pistachio.

//projection map
let iceCreamFlavors = [
  { name: "Chocolate", type: "Chocolate" }, 
  { name: "Strawberry", type: "fruit"}, 
  { name: "Vanilla", type: "Vanilla"}, 
  { name: "Pistachio", type: "Nuts"}, 
  { name: "Neapolitan", type: "Chocolate"}, 
  { name: "Mint Chip", type: "Chocolate"}
];
iceCreamFlavors.map(flavor => {
  flavor.price = 1;
  return flavor;
}) // every item now has a new property price: 1


let sales = [{
 date : '2021-05-01',
 amount: 2
},
{
 date : '2021-05-01',
 amount: 1
}
// and so on...
]

let sum = 0;
for( let i =0; i< sales.length; i++) {
  sum += sales[i].amount; 
}

//Better method for sales
sales.reduce((acc, curr) => acc + curr.amount, 0);
