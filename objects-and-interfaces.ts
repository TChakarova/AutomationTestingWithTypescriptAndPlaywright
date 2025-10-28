//exercise sum total price  
interface Product {
    name: string;
    price: number;
    getTotalPrice: (quantity: number) => number;
}

const phone: Product = {
    name: "iPhone 13",
    price: 1000,
    getTotalPrice: function (quantity: number) {
        return this.price * quantity;
    }
};

function orderDetails(product: Product, quantity: number){
console.log(`Order for: ${product.name}`);
console.log(`Product quantity: ${quantity}`);
console.log(`Total Price: ${product.getTotalPrice(quantity)}`)  ;

}

orderDetails(phone, 3);

