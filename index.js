// const express = require("express");
// const connectDB = require("./config");
// const Product = require("./product");
// const app = express();

// connectDB();
// app.use(express.json());

// app.post("/create", async (req, resp) => {
//   let data = new Product(req.body);
//   const result = await data.save();
//   resp.send(result);
// });

// app.get("/list", async (req, resp) => {
//   let data = await Product.find();
//   resp.send(data);
// });

// app.delete("/delete/:_id", async (req, resp) => {
//   console.log(req.params);
//   let data = await Product.deleteOne(req.params);
//   resp.send(data);
// });

// app.patch("/update/:_id", async (req, resp) => {
//   console.log(req.params);
//   let data = await Product.updateOne(req.params, { $set: req.body });
//   resp.send(data);
// });

// app.get("/search/:key", async (req, resp) => {
//   let data = await Product.find({
//     $or: [
//       { name: { $regex: req.params.key } },
//       { brand: { $regex: req.params.key } },
//     ],
//   });
//   resp.send(data);
// });

// const port = process.env.PORT || 5000;

// app.listen(port, () => {
//   console.log("Server is running on " + port);
// });

// //<<<<<<<<<<<<<<<<<<<<<<<<<  Node JS in Hindi #44 Upload File  >>>>>>>>>>>>>>>>>

// const express = require("express");
// const multer = require("multer");

// const app = express();

// const upload = multer({
//   storage: multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "uploads");
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + "-" + Date.now() + ".jpg");
//     },
//   }),
// }).single("user_file");

// app.post("/upload", upload, (req, resp) => {
//   resp.send("file upload");
// });

// const port = process.env.PORT || 5000;

// app.listen(port, () => {
//   console.log("Server is running on " + port);
// });

// //<<<<<<<<<<<<<<<<<<<<<<<<<  Node JS in Hindi #45 OS modulee  >>>>>>>>>>>>>>>>>

// const os = require("os");
// console.log(os);
// // console.log(os.arch());
// // console.log(os.freemem()/(1024*1024*1024));
// // console.log(os.totalmem()/(1024*1024*1024));
// // console.log(os.platform());
// console.log(os.userInfo());

