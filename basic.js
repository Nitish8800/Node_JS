//<<<<>>>>>>>>>>{ 1.} // Create new file by code in nodejs fs

// const fs = require("fs");
// // console.log("code step by step");
// fs.writeFileSync("app.txt", "NiKU");

////<<<<>>>>>>>>>>{ {2.} // for checking directory
// console.log("<<...>>", __dirname);
// console.log("<<...>>", __filename);

// //<<<<>>>>>>>>>>{ {3.} HTTP core modules {Create Server}

// const http = require("http");

// http
//   .createServer((req, res) => {
//     res.write("<h1>This is my world</h1>");
//     res.end();
//   })
//   .listen(8080);

//<<<<>>>>>>>>>>{ {5.} Colors use

// const colors = require("colors");

// console.log("Hello".red);
// console.warn("NIKU".blue);

//<<<<>>>>>>>>>>{ {6.} Simple and basic API

// const http = require("http");
// const data = require("./data");

// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "applicationjson" });
//     res.write(JSON.stringify(data));
//     res.end();
//   })
//   .listen(5000);

// /<<<<>>>>>>>>>>{ {7.} Getting input from command line

const fs = require("fs");

const input = process.argv;



fs.writeFileSync(input[2], input[3]);