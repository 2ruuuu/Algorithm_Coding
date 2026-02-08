const solution = (number, k) => {
    const stack = [];
    let countK = 0;
    
    for(let i = 0; i < number.length; i++){
        if(!stack.length){
            stack.push(number[i]);
        } else {
            while(countK < k && stack.length > 0 && stack[stack.length - 1] < number[i]){
                if(countK !== k){
                    stack.pop();
                    countK++; 
                }
            }
            stack.push(number[i]);
        }
    }

    return stack.slice(0, number.length - k).join("");
}

//1. stack이 비어있으면 일단 하나 넣고 시작
//2. 넣고 다음 들어오는 숫자랑 비교하여 stack 마지막에 들어있는 숫자보다 <= push
//3. 반복하다가 countK가 k랑 같아지면 나머지 그냥 푸시
//그럼 세가지의 경우 push를 해야함