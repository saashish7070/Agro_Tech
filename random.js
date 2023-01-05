const fs = require('fs');

const products = [
    { name: 'Mango', price: 31351 },
    { name: 'Orange', price: 63946 },
    { name: 'Kiwi', price: 32517 },
    { name: 'Mango', price: 81353 },
    { name: 'Grape', price: 16454 },
    { name: 'Peach', price: 83380 },
    { name: 'Apple', price: 26199 },
    { name: 'Strawberry', price: 91216 },
    { name: 'Grape', price: 74252 },
    { name: 'Strawberry', price: 60929 }
];

fs.writeFile('products.json', JSON.stringify(products), (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Data written to file');
  }
});