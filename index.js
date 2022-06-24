// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   console.log("Data sent by browser", req.query);
//   res.send("Welcome " + req.query.name);
// });

// app.listen(5000);

/* <>--------     Node JS in Hindi # 21 Make HTML page           -----------</> */

const express = require("express");
const path = require("path");
const app = express();

const publicPath = path.join(__dirname, "public");

app.use(express.static(publicPath));
app.listen(5000);
