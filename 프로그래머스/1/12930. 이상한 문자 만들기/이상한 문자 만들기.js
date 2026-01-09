const solution = (s) => {
    let arr = s.split(" ");
    let ans = [];
    for(let i = 0; i < arr.length; i++){
        let word = arr[i].split("");
        let convert = "";
        for(let j = 0; j < word.length; j++){
            if(j % 2 === 0){
                convert += word[j].toUpperCase();
            } else {
                convert += word[j].toLowerCase();
            }
        }
        ans.push(convert);
    }
    
    return ans.join(" ");
}