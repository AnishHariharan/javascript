let a = [1, 2 ,3 ,4 , 7];
let it = a[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
let obj = it.next();
console.log(obj.value, obj.done);
