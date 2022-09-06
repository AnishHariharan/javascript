var obj = { 
    name : "anish",
    age : 20,
}
var b = [ ];
delete obj.name;
console.log(obj.name);
obj.name = "anish";
console.log(obj.name);
console.log("name" in obj);
for(var field in obj){
    b.push(obj[field]);
}
console.log(b);