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

// // /<<<<>>>>>>>>>>{ {7.} Getting input from command line

// const fs = require("fs");

// const input = process.argv;

// if (input[2] == "add") {
//   fs.writeFileSync(input[3], input[4]);
// } else if (input[2] == "remove") {
//   fs.unlinkSync(input[3]);
// } else {
//   console.log("Invalid Output");
// }

// // // /<<<<>>>>>>>>>>{ {7.} Display file list from folder

// const fs = require("fs");
// const path = require("path");
// const dirPath = path.join(__dirname, "files");
// // console.log(dirPath)

// // for (var i = 1; i <= 5; i++) {
// //   fs.writeFileSync(dirPath + `/hello${i}.txt`, `A simple text file ${i}`);
// // }

// fs.readdir(dirPath, (err, files) => {
//   files.forEach((el) => {
//     console.log(el);
//   });
// });

// // // /<<<<>>>>>>>>>>{ {8.} Crud With file System

// const fs = require("fs");
// const path = require("path");
// const dirPath = path.join(__dirname, "crud");

// const filePath = `${dirPath}/apple.txt`;

// // {Create File}
// // fs.writeFileSync(filePath, "This a simple text file");

// // {REad file}
// // fs.readFile(filePath, "utf8", (err, item) => {
// //   console.log(item);
// // });

// // {Update file and appendfile}

// // fs.appendFile(filePath, " add file name is apple", (err) => {
// //   if (!err) console.log("file is update successfully");
// // });

// // {Rename file and appendfile}

// // fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
// //   if (!err) console.log("file is update successfully");
// // });

// // {Delete file}

// // fs.unlinkSync(`${dirPath}/fruit.txt`);

// // // /<<<<>>>>>>>>>>{ {9.} Node JS in Hindi # 15 Asynchronous Programming Language

// let a = 20;

// setTimeout(() => {
//     console.log(a+1);
// }, 2000);

// a = 10;

// // // /<<<<>>>>>>>>>>{ {9.} Node JS in Hindi # 16 Handle Asynchronous Data

// let a = 20;
// let b = 0;

// let waitingData = new Promise((res, rej) => {
//   setTimeout(() => {
//     res(40);
//   }, 2000);
// });

// waitingData.then((el) => {
//   b = el;
//   console.log(a + b);
// });
