const solution = (n, m, section) => {
    let count = 0;
    let whatSection = 0;
    for(let i = 0; i < section.length; i++){
        if(whatSection < section[i]){
            whatSection = section[i] + m - 1;
            count++;
        } else {
            continue;
        }
    }
    
    return count;
}