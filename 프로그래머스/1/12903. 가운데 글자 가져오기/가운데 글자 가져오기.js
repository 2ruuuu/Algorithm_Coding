const solution = (s) => {
    let arr = [...s];
    let ans = "";
    
    if(arr.length % 2 === 0){
        ans += arr[arr.length/2-1];
        ans += arr[arr.length/2];

    } else {
        ans = arr[Math.floor(arr.length/2)];
    }
    
    return ans;
}