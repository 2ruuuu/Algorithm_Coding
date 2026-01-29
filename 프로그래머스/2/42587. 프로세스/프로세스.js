const solution = (priorities, location) => {
    let count = 1;
    for(let i = 0; i < 1; i++){
        //[3, 2, 2, 1] 0
        if(priorities[i] === Math.max(...priorities)){ //i = 0일 때 priorities[0] 이 최댓값이랑 같으면
            if(location === 0){
                return count;
                
            } //[3, 2, 2, 1] 1
            else { //i = 0 일 때 priorities[0]이 최댓값이랑 같지만 location이 0이 아닐때
                priorities.shift(); //앞에서 빼고 [2, 2, 1] 1
                location -= 1; // 위치 하나 땡기고 [2, 2, 1] 0
                i = -1; //i 초기화하고 
                count++; // return 값 올리고 
            }
            //여기까진 확실

        } else { 
            if(location === 0){ //i = 0일 때 priorities[0]이 최댓값 보다 작고 location이 0이면
                //[1, 2, 3, 4] 0
                priorities.push(priorities[i]); //맨앞에 있는 i 넣고 [1, 2, 3, 4, 1] 0
                priorities.shift(); // 맨앞 i 빼고 [2, 3, 4, 1] 0
                location = priorities.length - 1; //location을 최대 인덱스로 [2, 3, 4, 1] 3
                i = -1; // 인덱스 초기화
            } else { //i = 0일 때 priorities[0]이 최댓값 보다 작고 location이 0이 아니면
                //[1, 2, 3, 4] 1
                priorities.push(priorities[i]); //맨뒤에 i 넣고 [1, 2, 3, 4, 1] 1
                priorities.shift();  //맨앞 i 빼고 [2, 3, 4, 1] 1
                location -= 1; //위치 바꾸고 [2, 3, 4, 1] 0
                i = -1; //인덱스 초기화
            }

        }
    }
}