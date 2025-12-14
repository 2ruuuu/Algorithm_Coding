function solution(clothes) {
    let obj = {};

    for (let i = 0; i < clothes.length; i++) {
        let type = clothes[i][1];
        
        if(obj[type] === undefined) {
            obj[type] = 1;
        } else {
            obj[type]++;
        }
    }

    let total = 1;
    let counts = Object.values(obj)
    
    for(let j = 0; j < counts.length; j++){
        let count = counts[j];
        total *= (count + 1);
    }

    return total - 1;
}