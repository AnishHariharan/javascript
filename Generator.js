function * select(){
    yield "name";
    yield "age"
}
let a = select();
console.log(a.next());
console.log(a.next());
console.log(a.next());
let b = [1, 2 ,3 ,4];
let c = b[Symbol.iterator]();
console.log(c.next());
console.log(c.next());
console.log(c.next());
console.log(c.next());
console.log(c.next());
function * gen(end){
    for(let i = 0; i < end; i++){
        yield i ;
    }
}
let it = gen(2);
console.log(it.next());
console.log(it.next());
console.log(it.next());
function * hen(){
    yield 1;
    yield 2;
}
let kit = hen();
console.log(kit.next());
console.log(kit.next());
console.log(kit.next());
