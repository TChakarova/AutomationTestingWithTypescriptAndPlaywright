// let vs const
let num: number = 5;
num = 10;
num = 15;

const welcomeMsg: string = "Welcome!";
// Error: Cannot assign to 'welcomeMsg2' because it is a constant.
//welcomeMsg="Hello!";

// string
let message: string = "Helllo, Peter!";
let messageLength: number = message.length;
console.log(`Length: ${messageLength}`);

//string interpolation
let messageMessageDetails: string =`Text message length is ${messageLength}`;
console.log(messageMessageDetails);

// number and number operations
let numOne: number = 10;
let numTwo: number = 5;
let add: number = numOne + numTwo;
let subtract: number = numOne - numTwo;
let multiply: number = numOne * numTwo;
let divide: number = numOne / numTwo;

// boolean type (true/false)
let areEqual: boolean = numOne === numTwo;
let isGreater: boolean = numOne >numTwo;
let isGreaterOrEqual: boolean = numOne >= numTwo;

//logical operators
let areEqualTo: boolean = numOne ===10 &&  numTwo===6;
console.log(areEqualTo); // true