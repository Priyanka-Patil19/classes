class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name) {
      super(name); // call the super class constructor and pass in the name parameter
    }
  
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  let d = new Dog('Mitzie');
  d.speak(); // Mitzie barks.

  //same as above

  function Animal (name) {
    this.name = name;
  }
  
  Animal.prototype.speak = function () {
    console.log(`${this.name} makes a noise.`);
  }
  
  class Dog extends Animal {
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  let d = new Dog('Mitzie');
  d.speak(); // Mitzie barks.
  
  // For similar methods, the child's method takes precedence over parent's method

  ///using Object.setPrototypeOf()
  const Animal = {
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  };
  
  class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
  // If you do not do this you will get a TypeError when you invoke speak
  Object.setPrototypeOf(Dog.prototype, Animal);
  
  let d = new Dog('Mitzie');
  d.speak(); // Mitzie makes a noise.

  
