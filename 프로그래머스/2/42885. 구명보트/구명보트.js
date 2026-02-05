const solution = (people, limit) => {
    people.sort((a, b) => a-b);
    let i = people.length - 1;
    let boatCount = 0;
    
    while(people.length > 0){
        if(people[i] > limit - 40 || people.length === 1){
            people.pop();
            boatCount++;
            i--;
        } else{
            if(people[i] + people[0] <= limit){
                people.pop();
                people.shift();
                boatCount++;
                i = i - 2;
            } else {
                people.pop();
                boatCount++;
                i--;
            }
        }
    }
    return boatCount;
}

//     limit - 40

// const arr = [70, 50, 80, 50, 40, 40, 100, 90]; 
//     [70, 50, 80, 50, 40, 40, 100, 90] 100 return 



