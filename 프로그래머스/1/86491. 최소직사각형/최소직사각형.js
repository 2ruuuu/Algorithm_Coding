const solution = (sizes) => {
    for(let i = 0; i < sizes.length; i++){
        sizes[i].sort((a, b) => a - b);
    }
    
    let first_max = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < sizes.length; i++){
        if(first_max < sizes[i][0]){
            first_max = sizes[i][0];
        }
    }
    
    let second_max = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < sizes.length; i++){
        if(second_max < sizes[i][1]){
            second_max = sizes[i][1];
        }
    }
    
    return first_max * second_max;
}
