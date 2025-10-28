//type alias declaration
type EmployeeName = string;
type EmployeeId = number;
type EmployeePosition = string;
type EmployeeData= string | number| null;

let data: EmployeeData='Test';


// type alias with string literals;
type PaymentMethod = 'Cash' | 'Card' | 'Crypto';
function paymentDetails(amount: number, method: PaymentMethod){
    console.log(`Payment of ${amount}$ by ${method}`);
}
paymentDetails(150, 'Card');

type ID = string | number;
type STATUS = 'Open' | 'In Progress' | 'Closed';
//type alias in interface
interface Ticket{
    id: ID;
    title: string;
    status: STATUS;
}

const ticket={
    id:101,
    title:'Send email',
    status:'Done',
};
