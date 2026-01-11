const solution = (numbers) => {
    let result = [];
    for(let i = 0; i < numbers.length; i++){
        for(let j = i+1; j < numbers.length; j++){
            let sum = numbers[i] + numbers[j];
            if(result.includes(sum) === false){
                result.push(sum);
            }
        }
    }
    return result.sort((a, b) => a - b);
}