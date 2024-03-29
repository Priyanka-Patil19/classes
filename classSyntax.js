//the basic class syntax looks like this:

class MyClass {
  prop = value; // property

  constructor(...) { // constructor
    // ...
  }

  method(...) {} // method

  get something(...) {} // getter method
  set something(...) {} // setter method

  [Symbol.iterator]() {} // method with computed name (symbol here)
  // ...
}


//synatax
class Myclass{
    constructor (){}
    method1(){}
    method2(){}
    method3(){}
}

//example

class User{
    constructor(name){
        this.name=name;
    }

    sayHi(){
        alert(this.name);
    }
}

let user = new User("Urvesh");
user.sayHi();
alert(typeof user);
//user:object
//User:function

// ...or, more precisely, the constructor method
alert(User === User.prototype.constructor); // true

// The methods are in User.prototype, e.g:
alert(User.prototype.sayHi); // the code of the sayHi method

// there are exactly two methods in the prototype
alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

alert(Object.getOwnPropertyNames(User)); 


// rewriting class User in pure functions

// 1. Create constructor function
function User(name) {
    this.name = name;
  }
  // a function prototype has "constructor" property by default,
  // so we don't need to create it
  
  // 2. Add the method to prototype
  User.prototype.sayHi = function() {
    alert(this.name);
  };
  
  // Usage:
  let user = new User("John");
  user.sayHi();

  ///class expression
  let User=class{
      sayHi(){
          alert("hello");
      }
  }

  /////////////////////////////////////////
  // "Named Class Expression"
// (no such term in the spec, but that's similar to Named Function Expression)
let User = class MyClass {
    sayHi() {
      alert(MyClass); // MyClass name is visible only inside the class
    }
  };
  
  new User().sayHi(); // works, shows MyClass definition
  
  alert(MyClass); // error, MyClass name isn't visible outside of the class



//We can even make classes dynamically “on-demand”, like this:

function makeClass(phrase) {
    // declare a class and return it
    return class {
      sayHi() {
        alert(phrase);
      }
    };
  }
  
  // Create a new class
  let User = makeClass("Hello");
  
  new User().sayHi(); // Hello


//getter and setter
class User {

    constructor(name) {
      // invokes the setter
      this.name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      if (value.length < 4) {
        alert("Name is too short.");
        return;
      }
      this._name = value;
    }
  
  }
  
  let user = new User("John");
  alert(user.name); // John


  //computed name

  class User {

    ['say' + 'Hi']() {
      alert("Hello");
    }
  
  }
  
  new User().sayHi();

  ///class fields

  
class User {
  name = "John";

  sayHi() {
    alert(`Hello, ${this.name}!`);
  }
}

new User().sayHi(); // Hello, John!


////
class User {
    name = "John";
  }
  
  let user = new User();
  alert(user.name); // John
  alert(User.prototype.name); // undefined





























