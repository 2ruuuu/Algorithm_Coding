const solution = (k, score) => {
    let arr = [];
    
    return score.reduce((acc, cur) => {
        if(arr.length < k){
            arr.push(cur);
            arr.sort((a, b) => a - b);
        } else {
            arr.push(cur);
            arr.sort((a, b) => a - b);
            arr.shift();
        }
        
        acc.push(arr[0]);
        return acc;
    },[])
}