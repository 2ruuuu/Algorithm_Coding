const solution = (n, arr1, arr2) => {
    const newArr1 = arr1.map((e) => e.toString(2).padStart(n, 0));
    const newArr2 = arr2.map((e) => e.toString(2).padStart(n, 0));
    const newArr3 = [];
    
    for(let i = 0; i < n; i++){
        let str = "";
        for(let j = 0; j < n; j++){
            if(Number(newArr1[i][j]) + Number(newArr2[i][j]) >= 1){
                str += "#";
            } else {
                str += " ";
            }
        }
        newArr3.push(str);
    }
    
    return newArr3;
}