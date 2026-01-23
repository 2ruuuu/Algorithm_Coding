function solution(nums) {
    let answer = 0;
    const len = nums.length;

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            for (let k = j + 1; k < len; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                
                if (s(sum)) {
                    answer++;
                }
            }
        }
    }

    return answer;
}

function s(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}