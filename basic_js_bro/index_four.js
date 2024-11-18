
// -------------- JS ARROW FUNCTIONS -------------- Date: 15.11.24

// Explanation
/*
arrow functions = a concise way to write function expressions
                                 good for simple functions that you use only once
                                 (parameters) => ome code
*/

/*
const hello = (name, age) => {console.log(`Hello, ${name}! `)
                            console.log(`You are ${age} years old`)};

hello("Rashid", 25);
*/

/*
setTimeout( () => console.log("Hello"), 3000);

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNumbers = numbers.filter((element) => element % 2 === 0);
const oddNumbers = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(`Square Numbers are, ${squares}! `);
console.log(`Cobe Numbers are, ${cubes}! `);
console.log(`Even Numbers are, ${evenNumbers}! `);
console.log(`Odd Numbers are, ${oddNumbers}! `);
console.log(`Total of Numbers, ${total}! `);
*/


// ------------------- JS Object  ------------------- !

// Explanation
/*
object = A collection of related properties and/or methods
               Can represent real world objects (people, products, places)
               object = {key:value, function()}
*/

/*
const person = {
    firstName: "Samim",
    lastName: "Reza",
    age: 27,
    isEmployed: true,
    sayHello: function(){console.log("Hi! I am Samim Reza!")},
    eat: function(){console.log("Hi! I am eating Kebab!")},
}

const person2 = {
    firstName: "Mamun",
    lastName: "Rashid",
    age: 26,
    isEmployed: false,
    sayHello: () => console.log("Hi! I am Mamun Rashid!"),
    eat: () => console.log("Hi! I am eating Beef Barger!"),
}

person.sayHello();
person2.sayHello();

person.eat();
person2.eat();
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);
// console.log(person.isEmployed);
*/


// -------------- JS THIS Keywords -------------- Date: 16.11.24

// Explanation
/*
this = reference to the object where THIS is used
          (the object depends on the immediate context)
*/

/*
const person1 = {
    name: "mRashid",
    favFood: "hamBurgers",
    sayHello: function(){console.log(`Hi! I am ${this.favFood}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

const person2 = {
    name: "mHasan",
    favFood: "Pizza",
    sayHello: function(){console.log(`Hi! I am ${this.favFood}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

person1.eat();
person2.eat();
*/


// ------------------- JS CONSTRUCTORS ------------------- !

// Explanation
/*
constructor = special method for defining the
                         properties and methods of objects
*/

/*
function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
}

const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("BMW", "7 Series", 2024, "red");
const car3 = new Car("Mercedes", "S-Class", 2024, "red");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);
*/


// -------------- JS CLASSES -------------- Date: 17.11.24

// Explanation
/*
class = (ES6 feature) provides a more structured and cleaner way to 
              work with objects compared to traditional constructor functions
              ex. static keyword, encapsulation, inheritance
*/

/*
class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: BDT ${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax)
    }
}

const salesTax = 0.05;

const product1 = new Product("Shirt", 999.99);
const product2 = new Product("Pants", 1890.546);
const product3 = new Product("Underwear", 450);

product3.displayProduct();

const total = product3.calculateTotal(salesTax);
console.log(`Total Price( with 5% Tax ): BDT ${total.toFixed(2)}`);
*/


// ------------------- JS STATIC keyword ------------------- !

// Explanation
/*
static = keyword that defines properties or methods that belong 
              to a class itself rather than the objects created
              from that class (class owns anything static, not the objects)
*/

/*
class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }

    static getCricumference(radius){
        return 2 * this.PI * radius;
    }

    static getArea(radius){
        return this.PI * radius * radius;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCricumference(10));
console.log(MathUtil.getArea(10));
*/

/*
class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }

    static getUsersCount(){
        console.log(`There are ${User.userCount} Users Online`)
    }

    sayHello(){
        console.log(`Hello, Your UserName: ${this.username}`);
    }
}

const user1 = new User("mRashid");
const user2 = new User("mHasan");
const user3 = new User("mSamim");

user1.sayHello();
user2.sayHello();
user3.sayHello();
User.getUsersCount();
*/


// -------------- JS CLASSES -------------- Date: 18.11.24

// Explanation
/*
inheritance = allows a new class to inherit properties and methods 
                        from an existing class (paren -> child). 
                        Helps with code reusability
*/

class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping.`);
    }
}

class Rabbit extends Animal{
    name = "rabbit";

    run(){
        console.log(`This ${this.name} is Running.`);
    }
}

class Fish extends Animal{
    name = "fish";

    swin(){
        console.log(`This ${this.name} is swimming.`);
    }
}

class Hawk extends Animal{
    name = "hawk";

    fly(){
        console.log(`This ${this.name} is Flying.`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hwak = new Hawk();

console.log(fish.alive);
fish.eat();
fish.sleep();
fish.swin();