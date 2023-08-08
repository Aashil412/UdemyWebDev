const Product = require('./models/product');

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/farmStand")
  .then(() => {
    console.log("Mongo Connection Opened!");
  })
  .catch((err) => {
    console.log("Mongo Error!", err);
  })

// const p = new Product({
//     name: 'Ruby Grapefruit',
//     price: 1.99,
//     category: 'fruit'
// })
// p.save().then(p => console.log(p)).catch(e => console.log(e));
const seedProducts = [
    {
        name: 'Fairy Eggplant',
        price: 1.00,
        category: 'vegetable'
    }, {
        name: 'Organic Melon',
        price: 4.99,
        category: 'fruit'
    }, {
        name: 'Chocolate Milk',
        price: 2.69,
        category: 'dairy'
    }
];  
Product.insertMany(seedProducts).then(res => console.log(res)).catch(e => console.log(e));