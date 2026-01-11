const solution = (food) => {
    let first = [];
    let last = [];
    let ans = [];
    
    for(let i = 1; i < food.length; i++){
        for(let j = 0; j < Math.floor(food[i]/2); j++){
            first.push(i);
        }
    }
    last = [...first].reverse();
    first.push(0);
    ans = first.concat(last).join("");
    return ans;
}