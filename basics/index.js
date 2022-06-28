// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   console.log("Data sent by browser", req.query);
//   res.send("Welcome " + req.query.name);
// });

// app.listen(5000);

/* <>--------     Node JS in Hindi # 21 Make HTML page           -----------</> */

// const express = require("express");
// const path = require("path");
// const app = express();

// const publicPath = path.join(__dirname, "public");

// // app.use(express.static(publicPath));

// app.listen(5000);

/* <>--------   Node JS in Hindi # 22 Remove extension from URL and 404 Page      -----------</> */

// const express = require("express");
// const path = require("path");
// const app = express();

// const publicPath = path.join(__dirname, "public");

// // app.use(express.static(publicPath));

// app.get("/", (req, res) => {
//   res.sendFile(`${publicPath}/index.html`);
// });
// app.get("/about", (req, res) => {
//   res.sendFile(`${publicPath}/about.html`);
// });
// app.get("*", (req, res) => {
//   res.sendFile(`${publicPath}/Error.html`);
// });

app.listen(5000);


{
    /* <>
    ------ Node JS in Hindi # 26 Route level Middleware express js
    -------------------
  </>; */
  }
  
  // const express = require("express");
  // const reqFilter = require("./middleware");
  // const app = express();
  // const route = express.Router();
  
  // // app.use(reqFilter);
  // route.use(reqFilter);
  
  // app.get("/", (req, resp) => {
  //   resp.send("Weclome to Home Page");
  // });
  
  // // app.get("/users", reqFilter, (req, resp) => {
  // //   resp.send("Weclome to Users Page");
  // // });
  // app.get("/users", (req, resp) => {
  //   resp.send("Weclome to Users Page");
  // });
  
  // route.get("/about", (req, resp) => {
  //   resp.send("Weclome to About Page");
  // });
  
  // route.get("/contact", (req, resp) => {
  //   resp.send("Weclome to Contact Page");
  // });
  
  // app.use("/", route);
  
  // app.listen(5000);
  
  {
    /* <>
    ------Node JS in Hindi # 30 Connect MongoDB with Node js -------------------
  </>; */
  }
  