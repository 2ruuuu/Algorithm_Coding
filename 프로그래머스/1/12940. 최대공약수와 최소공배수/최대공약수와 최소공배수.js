const solution = (n, m) => {
    let ans = [];
    if(n < m){
        let [a, b] = [n, m];
        while(n !== 0){
            let r = m % n;
            m = n;
            n = r;
        }
        ans.push(m);
        ans.push(Math.floor((a*b)/m));
        return ans;
    } else {
        let [a, b] = [m , n];
        while(m !== 0){
            let r = n % m;
            n = m;
            m = r;
        }
        ans.push(n);
        ans.push(Math.floor((a*b)/n));
        return ans;
    }
}