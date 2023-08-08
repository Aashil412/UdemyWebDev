const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/shopApp")
  .then(() => {
    console.log("Connection Opened!");
  })
  .catch((err) => {
    console.log("Error!", err);
  });

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    maxlength: 20,
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price must be positive"],
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  categories: [String],
  qty: {
    online: {
      type: Number,
      default: 0,
    },
    inStore: {
      type: Number,
      default: 0,
    },
  },
  size: {
    type: String,
    enum: ["S", "M", "L"],
  },
});
productSchema.methods.greet = function () {
  console.log("helloo");
  console.log(`- from ${this.name}`);
};

productSchema.methods.toggleOnSale = function () {
  this.onSale = !this.onSale;
  return this.save();
};
productSchema.methods.addCategory = function (newCategory) {
  this.categories.push(newCategory);
  return this.save();
};
productSchema.statics.fireSale = function () {
  return this.updateMany({}, { onSale: true, price: 0 });
};
const Product = mongoose.model("Product", productSchema);

const findProduct = async function () {
  const foundProduct = await Product.findOne({ name: "Mountain Bike" });
  console.log(foundProduct);
  await foundProduct.toggleOnSale();
  console.log(foundProduct);
  await foundProduct.addCategory("Outdoors");
  console.log(foundProduct);
};

Product.fireSale()
  .then((res) => {
    console.log(res);
    // Handle the result
  })
  .catch((error) => {
    console.error(error);
    // Handle any errors
  });

//findProduct();
// const bike = new Product({
//   name: "Cycling Jersey",
//   price: 28.5,
//   categories: ["Cycling"],
//   size: "XS",
// });
// bike
//   .save()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: 9 }, {new:true, runValidators: true})
// .then((data) => {
//     console.log(data);
// })
// .catch(err => {
//     console.log(err);
// })
