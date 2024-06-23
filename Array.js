let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Neapolitan"];
iceCreamFlavors[3] // Pistachio

//add value
iceCreamFlavors[4] = "Butter Pecan"; //Changes "Neapolitan" to "Butter Pecan"
iceCreamFlavors.push("Mint Chip");

iceCreamFlavors.length // 6 flavors, because you recently added "Mint Chip"

//remove value
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Neapolitan", "Mint Chip"];
delete iceCreamFlavors[iceCreamFlavors.length-1];
console.log(iceCreamFlavors[length-1]) // undefined

//remove
iceCreamFlavor[iceCreamFlavor.length-1] = "your choice";
array.splice(<position index, <number of elements to remove>)

iceCreamFlavor.splice(2,1); 
iceCreamFlavor // [ 'Chocolate', 'Strawberry', 'Pistachio', 'Neapolitan', 'Mint Chip' ]

//forloop
for (let i = 0; i < 10; i++ ) {
  console.log(i);
}
//whileloop
//Counting up to 10
let i = 0;
while (i < 10) {
 console.log(i);
 i++;
}

let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Neapolitan", "Mint Chip"];

for (let i = 0; i < iceCreamFlavors.length; i++) {
  console.log(iceCreamFlavors[i]);
} // Ends when all flavors are printed

//for each
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(number => console.log(number)); // 1 2 3 4 5
//access current index 
numbers.forEach((number, index) => console.log(`Number ${number} ${index}`));

let numbers = [1, 2, -1, 4, 5];
for(let i = 0; i< numbers.length; i++>) {
  if (numbers[i] < 0) {
    break;
  }
  console.log(numbers[i]);
}
