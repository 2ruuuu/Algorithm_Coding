const solution = (name, yearning, photo) => {
    let result = [];
    
    for(let i = 0; i < photo.length; i++){
        let sum = 0;
        for(let j = 0; j < photo[i].length; j++){
            let idx = name.indexOf(photo[i][j]);
            if(idx >= 0){
                sum += yearning[idx];
            } else {
                continue;
            }
        }
        result.push(sum);
    }
    
    return result;
}