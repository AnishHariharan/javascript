//to convert the list to a string using join 
var joining = function(str){
    return str.join(" ");
} 
// to split the string and to convert into a list 
var list = function(a){
    return a.split(" ");
}
a = "anish hariharan how are you doing";
var str = [];
var b = list(a);
console.log(b);
for(var i = 5; i >= 0; i--){
    str.push(b[i]);
}
console.log(joining(str));