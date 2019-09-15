class Employee {
    private name: string;
    private dob: string;

    constructor(name: string, dob: string) {
        this.name = name;
        this.dob = dob;
    }

    public getName() {
        return this.name;
    }
    public setName(name) {
        this.name = name;
    }
    public getDob() {
        return this.dob;
    }
    public setDob(dob) {
        this.dob = dob;
    }
}


let emp1 = new Employee('Anand','11 Jan');
console.log(emp1)