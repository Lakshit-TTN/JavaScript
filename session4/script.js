// Example for each ES6 feature
// Let and const
let a = 10;
a=20;
console.log(a);//can reassign but cant redeclare as it is block scope

const x=50;
x=10;//cant reassign and cant redeclare,it is also block scope
console.log(x);


// Block Scoping
function test() {
    let a = 10;
    if (a === 10) {
        const b = 20;
        let a = 99;
        console.log(a); //99 as let is block scoped
        console.log(b); //20
    }
    console.log(a); //10 here value is unchanged
    // console.log(b); //not defined-refrence error
}
test();

// Destructuring
const mobile = {
    name: 'apple',
    color: 'black',
    price: 10000
};
const {name:tempName,color,price} = mobile;
console.log(tempName); // apple
console.log(color); // black
console.log(price); // 10000

const array=[1,2,3,4,5,6];
const [first,second,...leftover]=array
console.log(first);//1
console.log(second);//2
console.log(leftover);//[3,4,5,6]


// Spread Operator
const arr=[1,2,3];
const arr2=['ram',"is a boy"];
const vehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
const finalArray=[...arr,...arr2];//we can spread arrays
const finalObj={...arr2,...vehicle};//we can also spread objects
console.log(finalArray);
console.log(finalObj);

// Arrow Function
const add = (a, b) => a + b; //we dont need to write return if we are not using {} and has one statement
console.log(add(1,2));

const multiple = (a,b) =>{
    return a*b;//we need to explicitly return here
}
console.log(multiple(5,2));

// Template String/Literal
const mobile = {
    name: 'apple',
    color: 'black',
    price: 10000
};
const {name,color,price}=mobile;
console.log(`I am buying ${name} mobile,
    of ${color} color at a ${price} Rs`);//Template Strings allow multiline strings and we can use dynamic data here



