var obj = {
    name : "xxx",
}
var obj2 = {
    rank : function(a, b){
        console.log(this.name+" "+ (a + b));
    }
}
obj2.rank.call(obj, 1, 2);