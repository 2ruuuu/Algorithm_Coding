const solution = (n) => {
    let arr = [];
    while(n >= 3){
        arr.push(n%3);
        n = Math.floor(n/3);
    }
    arr.push(n);
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i] * (3** (arr.length - i - 1));
    }
    
    return sum;
}  