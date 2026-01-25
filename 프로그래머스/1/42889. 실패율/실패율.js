const solution = (N, stages) => {
    let s = 1;
    let count = 0;
    let hi = [];
    stages.sort((a, b) => a - b);

    for (let i = 0; s <= N; i++) { 
        if (s === stages[i]) {
            count++;
        } else {
            let rate = stages.length === 0 ? 0 : count / stages.length;
            hi.push([s, rate]);
            
            stages.splice(0, count);
            count = 0;
            i = -1;
            s++;
        }
    }
    hi.sort((a, b) => b[1] - a[1] || a[0] - b[0]);

    return hi.map(v => v[0]);
};