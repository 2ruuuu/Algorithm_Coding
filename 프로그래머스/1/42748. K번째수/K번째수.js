const solution = (array, commands) => {
    return commands.map(([first, second, third]) => {
        let newArr = array.slice(first-1, second);
        newArr.sort((a, b) => a - b);
        return newArr[third-1];
    })
}