var user = { 
    name : "",
    Assign: function Assign(a){
        if (a == "m" || a == "M"){
            return this.name+" is a goodboy";
        }
        return this.name+" is a goodgirl";
    }
}
var user1 = {
    name : "anish"
}
var user1 = user.Assign.bind(user1,"M");
console.log(user1());
var user2 = {
    name : "ashika"
}
var user2 = user.Assign.bind(user2,"F");
console.log(user2());