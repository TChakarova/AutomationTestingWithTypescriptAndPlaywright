// Function  with parameter of union type
function printId(id: number | string)
{
    console.log(`Id - ${id} is type of ${typeof id}`);
}

printId(101);
printId("202A");