let a = Symbol.for(10);
let b = Symbol("age")
console.log(b);
let obj = {
    name : "anish",
    [b]: 10
}
console.log(obj[b]);