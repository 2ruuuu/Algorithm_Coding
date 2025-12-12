function solution(nums) {
    let pickLimit = Math.floor(nums.length/2);
    let empty = [];
    let result = 0;

    for(let i = 0; i < nums.length; i++){
        let currentType = nums[i];
        
        if(empty[currentType] === undefined){
            if(result < pickLimit){
                result += 1;
            }
            empty[currentType] = true;
        }
    }
    
    return result;
}   