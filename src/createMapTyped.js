goog.module('createMapTyped');

const Map = /** @type {ol.MapClass} */ (require('ol/src/Map').default);
const View = /** @type {ol.ViewClass} */ (require('ol/src/View').default);
const Tile = /** @type {ol.layer.TileClass} */ (require('ol/src/layer/Tile').default);
const OSM = /** @type {ol.source.OSMClass} */ (require('ol/src/source/OSM').default);

/**
 * Create an OpenLayers map.
 * @param {string} target The target ID.
 * @return {!ol.Map} The map.
 */
const createMapTyped = (target) => {
  const map = new Map({
    view: new View({
      center: [0, 0],
      zoom: 1
    }),
    layers: [
      new Tile({
        source: new OSM()
      })
    ],
    target
  });

  return map;
};

exports = {createMapTyped};
