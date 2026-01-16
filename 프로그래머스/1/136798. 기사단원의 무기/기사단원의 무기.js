const solution = (number, limit, power) => {
    let arr = [];
    for(let i = 0; i < number; i++){
        arr.push(i+1);
    }
    
    let newArr = arr.map((e) => {
        let count = 0;
        for (let i = 1; i * i <= e; i++) {
            if (e % i === 0) {
                if (i * i === e) {
                    count++; 
                } else {
                    count += 2; 
                }
            }
        }
        if(count > limit){
            count = power;
        }
        
        return count;
    })
    
    return newArr.reduce((acc, cur) => {
        return acc + cur;
    }, 0)
}