class Person {
    constructor(amount){
        this.amount = amount;
    }
    debited(amount){
        console.log("the amount is debited "+amount+" "+this.camount+" is credited from your account");
    }
}
class Credited extends Person{
    constructor(camount){
        super('Credited');
        this.camount = camount;
    }
    credit(){
        super.debited(1000);
    }
}
let shelif = new Credited(100);
shelif.credit(100);
