// Create a class UserManager with:
// A private array users: User[] to store user data.
// A method addUser(user: User): void that adds a new user.
// A method removeUser(id: number): void that removes a user by ID.
// A method getUser(id: number): User | undefined that retrieves a user by ID.
// A method getAllUsers(): User[] that returns all users.
class UserManager {
    constructor() {
        this.users = [];
    }
    addUser(user) {
        this.users.push(user);
    }
    removeUser(id) {
        this.users = this.users.filter(user => user.id !== id);
    }
    getUser(id) {
        for (let user of this.users) {
            if (user.id == id) {
                return user;
            }
        }
        // OR return this.users.find(user => user.id === id);
    }
    getAllUsers() {
        return this.users;
    }
}
const obj = new UserManager();
obj.addUser({ id: 1, name: "lakshit", email: "myemail", age: 20 });
obj.addUser({ id: 2, name: "ram", email: "ramemail" });
obj.addUser({ id: 3, name: "john", email: "johnemail", age: 25 });
const allUsers = obj.getAllUsers();
allUsers.forEach(user => {
    console.log(user);
});
console.log(obj.getUser(3));
console.log(obj.removeUser(2));
const allUsers2 = obj.getAllUsers();
allUsers2.forEach(user => {
    console.log(user);
});
// Use Arrow Functions & Default Parameters
// Add a method getUser = (name: string = "Guest"): string that returns a greeting message.
const getMyUser = (name = "Guest") => {
    return `hello ${name}`;
};
const msg = getMyUser();
console.log(msg);
// Use Destructuring & Spread Operator
// Create a function printUserDetails(user: User): void that logs user details using object destructuring.
function printUserDetails(user) {
    const copyUser = Object.assign({}, user);
    const { id, name, email, age } = copyUser;
    console.log(`Details are id: ${id} name: ${name} email: ${email} age: ${age ? age : 'not entered'}`);
}
const user2 = { id: 2, name: "ram", email: "ramemail" };
printUserDetails(user2);
