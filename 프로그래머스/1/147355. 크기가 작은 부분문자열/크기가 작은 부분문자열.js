const solution = (t, p) => {
    t.split("");
    let count = 0;
    for(let i = 0; i < t.length - (p.length - 1); i++){
        let t_str = "";
        for(let j = i; j < p.length+i; j++){
            t_str += t[j];
        }
        if(t_str <= p){
            count++;
        }
    }
    return count;
}