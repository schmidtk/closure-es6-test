goog.declareModuleId('createMapUntyped');

import Map from 'ol/src/Map';
import View from 'ol/src/View';
import Tile from 'ol/src/layer/Tile';
import OSM from 'ol/src/source/OSM';

/**
 * Create an OpenLayers map.
 * @param {string} target The target ID.
 * @return {!Map} The map.
 */
export const createMapUntyped = (target) => {
  const map = new Map({
    view: new View({
      center: [0, 0],
      zoom: 1
    }),
    layers: [
      new Tile({
        source: new OSM({})
      })
    ],
    target
  });

  return map;
};
