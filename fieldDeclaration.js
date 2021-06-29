//public field declaration
class Rectangle {
    height = 0;
    width;
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }

  ///private field declaration
  class Rectangle {
    #height = 0;
    #width;
    constructor(height, width) {
      this.#height = height;
      this.#width = width;
    }
  }