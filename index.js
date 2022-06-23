//{ 1.} // Create new file by code in nodejs fs

// const fs = require("fs");
// // console.log("code step by step");
// fs.writeFileSync("app.txt", "NiKU");

// {2.} // for checking directory
// console.log("<<...>>", __dirname);
// console.log("<<...>>", __filename);

// {3.} HTTP core modules

const http = require("http");

http
  .createServer((req, res) => {
    res.write("<h1>This is my world</h1>");
  })
  .listen(8080);
