/**
 * The default name.
 * @type {string}
 */
let defaultName = 'World';

/**
 * Say hello.
 * @param {string=} name Who to say hello to.
 */
const sayHello = (name = defaultName) => {
  console.log(`Hello, ${name}!`);
};

/**
 * Set the default name.
 * @param {string} value The new name.
 */
const setDefaultName = (value) => {
  defaultName = value;
};

export default {
  /**
   * Set the default name.
   * @param {string} value The new name.
   */
  set defaultName(value) {
    defaultName = value;
  },
  sayHello,
  setDefaultName
};
