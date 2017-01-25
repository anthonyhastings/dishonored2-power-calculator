import React from 'react';
import ReactDOM from 'react-dom';

const HelloWorld = function () {
  return (
    <div class="hello-world">
      <h1>Hello World</h1>
    </div>
  );
};

ReactDOM.render((
  <HelloWorld />
), document.querySelector('#application'));




import store from './store';

class Person {
  constructor(name = '') {
    this.name = name
  }

  greet() {
    console.info(`Hello ${this.name}.`);
  }
}

console.info(new Person('Anthony').greet());
