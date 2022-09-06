let [age] = "age";
var obj = {
    name : "anish",
    [age] : 20
}
let Person = function(name, age, interest){
    this.name = name;
    this.age = age;
    this.interest = interest;
}
fn = (name, age, interest) =>{
    return (name+"of age "+age+" is having interest in "+interest);
}
var max = new Person("max", 20, "cricket");
console.log(max);
console.log(fn(max.name, max.age, max.interest));