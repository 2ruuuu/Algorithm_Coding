const solution = (a, b, n) => {
    let total = 0; 
    let cur = n; 

    while (cur >= a) {
        const newCoke = Math.floor(cur / a) * b;
        total += newCoke;
        cur = (cur % a) + newCoke;
    }

    return total;
};