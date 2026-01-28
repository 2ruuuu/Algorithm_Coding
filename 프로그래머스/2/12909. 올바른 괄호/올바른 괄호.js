const solution = (s) => {
    const arr = [];
    for(let elem of s){
        if(elem === ")" && arr.length === 0){
            return false;
        } else if(elem === "("){
            arr.push(elem);
        } else {
            arr.pop();
        }
    }
    
    if(arr.length === 0){
        return true;
    } else {
        return false;
    }
}