//basic async operatin
console.log("Start of async operation");

setTimeout(() => {
    console.log("Async operation completed after 1 second");
}, 1000);

console.log("End of async operation");

//multiple async operations

function setTimeouts() {
    console.log("Starting multiple async operations");
    setTimeout(() => {
        console.log("First async operation completed after 3 seconds");
    }, 3000);

    setTimeout(() => {
        console.log("Second async operation completed after 1 second");
    }, 1000);
    setTimeout(() => {
        console.log("Third async operation completed after 2 seconds");
    }, 2000);
}
setTimeouts();

//async await syntax
function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function demo() {
    await delay(2000);
    console.log("Async operation with async/await completed after 2 seconds");
    await delay(3000);
    console.log("Another async operation with async/await completed after 3 seconds");
    await delay(1000);
    console.log("Yet another async operation with async/await completed after 1 second");
}
demo();

type Rating = {
    rate: number;
    count: number;
};

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
};
async function getData(): Promise<void> {
    try {
        const response = await fetch('https://fakestoreapi.com/products/1');
        const data: Product = await response.json();
        console.log(data);
    }
    catch (error) {
        console.error(error);
    }
}
    getData();


    //try-catch-finally
    function divideNumbers(numOne: number, numTwo: number) {
        try {
            if (numTwo === 0) {
                throw new Error("Division by zero is not allowed.");
            }
            else {
                const result: number = numOne / numTwo;
                console.log(`Result: ${result}`);
            }

        } catch (err) {
            console.error(err);
        }
        finally {
            console.log("Execution of divideNumbers is complete.");
        }
    }
    divideNumbers(20, 0); // Valid division

