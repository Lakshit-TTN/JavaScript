// Filter unique array members using Set.
const arr = [1,2,3,4,4,5,5,5,5,2];
const uniqueEle = new Set(arr);
console.log(Array.from(uniqueEle));//this creates array from set

// Filter anagrams using Map.
const words = ["mug","cap","tea","ate"];
const filterAnagrams = new Map();
words.forEach(word => {
    const sortedWord = word.split('').sort().join('');
        if (filterAnagrams.has(sortedWord)) {
            filterAnagrams.get(sortedWord).push(word);
        } else {
            filterAnagrams.set(sortedWord, [word]);
        }
});
filterAnagrams.forEach(anagramWord => {
    if (anagramWord.length > 1) {
        console.log(anagramWord);
    }
});

// Write a program to implement inheritance upto 3 classes.The Class must contain private and public variables and static functions.
class Vehicle {
    #wheels;
    constructor(type, wheels) {
        this.type = type;
        this.#wheels = wheels
    }
    static greet() {
        console.log("I am Static method in Vehicle");
    }
    details() {
        console.log(`vehicle is of type ${this.type} and has ${this.#wheels} wheels`);
    }
}
class Bike extends Vehicle {
    year = 1000;
    constructor(type, wheels, bikeName) {
        super(type, wheels);
        this.bikeName = bikeName;
    }
    details() {
        console.log(`Name is ${this.bikename}`);
    }
    static greet() {
        console.log("I am Static method in Bike");
    }
}
class Yamaha extends Bike {
    constructor(type, wheels, bikeName, price) {
        super(type, wheels, bikeName);
        this.price = price;
    }
    details() {
        console.log(`Price is ${this.price} rs`);
    }
    static greet() {
        console.log("I am Static method in Yamaha");
    }
}
const myYamaha = new Yamaha('bike', 2, 'yamaha FZ', 90000);
console.log(myYamaha.wheels);
console.log(myYamaha.bikeName); //yamaha FZ
console.log(myYamaha.price); //90000
myYamaha.details();//price is 90000
Vehicle.greet(); //static method called via class name
Bike.greet(); //static method called via class name
myYamaha.constructor.greet();//another way to call static method

// Write a program to implement a class having static functions
class Mobile {
    static total = 0 ;//static variable:this value is shared for all instances 
    constructor(brand) {
        this.brand = brand;
        Mobile.total+=1;
    }
    static mobCount() {
        console.log(`Total mobiles created are ${Mobile.total}`);
    }
    displayMobile() {
        console.log(`Mobile Brand is ${this.brand} `);
    }
}
const samsung = new Mobile("samsung");
const apple = new Mobile("apple");
console.log(Mobile.total); 
Mobile.mobCount();         
samsung.displayMobile();
apple.displayMobile();

// Import a module containing the constants and method for calculating area of circle, rectangle, cylinder.
import  modules  from "./modules.js";
const radius = 2;
const height = 5;
console.log(`area of circle ${modules.areaOfCircle(radius)}`);
console.log(`area of rectangle ${modules.areaOfRectangle(3,2)}`);
console.log(`area of cylinder ${modules.areaOfCylinder(radius,height)}`);
console.log(`PI value is ${modules.PI}`);

// Import a module for filtering unique elements in an array.
// import modules from "./modules.js";
modules.filterUniqueArrayElements([1,1,1,2,3,4,4]);

// Write a program to flatten a nested array to single level using arrow functions
const flatMyArray = (arr) => {
    let result = [];
    arr.forEach(ele => {
      if (Array.isArray(ele)) {
        result = result.concat(flatMyArray(ele));
      } else {
        result.push(ele);
      }
    });
    return result;
  };
const ans = flatMyArray([1,2,3,[4,5,[6,7,8]]]);
console.log(ans);

const arr = [1,2,3,[4,5,[6,7,8]]];
console.log(arr.flat(2));//here 2 defines the depth (bydefault it is 1)



