var a = [ 1, 2,3, 4, 5];
var b = [];
a.forEach(function(element){
    if (element%2 == 0){
        b.push(element);
    }
    return b;
})
console.log(b);