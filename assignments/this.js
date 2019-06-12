/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window: When you are in the global scope, `this` is equal to the Window object. Examples include outside of any function, or inside a function that is not a method on an object. It also includes inside a function that is inside a method, so long as that function doesn't use arrow syntax.

* 2. Implicit: Most common default behavior. When calling a method, it goes by the *to the left of the dot* rule, where `this` refers to the object that the method resides on.

* 3. New: The new keyword does some things behind the scenes so you don't have to do it manually. When a constructor function is called with the `New` keyowrd, it creates an empty object, sets the `this` context equal to it, and returns the object. So for any method on the object, or on the constructor function's prototype, the `this` context will be referring to the object you just created.

* 4. Explicit: Manually setting the `this` context to whatever you want. You can run a method on one object, but have it use the `this` context of another object, so you can utilize functionality that one of your objects wouldn't ordinarily have access to. Call and apply work the same but apply takes arguments as an array. You can also use bind which does the same thing, but returns a new function which you can save and later call.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
var myObj = {
    outerFunc: function() {
        function innerFunc() {
            console.log('I log the window object:', this);
        }

        innerFunc();
    }
}

myObj.outerFunc();

// Principle 2

// code example for Implicit Binding

var myObjTwo = {
    outerFuncTwo: function() {
        console.log('I log the myObjTwo object:', this);
    }
}

myObjTwo.outerFuncTwo();

// Principle 3

// code example for New Binding

function Cat(name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
}

Cat.prototype.meow = function() {
    console.log('My this keyword changes based on which object is created with the Cat function. In this case it refers to:', this.name);
}

var charlie = new Cat('Charlie', 17, 'Siamese');
var phoebe = new Cat('Phoebe', 12, 'Maine Coon');

charlie.meow();
phoebe.meow();

// Principle 4

// code example for Explicit Binding

var charlieImitatingPhoebe = charlie.meow.bind(phoebe);

console.log('** ---Charlie speaking--- **');
charlieImitatingPhoebe();
console.log('** ---Charlie speaking--- **');