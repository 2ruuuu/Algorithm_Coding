const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let n = Number(input[0]);
let m = Number(input[1]);

for(let i = 0; i < m; i++){
    let str = "";
    for(let j = 0; j < n; j++){
        str += "*";
    }
    console.log(str);
}