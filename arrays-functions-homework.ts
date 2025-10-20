//Task 1

let fruits: string[] = ['Apple', 'Orange', 'Banana'];
fruits.push('Grapes');
console.log(fruits);

//Task 2
let numbers: number[] = [10, 20, 30, 40, 50];
numbers.shift()
console.log(numbers);

//Task 3
let numbers2: number[] = [1, 2, 3, 4, 5];
let dividedNumbers2 = numbers2.map((num) => num / 2);
console.log(dividedNumbers2);

//Task 4
let numbers3: number[] = [3, 7, 1, 9, 12, 4];
let filteredNumbers3 = numbers3.filter((num) => num > 5);
console.log(filteredNumbers3);

//Task 5
let numbers4: number[] = [9, 3, 7, 2, 8, 5];
let sortedNumbers4 = numbers4.sort((a, b) => a - b);
console.log(sortedNumbers4);

//Task 6
let fruits2: string[] = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
let slicedFruits2 = fruits2.slice(0, 3);
console.log(slicedFruits2);

//Task 7    
let vehicles: string[] = ['car', 'bike', 'bus', 'train', 'boat'];
let splicedVehicles = vehicles.splice(1, 2);
console.log(vehicles);

//Task8
function findLargest(a: number, b: number, c: number): number {
    let largest: number;

    if (a >= b && a >= c) {
        largest = a;
    } else if (b >= a && b >= c) {
        largest = b;
    } else {
        largest = c;
    }

    return largest;
}

console.log(findLargest(10, 25, 15));

//Task 9
function convertToCentimeters(inches: number = 10): number {
  let centimeters = inches * 2.54;
  return centimeters;
}

// call with default parameter
console.log("Default:", convertToCentimeters());

// call with passed parameter
console.log("Passed:", convertToCentimeters(5));

//Task 10
function calculateArea(width: number, height?: number): number {
    if (height){
        let area = width * height;
        return area;
    }
 else {
        let area = width * width;
        return area;
    }
}
console.log("Square area:", calculateArea(5));
console.log("Rectangle area:", calculateArea(5, 10));

//Task 10 - 2 option
function calculateArea1(width: number, height?: number): number {
  return height ? width * height : width * width;
}
console.log("Square area:", calculateArea1(5));
console.log("Rectangle area:", calculateArea1(5, 10));