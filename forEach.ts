//forEach method
const numbers: number[] = [1, 2, 3, 4, 5];
numbers.forEach((n:number, index:number) => {
    console.log(`Index: ${index}: value: ${n}`);
});

//sum numbers
let sum: number = 0;
numbers.forEach((n:number) => {
    sum += n;
});
console.log(`Sum: ${sum}`);

//active users
interface User {
    id: number;
    name: string;
    isActive: boolean;
}

const users : User[] = [
    { id: 1, name: "Ani", isActive: true },
    { id: 2, name: "Bobo", isActive: false },
    { id: 3, name: "Misho", isActive: true },
    { id: 4, name: "Diana", isActive: false },
];

let activeIds: number[] = [];
users.forEach((user: User) => {
    if (user.isActive) {
        activeIds.push(user.id);
    }
});
console.log("Active User Ids:",activeIds);