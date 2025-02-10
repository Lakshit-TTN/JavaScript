// Create a object calculator, which will have methods read,add,subtract and multiply. read method will use prompt to ask two values from user.
const calculator = {
    read() {
        let input1 = parseFloat(prompt("enter one number"));
        let input2 = parseFloat(prompt("enter two number"));
        return {
            input1:input1,
            input2:input2
        }
    },
    add(input1,input2){
        return input1+input2;
    },
    multiply(input1,input2){
        return input1*input2;
    },
    subtract(input1,input2){
        return input1-input2;
    }
};
function handleCalculator(){
    let values = calculator.read();
    operation(values);
}
function operation(values) {
    let operation = prompt("1.Addition \n 2.Multiplication \n 3.Subtraction");
    switch (operation) {
        case "1":
            alert(`Addition is ${calculator.add(values.input1,values.input2)}`);
            break;
        case "2":
            alert(`Multiplication is ${calculator.multiply(values.input1,values.input2)}`);
            break;
        case "3":
            alert(`Subtraction is ${calculator.subtract(values.input1,values.input2)}`);
            break;
        default:
            alert("wrong operation")
            break;
    }
}


// Create an object temperatureConverter with methods:
// read() → Asks the user to enter a temperature in Celsius
// toFahrenheit() → Converts it to Fahrenheit.
// toKelvin() → Converts it to Kelvin.
// display() → Displays the results in the console.
const converter = {
    temperatureInCelsius : 0,
    read : function() { 
        this.temperatureInCelsius = parseFloat(prompt("Enter Temperature in Celcius"));
    } ,
    toFahrenheit : function() { 
        return ((this.temperatureInCelsius * 9/5) + 32);
    } ,
    toKelvin : function() { 
        return this.temperatureInCelsius + 273.15;
    } ,
    display : function() { 
        console.log(`Temperature entered in Celcius is ${this.temperatureInCelsius} C \n
        Temperature in Fahrenheit is ${this.toFahrenheit()} F \n
        Temperature in Kelvin is ${this.toKelvin()} K`);
    } ,
};
function handleTemperature(){
    converter.read();
    converter.display();        
}


//ans 3
let x= 5;
function first() {
    console.log(x);
    let y = 10;
    function second() {
        console.log(y);
        console.log(z);
        let z = 20;
    }
    second();
}
first();
console.log(y);
