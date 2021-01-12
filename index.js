import hello from './src/hello.js';

hello.sayHello();

// Change the default name with ES6 setter. This works with Webpack only, but Closure optimizes this line out.
hello.defaultName = 'Alan';
hello.sayHello();

// Change the default name with function.
hello.setDefaultName('Steve');
hello.sayHello();
