const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const timeArr = input[1].split(' ').map(Number);

timeArr.sort((a, b) => a - b);
//5
//3, 1, 4, 3, 2
//sort. 1, 2, 3, 3, 4

let currentTime = 0;
let totalTime = 0;

for(let i = 0; i < n; i++){
  currentTime += timeArr[i]
  //0 + 1 = 1
  //1 + 2 = 3
  totalTime += currentTime;
  //0 + 1 = 1
  //1 + 3 = 4
}

console.log(totalTime);