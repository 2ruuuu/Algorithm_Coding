const solution = (participant, completion) => {
    let hi = new Map();
    
    for(let elem of completion) {
        hi.set(elem, (hi.get(elem)||0) + 1);
    }

    for(let elem of participant) {
        if(!hi.get(elem)){
            return elem;
        } else {
            hi.set(elem, hi.get(elem) - 1);
        }
    }
}