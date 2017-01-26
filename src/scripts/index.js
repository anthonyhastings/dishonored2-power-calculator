import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';

const HelloWorld = function () {
  return (
    <div className="hello-world">
      <h1>Hello World</h1>
    </div>
  );
};

ReactDOM.render((
  <HelloWorld />
), document.querySelector('#application'));

class Person {
  constructor (name = '') {
    this.name = name;
  }

  greet () {
    console.info(`Hello ${this.name}.`);
  }
}

console.info('Store:', store);
console.info(new Person('Anthony').greet());
