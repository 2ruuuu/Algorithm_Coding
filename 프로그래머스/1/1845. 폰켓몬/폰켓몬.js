function solution(nums) {
    let pickLimit = nums.length / 2;
    let hash = {};
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        let currentType = nums[i];

        if (hash[currentType] === undefined) {
            if (result < pickLimit) {
                result += 1;
            }
            hash[currentType] = true;
        }
    }
    
    return result;
}