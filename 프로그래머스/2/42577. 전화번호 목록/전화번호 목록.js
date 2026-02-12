const solution = (phone_book) => {
    const hash = {} //문자열만 들어오기 때문에 다양한 키 타입이 필요없음, 순서가 필요없음 따라서 object사용
    for(let elem of phone_book){
        hash[elem] = 0;
    }
    
    for(let elem of phone_book){
        let numberString = "";
        for(let i = 0; i < elem.length - 1; i++){
            numberString += elem[i]; //"12"
            if(hash[numberString] === 0){
                return false;
            } 
        }
    }
    
    return true;
}