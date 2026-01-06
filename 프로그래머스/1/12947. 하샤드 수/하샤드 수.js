const solution = (n) => {
    let sum = 0;
    let a = n;
    while(n > 0){
        sum += n%10;
        n = Math.floor(n/10);
    }
    
    if(a % sum === 0){
        return true;
    } else {
        return false;
    }
}

const fs = require("fs");
let x = Number(fs.readFileSync(0).toString().trim());

console.log(x);
