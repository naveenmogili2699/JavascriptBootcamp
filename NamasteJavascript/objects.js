
//----------------- How many ways to create a object ---------------------------------//

// 1 // =====> object literal

const person = {
    firstName: 'Mogili',
    lastName: 'Naveen',
    fullName: function () {
        return 'hello' + this.firstName + this.lastName
    }
};

