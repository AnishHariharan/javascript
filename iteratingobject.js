let obj = {
    "name":"anish",
    "age" :20,
    "status":"commited"
}
for(let key in obj) {console.log(obj[key])}; 
let list = [1, 2 ,34];
for(let i in list) {console.log(list[i])};
let a = list[Symbol.iterator]();
console.log(a.next());
let add = (a, b) =>  a + b;
console.log(add(10, 20));
