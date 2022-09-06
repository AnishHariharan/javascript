var user = {
    name : "anish",
    age : 20,
    greet : function (){
        console.log("the user name is "+ this.name+ " and age is "+ this.age);
    }
}
user.greet();
var user2 = {
    name : "xyz",
    age : 20
} 
var user2 = user.greet.bind(user2);
user2();
var user3 = {
    name : "zzzz",
    age : 22
}
var user3 = user.greet.bind(user3);
user3();
var obj = {
    rank : 0,
    class : function(){
        console.log(this.rank);
    }
}
var stud1 = {
    rank : 1,
}
var stud1 = obj.class.bind(stud1);
stud1();
var stud2 = {
    rank : 2,
}
var stud2 = obj.class.bind(stud2);
stud2();