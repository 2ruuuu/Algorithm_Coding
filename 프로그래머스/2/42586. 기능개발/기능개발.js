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

//1. progresses의 인자마다 (speeds의 인자 * a)를 했을 때 a를 몇으로 해야 100 이하가 되는지 구한다.
//2. count값을 result 배열에 넣는다.
//3. for문으로 return 값을 구한다.
//*이중 for문 돌려도 괜찮다