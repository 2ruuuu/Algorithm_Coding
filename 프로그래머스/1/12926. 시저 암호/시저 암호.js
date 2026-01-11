const solution = (s, n) => {
    let arr = [];
    for(let i = 0; i < s.length; i++){
        if(s[i] !== " "){
            let num = s[i].charCodeAt(0);
            let str = "";
            if(num >= 97 && num <= 122){
                if(num + n > 122){
                    str = String.fromCharCode(96 + (num + n) - 122);
                    arr.push(str);
                } else {
                    str = String.fromCharCode(num + n);
                    arr.push(str);
                }
            } else if(num >= 65 && num <= 90){
                if(num + n > 90){
                    str = String.fromCharCode(64 + (num + n) - 90);
                    arr.push(str);
                } else {
                    str = String.fromCharCode(num + n);
                    arr.push(str);
                }
            }
        } else {
            arr.push(" ");
        }
    }    
    
    return arr.join("");
}