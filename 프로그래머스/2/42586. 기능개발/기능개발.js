const solution = (progresses, speeds) => {
    const result = [];
    
    for(let i = 0; i < progresses.length; i++){
        let count = 0;
        while(progresses[i] < 100){
            progresses[i] += speeds[i];
            count++
        }
        result.push(count);
    }
    let count = 0;
    let cur = result[0];
    const ans = [];

    for(let elem of result){
        if(elem <= cur){
            count++;
        } else {
            ans.push(count);
            count = 1;
            cur = elem;
        }
    }
    ans.push(count);
    return ans;
}