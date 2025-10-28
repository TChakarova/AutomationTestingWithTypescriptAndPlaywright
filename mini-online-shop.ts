type Category = "food" | "clothes" | "electronics";

interface Product {
    name: string;
    price: number;
    category: Category;
}

interface Customer {
    name: string;
    email: string;
    cart: Product[];
}

const fruit: Product = {
    name: "Apple",
    price: 2,
    category: "food"
};
const shirts: Product = {
    name: "T-Shirt",
    price: 20,
    category: "clothes"
};
//add more products as electronics
const laptop: Product = {
    name: "Laptop",
    price: 800,
    category: "electronics"
};
const headphones: Product = {
    name: "Headphones",
    price: 150,
    category: "electronics"
};
const customer1: Customer = {
    name: "John Doe",
    email: "some",
    cart: [fruit, shirts]
};
//add more customers
const customer2: Customer = {
    name: "Jane Smith",
    email: "another",
    cart: [laptop, headphones, shirts]
};

//add function displayCart - cart customer name and products in cart
function displayCart(customer: Customer) {
    console.log(`Customer Name: ${customer.name}`);
    console.log("Products in Cart:");
    customer.cart.forEach((product) => {
        console.log(`- ${product.name} (${product.category}): $${product.price}`);
    });
    console.log();
}
//add function filterByCategory - receive products and category as parameters and filter by category
function filterByCategory(products: Product[], category: Category): Product[] {
    return products.filter(product => product.category === category);
};

//add function calculateTotal - receive customer data and calculate total price of products in cart
function addPrices(total: number, product: Product): number {
    return total + product.price;
}

function calculateTotal(customer: Customer): number {
    return customer.cart.reduce(addPrices, 0);
}
//Execute

const allProducts: Product[] = [fruit, shirts, laptop, headphones];

// call displayCart for each customer

const customers = [customer1, customer2];
customers.forEach(displayCart);

//display products by categories
const uniqueCategories = Array.from(new Set(allProducts.map(p => p.category)));
uniqueCategories.forEach((category) => {
    const productsInCategory = filterByCategory(allProducts, category);

    console.log(`${category.toUpperCase()} PRODUCTS:`);
    if (productsInCategory.length === 0) {
        console.log("  (No products in this category)");
    } else {
        productsInCategory.forEach((product) => {
            console.log(`- ${product.name}: $${product.price}`);
        });
    }
    console.log();
});
//calculate total price of products

customers.forEach((customer) => {
    const total = calculateTotal(customer);
    console.log(`${customer.name}'s total: $${total}`);
});