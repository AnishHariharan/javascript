var obj = {
    cash : 100000,
    withdrawal : function withdrawal(amount){
        this.cash -= amount;
        return ("your acoout is withdrew with the amount of "+amount+" sucessfully your current balance is "+this.cash);
    },
    deposit : function deposit(amount){
        this.cash += amount;
        return ("your cash of "+amount+" is deposited sucessfully your current balance is "+this.cash);
    }
}
Object.defineProperty(obj, "name",{
    get: function(){
        return "hello";
    },
    set: function(name){
        return this.cash = name;
    }
})
console.log(obj.withdrawal(100000));
console.log(obj.deposit(10000))
console.log(obj.name);
obj.name = 200;
console.log(obj.cash);