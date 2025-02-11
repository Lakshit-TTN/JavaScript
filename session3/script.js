// Q1. Create a hierarchy of person, employee and developers. 
const person = {
    name:"ram",
    age:20,
    greet: function () {
        console.log(`My name is ${this.name} and my age is ${this.age} years`);
    }
};
const employee = Object.create(person);
employee.jobTitle = "sde",
employee.greet = function () {
    console.log(`My name is ${this.name} and my age is ${this.age} years and i am a ${this.jobTitle}.`);
};
const developers = Object.create(employee);
developers.salary = 10000
developers.greet = function () {
    console.log(`My name is ${this.name} and my age is ${this.age} years and i am a ${this.jobTitle} with salary ${this.salary}`);
 };
developers.greet();


// Q2. Given an array, say [1,2,3,4,5]. Print each element of an array after 3 secs.
const array=[1,2,3,4,5];
let index=0;
const interval = setInterval(() => { 
  console.log(array[index]);
  index++;
  if (index === array.length) {
    clearInterval(interval);
  }
}, 3000);


// Q3. Explain difference between Bind and Call (example).
var animal = function () {
    console.log(this.type);
};
var dog = { type: 'dog' };
animal.call(dog);
// here if we dont use call 'this' would refer to the context in which the function is called here it is global,
// but by using call(dog), we are forcing this to refer to the dog object
// bY using call wwe can change where this should point.

var car = function () {
    console.log(this.type);
};
var sedan = { type: 'sedan' };
var bindCar = car.bind(sedan);
bindCar();
//bind is same as call but it does not call the function immediately unlike call
//instead it returns a function that can be called later


// Q4. Explain 3 properties of argument object.
//1.
function example(a, b, c) {
    console.log(arguments.length);
}
example(1, 2, 3);
//The length property returns the number of arguments passed to the function

//2.
function example2(a, b) {
    console.log(arguments[0]); 
    console.log(arguments[1]); 
}
example2(1, 2);
// The arguments object is like an array , means you can access its elements using the index
// Each argument passed to the function is stored at a specific index starting from 0.

//3.
function example3(...args) {
    console.log(args); 
}
example3(1, 2, 3);
// With the introduction of ES6, rest parameters (...args) are often used 
// over the arguments object because they provide better support for array methods and are more flexible




// Q5. Create a function which returns number of invocations and number of instances of a function.
//with class
// class mobile {
//    static instances = 0;
//    static invocations = 0;
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//         mobile.instances++; 
//         this.mydetails = function getDetails() {
//             mobile.invocations++;
//             console.log(`name of mobile is ${name} and it is made in ${year}`);
//         };
//         this.getCount = function getCount() {
//             return {
//                 myinstances: mobile.instances,
//                 myinvocations: mobile.invocations
//             };
//         };
//     }
// }
// const nokia =  new mobile("nokia",1992);
// const apple =  new mobile("apple",2001);
// new mobile("apple",2001);
// apple.mydetails();
// nokia.mydetails();
// nokia.mydetails();
// const counts = nokia.getCount();
// console.log(`instances count is ${counts.myinstances}`);
// console.log(`invocation count is ${counts.myinvocations}`);



//with closures
let instances = 0;
let invocations = 0;
function createMobile(name, year) {
    instances++;
    const getDetails = function () {
        invocations++;
        console.log(`name of mobile is ${name} and it is made in ${year}`);
    };
    const getCount = function () {
        return {
            instances,
            invocations
        };
    };

    return {
        getDetails,
        getCount
    };
}

const nokia = createMobile("nokia", 1992);
const apple = createMobile("apple", 2001);
createMobile("apple", 2001); 

apple.getDetails();
nokia.getDetails();
nokia.getDetails();

const counts = nokia.getCount();
console.log(`instances count is ${counts.instances}`);
console.log(`invocation count is ${counts.invocations}`);





// Q6. Create a timer 
// const startButton = document.getElementById("startBtn");
// const pauseButton = document.getElementById("pauseBtn");
// const stopButton = document.getElementById("stopBtn");
// const countDisplay = document.getElementById("timer");

// function timer() {
//     let counter= 0 ;
//     let timerToken
//     function startTimer() {
//         timerToken = setInterval(function() {
//             counter++;
//             countDisplay.textContent = counter;
//         }, 1000); 
//         startButton.disabled = true;
//         stopButton.disabled = false;
//         pauseButton.disabled = false;
//     }
//     function pauseTimer() {
//         clearInterval(timerToken);
//         stopButton.disabled = true;
//         pauseButton.disabled = true;
//         startButton.disabled = false;
//     }
//     function stopTimer() {
//         clearInterval(timerToken);
//         counter=0;
//         countDisplay.textContent = 0;
//         stopButton.disabled = true;
//         pauseButton.disabled = true;
//         startButton.disabled = false;
//     }
//     return{
//         startTimer,
//         pauseTimer,
//         stopTimer
//     }
// }
// const clock =  timer()
// console.log(startButton)
// startButton.addEventListener("click",clock.startTimer);
// pauseButton.addEventListener("click",clock.pauseTimer);
// stopButton.addEventListener("click",clock.stopTimer);



// Q7. Explain 5 array methods with example.
// const array = [1,2,3,4,5,6,7,8,9,10];

// console.log(array.length);//tells the length if the array

// const slicedArray = array.slice(3,5)//returns an array with defined range slice(startIndex,endIndex)where lastIndex is exclusive
// console.log('sliced array',slicedArray);
// console.log('original array',array);//it does not modifies the original array

// console.log('Spliced array ',array.splice(2,4));//it removes the elements from the array where splice(startIndex,deleteCount)
// console.log('original array',array);//it modifies the original array

// console.log(array.push(11));//adds element to the last of array and returns the updated length
// console.log('new array',array);

// console.log(array.shift());//Removes the first element from an array and returns it. 
// console.log('array after shift',array);


