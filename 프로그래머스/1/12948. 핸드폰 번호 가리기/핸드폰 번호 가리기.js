const solution = (phone_number) => {
    let arr = phone_number.split("");
    for(let i = phone_number.length - 5; i >= 0; i--){
        arr[i] = "*";
    }
    
    return arr.join("");
}