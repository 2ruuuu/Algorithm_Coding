const solution = (d, budget) => {
    d.sort((a, b) => a - b).map(Number);
    let sum = 0;
    let count = 0;
    for(let i = 0; i < d.length; i++){
        if(sum < budget){
            sum += d[i];
            if(sum > budget){
                break;
            }
            count++;
        }
        
    }
    return count;
}