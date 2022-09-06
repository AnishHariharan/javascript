class Person{
    constructor(name){
        this._name = name;
    }
    get n(){
        return this._name;
    }
    set n (value){
        this.name = value;
    }
}
Person.n = "anish";
