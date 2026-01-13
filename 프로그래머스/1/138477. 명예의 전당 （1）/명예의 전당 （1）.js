const solution = (k, score) => {
    let arr = [];
    let result = [];
    for(let i = 0; i < score.length; i++){
        if(arr.length < k){
            arr.push(score[i]);
            arr.sort((a, b) => a - b);
            result.push(arr[0]);
        } else{
            arr.push(score[i]);
            arr.sort((a, b) => a - b);
            arr.shift();
            result.push(arr[0]);
        }
    }
    
    return result;
}