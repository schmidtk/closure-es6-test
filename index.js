const {createMapTyped} = goog.require('createMapTyped');
import {createMapUntyped} from './src/createMapUntyped.js';

const map = createMapTyped('map1');
const view = map.getView();
console.log(`${JSON.stringify(view.getCenter())}`);

createMapUntyped('map2');
