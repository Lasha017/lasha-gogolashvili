const products = [
    { name: "Laptop", price: 1299 },
    { name: "Phone", price: 499 },
    { name: "Tablet", price: 299 },
    { name: "Watch", price: 199 },
    { name: "Headphones", price: 99 },
];

const expensiveProducts = products.filter(product => product.price > 240);

console.log(expensiveProducts);