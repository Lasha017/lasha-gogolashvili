const productss = [
    {
        name: "Product X",
        description: "A high-quality product with many features.",
        price: 100
    },
    {
        name: "Product Y",
        description: "Another great product with a competitive price.",
        price: 75
    },
    {
        name: "Product Z",
        description: "A basic product that gets the job done.",
        price: 50
    }
];

let totalPrice = 0;

for (const product of productss) {
    totalPrice += product.price;
}

console.log("Total Price:", totalPrice);