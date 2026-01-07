const solution = (arr) => {

    let min = Math.min(...arr);
    let newArr = []
    if(arr.length === 1){
        newArr.push(-1);
        return newArr;
    }
    for(let elem of arr){
        if(elem !== min){
            newArr.push(elem);
        }
    }
    return newArr;
}