import {sayHello, setDefaultName} from './src/hello.js';
import {createMap} from './src/createMap.js';

sayHello();

// Change the default name with function.
setDefaultName('Steve');
sayHello();

createMap('map');
