const solution = (s) => {
    const result = [];
    for(let i = 0; i < s.length; i++){
        let count = 0;
        let j = i
        for(j = i; j > 0; j--){
            if(s[i] !== s[j-1]){
                count++;
            } else {
                count++;
                break;
            }
        }
        if(count === i && j === 0){
            result.push(-1);
        } else {
            result.push(count);
        }
        
    }
    
    return result;
}