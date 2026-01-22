const solution = (answers) => {
    const firstPerson = [1, 2, 3, 4, 5];
    const secondPerson = [2, 1, 2, 3, 2, 4, 2, 5];
    const thirdPerson = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let firstCount = 0;
    let secondCount = 0;
    let thirdCount = 0;
    
    let a = 0;
    let b = 0;
    let c = 0;
    
    for(let i = 0; i < answers.length; i++){
        if(i % 5 === 0 && i !== 0){
            a = 0;
            if(answers[i] === firstPerson[a]){
                firstCount++;
                a++;
                continue;
            }
        }
        if(answers[i] === firstPerson[a]) {
            firstCount++;
            a++;
        } else {
            a++;
        }
    }
    
    for(let i = 0; i < answers.length; i++){
        if(i % 8 === 0 && i !== 0){
            b = 0;
            if(answers[i] === secondPerson[b]){
                secondCount++;
                b++;
                continue;
            }
        }
        if(answers[i] === secondPerson[b]) {
            secondCount++;
            b++;
        } else {
            b++;
        }
    }
    
    for(let i = 0; i < answers.length; i++){
        if(i % 10 === 0 && i !== 0){
            c = 0;
            if(answers[i] === thirdPerson[c]){
                thirdCount++;
                c++;
                continue;
            }
        }
        if(answers[i] === thirdPerson[c]) {
            thirdCount++;
            c++;
        } else {
            c++;
        }
    }
    let result = [firstCount, secondCount, thirdCount]
    let max = Math.max(...result);
    let answer = [];
    if(firstCount === max){
        answer.push(1);
    }
    if(secondCount === max){
        answer.push(2);
    }
    if(thirdCount === max) {
        answer.push(3);
    }
    
    return answer;
    
}