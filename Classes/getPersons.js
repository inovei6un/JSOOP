class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}

function createPeople() {
    let personArr = [];

    let personOne = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    let personTwo = new Person('Softuni')
    let personThree = new Person('Stephan', 'Johnson', 25)
    let personFour = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com')

    personArr.push(personOne);
    personArr.push(personTwo);
    personArr.push(personThree);
    personArr.push(personFour);

    console.log(personArr[0].age)
    console.log(personArr[1].age)

    return personArr;
}

createPeople()