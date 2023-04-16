// function User(){
//     this.firstName = "",
//     this.lastName = "",

//     Object.defineProperty(this, 'fullName', {
//         get: function() {
//             return `${this.firstName} ${this.lastName} ${this.salary}`;
//         },
//         set: function(value) {
//             const [firstName, lastName, salary] = value.split(' ');
//             this.firstName = firstName;
//             this.lastName = lastName;
//             this.salary = +salary;
//         }
//     });

//     this.showData = function() {
//         console.log("firstName: " + this.firstName);
//         console.log("lastName: " + this.lastName);
//         console.log("salary: " + this.salary);

//     }
// }

// function getUsers(counter) {
//     const users = [];

//     for(let i = 0; i < counter; i++) {
//         const user = new User();
//         user.data = `Name-${i + 1} Last-${i + 1} ${1000 * (i + 1)}`
//         users.push(user);
//     }
//     return users;
// }

// const users = getUsers(10);
// console.log(users);


// class Animal {
//     get data() {
//         return `${this.name} ${this.price}`;
//     }

//     set data(value) {
//         const [name, price] = value.split(' ');
//         this.name = name;
//         this.price = +price;
//     }

//     run() {
//         console.log(`${this.name} is running`);
//     }
//     eat() {
//         console.log(`${this.name} is eating`);
//     }
// }

// const animal = new Animal();
// animal.data = "Lion 1000";

// animal.run();
// animal.eat();

function Animal() {
    Object.defineProperty(this, "data", {
        get: function() {
            return `${this.name} ${this.price}`;
        },

        set: function(value) {
            const [name, price] = value.split(' ');
            this.name = name;
            this.price = +price;
        }
    });
}

Animal.prototype.run = function() {
    console.log(`${this.name} is running`);
}
Animal.prototype.eat = function() {
    console.log(`${this.name} is eating`);
}
const animal = new Animal();

animal.data = "Lion 1000";

animal.run();
animal.eat();



