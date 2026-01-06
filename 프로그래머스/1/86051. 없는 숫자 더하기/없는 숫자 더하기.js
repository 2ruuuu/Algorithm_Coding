const solution = (numbers) => {
    let all = 45;
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return all-sum;
}