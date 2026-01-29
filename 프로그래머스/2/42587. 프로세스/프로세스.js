const solution = (priorities, location) => {
    let count = 1;
    while(priorities.length > 0){
        let first = priorities[0];
        let max = Math.max(...priorities);
        
        if(first === max){
            if(location === 0){
                return count;
            }
            else {
                priorities.shift();
                location -= 1;
                count++;
            }
        } else { 
            priorities.push(first);
            priorities.shift();

            if(!location){
                location = priorities.length - 1;
            } else {
                location -= 1;
            }
        }
    }
}