const solution = (progresses, speeds) => {
    let a = progresses.map((e, i) => {
        let count = 0;
        while(e < 100){
            e = e + speeds[i];
            count++;
        }
        return count;
    })
    let result = [];
    let b = 0;
    let count = 1;

    for(let i = 0; i < a.length; i++){
        if(a[b] >= a[i+1]){
            count++;
        } else {
            result.push(count);
            count = 1;
            b = i+1;
        }
    }
    
    if(count !== 1){
        result.push(count);
    }
    
    return result;
}