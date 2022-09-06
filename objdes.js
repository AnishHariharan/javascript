let obj = {
    name : "max",
    age : 20,
}
let {name, age} = obj;
console.log(`${name+" "+age}`);
// we can change the name by adding this :
let {name : paeru, age : vayasu} = obj;
console.log(`${paeru+" "+vayasu}`); 