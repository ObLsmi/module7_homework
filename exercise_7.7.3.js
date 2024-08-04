const person = [
    { name: "John", age: 28 },
    { name: "Lena", age: 25 },
    { name: "Cena", age: 17 },
    { name: "Ar", age: 18 },
    { name: "someName", age: 31}
];

const filterPersonAge = person.filter((user) => {
    return user.age >= 18;
});

const mapPersonName = filterPersonAge.map(user => user.name);

console.log(filterPersonAge);
console.log(mapPersonName);

