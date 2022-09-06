//let p1 = (a) => new Promise((resolve, reject) => {
//   resolve (a + 10);
//})
//p1(1).then (value => value + 10).then(x => 2 * x).then(console.log);
let p1 = (a, b) => new Promise((resolve, reject) => {

        resolve(a + b);

});
p1(2, 3).then(value => value + 10).then(value => value * 10).then(value => value < 100 ? ("rejected") : value - 10).then(console.log).catch(console.log("rejected"));


let p2 = (str) => new Promise((resolve, reject) => {
    resolve(str + " hari");
})
p2("anish").then(value => value + "haran").then(value => value +" is studying").then(console.log);