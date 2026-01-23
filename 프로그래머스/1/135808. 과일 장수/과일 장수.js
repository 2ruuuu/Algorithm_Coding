const solution = (k, m, score) => {
    score.sort((a, b) => b - a);
    let sum = 0;
    for(let i = 0; i < score.length-(m-1); i+=m){
        sum += score[i+m-1] * m
    }
    return sum;
}