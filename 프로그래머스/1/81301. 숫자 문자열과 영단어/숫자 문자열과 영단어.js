const solution = (s) => {
    let number = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    for(let i = 0; i < number.length; i++){
        let arr = s.split(number[i]);
        s = arr.join(i);
    }
    
    return Number(s);
}