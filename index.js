/* <>
  ------  Node JS in Hindi #39 Mongoose with node  -------------------
</>; */

const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect("mongodb://localhost:27017/ecommerce");

  const productSchema = new mongoose.Schema({
    name: String,
  });

  const ProductsModel = mongoose.model("products", productSchema);
  let data = new ProductsModel({
    name: "Colgate Maxfresh Blue Gel Peppermint Ice Toothpaste",
  });
  let res = await data.save();

  console.log(res);
};
main();
