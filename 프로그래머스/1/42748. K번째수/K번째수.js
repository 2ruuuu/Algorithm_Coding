const solution = (array, commands) => {
    let ans = [];
    for(let i = 0; i < commands.length; i++){
        let [first, second, third] = commands[i];
        let newArr = array.slice(first-1, second);
        newArr.sort((a, b) => a - b);
        ans.push(newArr[third-1]);
    }
    return ans;
}