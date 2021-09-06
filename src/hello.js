/**
 * The default name.
 * @type {string}
 */
let defaultName = 'World';

/**
 * Say hello.
 * @param {string=} name Who to say hello to.
 */
export const sayHello = (name = defaultName) => {
  console.log(`Hello, ${name}!`);
};

/**
 * Set the default name.
 * @param {string} value The new name.
 */
export const setDefaultName = (value) => {
  defaultName = value;
};
