class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    static greet(){
        return "Hello there!"
    }
}
Person.prototype.canSleep=function(){
    return `${this.name} is sleeping`
}

class Employee extends Person{
    #salary;
    constructor(name,age){
        super(name,age)
        this.#salary;
    }
    get salary(){
        return this.#salary
    }
    set salary(v){
        if(v>0){
            this.#salary=v
        }else{
            console.log("Salary must be a positive number.")
        }
    }
}
Employee.prototype.working=function(){
    return `${this.name} is working`
}

class Manager extends Employee{
    constructor(name,age){
        super(name,age)
    }
    static getRole(){
        return "Manager"
    }
}
Manager.prototype.managing=function(){
    return `${this.name} is managinng`
}

class Executive extends Manager{
    #bonus;
    constructor(name,age) {
        super(name,age)
        this.#bonus;
        
    }
    get bonus(){
        return this.#bonus
    }
    set bonus(v){
        if(v>0){
            this.#bonus=v;
        }else{
            console.log("Add bounous greater then 0.")
        }
    }
}