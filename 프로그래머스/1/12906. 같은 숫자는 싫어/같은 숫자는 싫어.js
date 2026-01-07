const solution = (arr) => {
    let ans = [arr[0]];
    for(let i = 0; i < arr.length-1; i++){
        if(arr[i] !== arr[i+1]){
            ans.push(arr[i+1]);
        }
    }
    
    return ans;
}