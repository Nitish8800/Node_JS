// Create new file by code in nodejs fs

const fs = require("fs");
// console.log("code step by step");

fs.writeFileSync("app.txt", "NiKU");

// for checking directory

console.log("<<...>>", __dirname);
console.log("<<...>>", __filename);
