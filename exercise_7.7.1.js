const person = {
    name: "John",
    age: 30
}

function printInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`)
}

printInfo.call(person);