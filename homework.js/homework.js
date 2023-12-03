const productsFeatures = {
    name: 'Product X',
    description: 'A high-quality product with many features.',
    price: 100
};

const productProperties = {
    color: 'red',
    size: 'medium',
    weight: 5
};
const allproperties = {
    ...productProperties , ...productsFeatures
}
console .log(allproperties);