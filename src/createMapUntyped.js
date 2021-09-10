goog.declareModuleId('createMapUntyped');

import Map from 'ol/Map';
import View from 'ol/View';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

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
