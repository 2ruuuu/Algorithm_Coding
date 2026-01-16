const solution = (n, arr1, arr2) => {    
    let newArr1 = arr1.map((e) => e.toString(2).padStart(n, 0));
    let newArr2 = arr2.map((e) => e.toString(2).padStart(n, 0));
    let newArr3 = [];
    
    for(let i = 0; i < n; i++){
        let str = "";
        for(let j = 0; j < n; j++){
            str += Number(newArr1[i][j])+Number(newArr2[i][j]);
        }
        newArr3.push(str);
    }
        
    return newArr3.map((e) => {
        let str = "";
        let elem = String(e).split("");
        for(let i = 0; i < n; i++){
            if(elem[i] >= 1){
                str += "#";
            } else {
                str += " ";
            }
        }
        return str;
    })
}
