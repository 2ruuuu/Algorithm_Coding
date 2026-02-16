const solution = (clothes) => {
    const object = {};
    
    for(const [dress, type] of clothes){
        if(!object[type]){
            object[type] = 1;
        } else {
            object[type]++;
        }
    }
    
    const number = Object.keys(object).reduce((acc, cur) => {
        return acc * (object[cur] + 1);
    }, 1)
    
    return number - 1;
}