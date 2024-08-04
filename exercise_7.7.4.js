function setFullName(object, fullNameValue) {
    object.fullName = fullNameValue;
}

const person = {
    name: "Pes", 
    age: 28
};

const setPersonFullName = setFullName.bind(null, person);
setPersonFullName("John Smith");
console.log(person);
