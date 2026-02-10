const solution = (participant, completion) => {
    const obj = {};
    for(let name of participant){
        if(obj[name]){
            obj[name]++;
        } else {
            obj[name] = 1;
        }
    }
    for(let name of completion) {
        if(obj[name]){
            obj[name]--;
        }
    }
    
    for(let name in obj){
        if(obj[name]){
            return name;
        }
    }
}