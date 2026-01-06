const solution = (arr, divisor) => {
    let ans = [];
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % divisor === 0){
            ans.push(arr[i]);
            count++;
        }
    }
    
    if(count === 0){
        ans.push(-1);
        return ans;
    } else {
        return ans.sort((a, b) => a - b);
    }
}