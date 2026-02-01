const solution = (n, lost, reserve) => {
    let realLost = lost.filter(l => !reserve.includes(l)).sort((a, b) => a - b);
    let realReserve = reserve.filter(r => !lost.includes(r)).sort((a, b) => a - b);

    let answer = n - realLost.length;

    for (let l of realLost) {
        let front = realReserve.indexOf(l - 1);
        if (front !== -1) {
            answer++;
            realReserve.splice(front, 1);
            continue;
        }
        
        let back = realReserve.indexOf(l + 1);
        if (back !== -1) {
            answer++;
            realReserve.splice(back, 1);
        }
    }
    
    return answer;
}