function sum(...i){
    let r = 0;
    for (let j = 0; j < i.length; j++){ 
        r += i[j];
    }
    return r;
};
console.log(sum(1, 2 ,3 ,4, 8));