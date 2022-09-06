class Welcome{
    constructor(name){
        this.name = name
    }
    greet(){
        console.log(`welocome ${this.name}`);
    }
}
let p1 = Reflect.construct(Welcome,["anish"]);
Reflect.apply(p1.greet, p1, []); 
let p2 = (a, b) => new Promise((resolve, reject) => {
    resolve(a + b);
});
p2(2, 3).then(value => value * 2).then(console.log);

let p3 = (a, b) => new Promise((resolve, reject) => {
    resolve(a * b) < 2 ? reject("rejected") : value;
});
p3(2, 3).then(value => value * 2).catch(console.log);
let list = [1, 2 ,3 ,4];
for(i of list){
    console.log(i);
}
list.forEach((element) => {
    console.log(element);
})