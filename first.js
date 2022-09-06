console.log("hello");
var a = 5;
console.log(typeof a);
var d = {
    b:10,
    c:20
};
console.log(a+d.c);
// dynamic typing
var e = 10;
var e = 20;
console.log(e)
// hoisting
var f ;
f = 10;
console.log(f);
// functions
function intro(){
    console.log("i am leaning java script");
}
intro();
var intro2  = intro;
console.log(intro2);
// return
function game(){
    var str = "victory";
    return str;
}
console.log(game());
//multiplying function
function multiplication(number1, number2){
    return number1*number2;
}
console.log(multiplication(10, 20));
var m = multiplication;
console.log(m(10,10));
// if condition
var incident = true;
var another_incident = false;
if (incident){
    console.log("happened");
}else if(another_incident){
    console.log("happening");
}else{
    console.log("will not happen");
}
//switch
var luckynumber = 3;
switch (luckynumber){
    case 1:
        console.log("IS 1");
        break;
    case 2:
        console.log("IS 2");
        break;
    case 3:
        console.log("IS 3");
        break;
    default:
        console.log("default");
        break;
}
// for loop 
for(var i = 0; i < 5; i++){
    console.log(i);
}
// nested for loop
for(var i =0; i < 5; i++){
    for(var j = 0; j < 5; j++){
        console.log(i+","+j);
    }
}
// decrement loop
for(var i = 5; i >= 1; i--){
    console.log(i+" x "+ i+"  = "+i*5);
}
// array iterating
var list = [1, 2,3 , 4, 7];
for(var i = 0; i < list.length;i++){
    console.log(list[i]);
}
//while loop
var number = 10;
while(number <= 15){
    console.log(number);
    number ++;
}
// while loop 
var num = 10;
bool = true;
while(bool){
    if (num == 20){
        bool = false;
    }
    console.log(num);
    num = num*2;
}
//addition
a = 10;
b = NaN;
console.log(a+b);
// subraction
a = '10';
b = '5';
console.log(a-b);
// multiplication
a = a**2;
console.log(a);
a = '3';
b = '3';
console.log(a*b);
for(var i =0; i < 5; i++){
    if(i == 3){
        break;
    }console.log(i);
}
var a = 10;
var b = 0;
console.log(a/b);
var a = 1;
var b = '1';
console.log(a>=b);
var num = "123";
var t = num.charAt(0);
var match = 0;
if (t == 1){
    match += 1;
} 
console.log(match);
// ternary operator
var a = 10;
var b = 10;
console.log(a == b ? a * b : a + b);
function local(){
    test = "local test";
    console.log(test);
}
local();
console.log(test);
var a = 3;
var b = 4;
function mul(a, b){
    c = a * b;
    return a*b;
}
var d = mul(a,b);
console.log(d);
console.log(1/0);
list = [1,2,3,4];
list.forEach(function(element){
    console.log(element);
});
//ascending
list = [9, -1, 0, 2, 3, 10];
function ascending(list){
    for(var i = 0; i < list.length; i++){
        for(var j = 0; j < list.length; j++){
            if (list[i] < list[j]){
                var temp = list[i];
                list[i] = list[j];
                list[j] = temp;
            }
        }
    }
    return list;
}
console.log(ascending(list));
//descending
list = [9, -1, 0, 2, 3, 10];
function descending(list){
    for(var i = 0; i < list.length; i++){
        for(var j = 0; j < list.length; j++){
            if (list[i] > list[j]){
                var temp = list[i];
                list[i] = list[j];
                list[j] = temp;
            }
        }
    }
    return list;
}
console.log(descending(list));

// working with elements
list = [1,2,3,4];
list.pop();
console.log(list);
list.push(4);
console.log(list);
list.shift()
console.log(list);
list.unshift(1);
console.log(list);

// working with array
list = [1, 2, 3, 4]
l = [];
l = list.slice(0, 2);
console.log(l);
console.log(list);
console.log(list.splice(1,1));
//filter 
list = [1, 2, 3, ,4];
console.log(list.filter(function(i){
    if (i % 2 == 0){
        return i;
    }
}));
list = [1, 2, 3, 4];
console.log(list.map(function(j){
    if (j > 2){
        return j;
    };
}))
console.log(list.reverse());
list = "wake up, Eat, sleep";
l = list.split(",");
console.log(l);
console.log(l.join(" "));
list = [1, 2, 3, 44];
list.forEach(function(i){
    console.log(i);
});
console.log(list.filter(function(i){
    if(i % 2 == 0){
        return i;
    };
}));
var s =list.map(function(i){
    if(i % 2 != 0){
        return i;
    }
});
console.log(s);
// reduce 
console.log(list.reduce(function(i, j){
    return i + j;
}));
// object 
var obj = {
    name : "boy",
    age:10,
    hobby:"cricket",
    score : 100,
    details:function(){
        return (this.name+" of age "+this.age+" is playing "+this.hobby);
    },
    add:function(a, b){
        return (a+b);
    }
}
var obj2 = {
    name : "boy"
} 
console.log(obj.details());
console.log(obj.score);
console.log(obj.add(2,3));
var nxtobj = new Object();
nxtobj.name = "girl";
nxtobj.age = 12;
console.log(nxtobj.name);
console.log(nxtobj.age);
console.log(nxtobj.details);
console.log(obj.name == obj2.name);
var another = Object.create(obj);
console.log(another.name);
console.log(another.__proto__);
Object.prototype.multi = function(){
    return 2 + this.name;
}
console.log(another.multi());
console.log(another.__proto__);
var a = Object.create(another);
console.log(a.name);
console.log(a.multi());
var anna = Object.create(another);
another.name = "anna";
console.log(anna.name);
console.log(obj.name);
console.log(anna.details());
var max = Object.create(another);
max.name = "Max";
console.log(anna.name+","+max.name);
console.log(max.name);
max.age = 20;
console.log(max.details());
console.log(anna.details());
var a = 2;
var b = 4;
console.log(anna.add(a, b));
var obj = {
    name : "xyz",
    age : 14,
    college : "ooo",
    details : function(){
        return this.name +" is studing in "+this.college+" and his age is "+this.age;
    }
}
var max = Object.create(obj);
max.name = "max";
max.age = "20";
max.college = "lll";
console.log(max.details());
function person(){
    this.name = 'yyy',
    this.age = 0,
    this.greet = function () {
        console.log("hello");
    }
}
person.prototype.greetall = function(){
    console.log("hello all");
}
max = new person();
max.name = "max";
max.age = 10;
max.greetall();
function Students(){
    this.name = "xxx";
    this.age = 0;
    this.greet =function(){
        console.log("hello ");
    }
}
Students.prototype.greetall = function(){
    console.log("hello all i am "+this.name);
}
var max = new Students();
max.name = "Max";
max.age = 20;
max.greetall();
var anna = new Students();
anna.name = "Anna";
anna.age = 20;
anna.greetall();

// object prototype

var obj = {
    name : "anish",
    age : 20
}
Object.prototype.greet = function greet(){
    return this.name;
}
console.log(obj.greet());

// inheritance prototype

var obj2 = new Object(obj);
obj2.name = "lll";
console.log(obj2.greet());

// prototype with paramater
function nasdq(name, age){
    this.name = name;
    this.age = age;
    this.greet = function greet(){
        return("i am "+this.name+" my age is "+ age);
    }
}
var max = new nasdq("max", 20);
var anna = new nasdq("anna", 20);
console.log(max.name);
console.log(anna.greet());
function object(name,age){
    this.name = name;
    this.age = age;
}
var max = new object("max", 20);
console.log(max.name);