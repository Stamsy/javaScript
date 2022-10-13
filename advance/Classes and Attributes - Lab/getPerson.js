class Person{

    constructor(firstName, lastName, age, email) {
        if(Number.isInteger(age) == false) {
            throw new TypeError('Age must be an integer!');
        }

        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}
 
    const myPerson = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    const myPerson2 = new Person('SoftUni','','' , '');
    const myPerson3 = new Person('Stephan', 'Johnson', 25, '');
    const myPerson4 = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');
    const people = [this.myPerson, this.myPerson2, this.myPerson3];

    console.log(people);