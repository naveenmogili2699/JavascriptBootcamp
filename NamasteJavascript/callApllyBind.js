const person = {
    firstName: 'Mogili',
    lastName: 'Naveen'
}

const fullName = function (designation, state) {
    return 'Hello ' + this.firstName + " " + this.lastName + " " + designation + " " + state
}

console.log(fullName.call(person,'React Native Developer', 'Telangana'));

const person1 = {
    firstName: 'Mogili',
    lastName: 'Sujatha',
}

console.log(fullName.call(person1,'Reactnative Developer', 'Telangana'));