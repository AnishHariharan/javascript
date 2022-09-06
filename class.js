class Person{
    constructor(name, age){
        this.name = name,
        this.age = age
    }
    greet (){
        console.log("my name is "+this.name+" i am "+this.age+" years old");
    }
}
let a = ["anish", "shelif", "samual", "mukesh"];
let v = [20, 23, 25, 45];
for(let i = 0; i < a.length;i++){
    a[i] = new Person(a[i], v[i]);
    a[i].greet(); 
}