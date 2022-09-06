function calculation(number){
    return function(){
            console.log(number * 10);
    }
}
var cal = calculation(10);
cal(20);