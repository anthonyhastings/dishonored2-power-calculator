import store from './store';

class Person {
  constructor(name = '') {
  }

  greet() {
    console.info('Hello ${this.name}.');
  }
}

console.info(new Person('Anthony').greet());
