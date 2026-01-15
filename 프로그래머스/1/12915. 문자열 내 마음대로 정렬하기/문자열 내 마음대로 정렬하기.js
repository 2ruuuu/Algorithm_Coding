const solution = (strings, n) => {
    let result = [];
    for(let i = 0; i < strings.length; i++){
        let str = strings[i][n] + strings[i];
        result.push(str);
    }
    result.sort();
    return result.map((e) => {
        return e.slice(1);
    });
}