const solution = (nums) => {
    let lgth = nums.length;
    let hi = new Set();
    for(let i = 0; i < lgth; i++){
        hi.add(nums[i]);
    }
    
    return hi.size <= (lgth/2) ? hi.size : lgth/2;
}