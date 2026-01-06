const solution = (n) => {
    let sum = 0;
    while(n > 0){
        sum += n % 10;
        n = Math.floor(n/10);
    }
    
    return sum;
}

const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim())

console.log(solution(n));