interface IceCream {
   flavor: string;
   scoops: number;
}

let myIceCream: IceCream = {
   flavor: 'vanilla',
   scoops: 2
}

console.log(myIceCream.flavor);

function tooManyScoops(dessert: IceCream) {
   if (dessert.scoops >= 4) {
      return dessert.scoops + ' is too many scoops!';
   } else {
      return 'Your order will be ready soon!';
   }
}

console.log(tooManyScoops({flavor: 'vanilla', scoops: 5}));

interface Sundae extends IceCream {
    sauce: 'chocolate' | 'caramel' | 'strawberry';
    nuts?: boolean;
    whippedCream?: boolean;
    instructions?: boolean;
}
let myIceCream: Sundae = {
    flavor: 'vanilla',
    scoops: 2
}
let myIceCream: Sundae = {
    flavor: 'vanilla',
    scoops: 2,
    sauce: 'caramel',
    nuts: true
}

function tooManyScoops(dessert: Sundae) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too many scoops!';
    } else {
        return 'Your order will be ready soon!';
    }
}
console.log(tooManyScoops({flavor: 'vanilla', scoops: 5, sauce: 'caramel'}));
