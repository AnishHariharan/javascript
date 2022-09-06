let a = [1, 2 ,3 , 4];
let [c, d] = a;
console.log(`${c+","+d}`);
[d, c] = [c, d];
console.log(c);
let [b,,e] = a
console.log(`${b+","+e}`);