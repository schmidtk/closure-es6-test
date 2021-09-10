/**
 * @fileoverview An extern for the JavaScript AST.
 * @externs
 */

/**
 * @param {string} type
 * @param {Function} callback
 * @param {boolean} capture
 */
const removeEventListener = function(type, callback, capture) {};

/**
 * @const
 */
const ol = {};

/**
 * @typedef {{unique: (boolean|undefined)}}
 */
ol.CollectionOptions;

/**
 * @param {Array<T>=} opt_array Array.
 * @param {ol.CollectionOptions=} opt_options Collection options.
 * @constructor
 * @template T
 */
ol.Collection = function(opt_array, opt_options) {};

/**
 * @typedef {Array<number>}
 */
ol.Coordinate;

/**
 * @typedef {Array<number>}
 */
ol.Extent;

/**
 * Object literal with config options for the map.
 * @typedef {{
 *   pixelRatio: (number|undefined),
 *   keyboardEventTarget: (Element|Document|string|undefined),
 *   layers: (Array<ol.layer.Base>|ol.Collection<ol.layer.Base>|undefined),
 *   loadTilesWhileAnimating: (boolean|undefined),
 *   loadTilesWhileInteracting: (boolean|undefined),
 *   moveTolerance: (number|undefined),
 *   target: (Element|string|undefined),
 *   view: (ol.View|undefined)
 * }}
 */
ol.MapOptions;

/**
 * @param {ol.MapOptions=} options
 * @constructor
 */
ol.PluggableMap = function(options) {};

/**
 * @typedef {function(new: ol.Map, ol.MapOptions=)}
 */
ol.MapClass;

/**
 * @param {ol.MapOptions=} options
 * @extends {ol.PluggableMap}
 * @constructor
 */
ol.Map = function(options) {};

/**
 * @return {ol.View}
 */
ol.Map.prototype.getView = function() {};

/**
 * Object literal with config options for the view.
 * @typedef {{
 *   center: (ol.Coordinate|undefined),
 *   constrainRotation: (boolean|number|undefined),
 *   enableRotation: (boolean|undefined),
 *   extent: (ol.Extent|undefined),
 *   minResolution: (number|undefined),
 *   maxResolution: (number|undefined),
 *   minZoom: (number|undefined),
 *   maxZoom: (number|undefined),
 *   resolution: (number|undefined),
 *   resolutions: (Array<number>|undefined),
 *   rotation: (number|undefined),
 *   zoom: (number|undefined),
 *   zoomFactor: (number|undefined)
 * }}
 */
ol.ViewOptions;

/**
 * @typedef {function(new: ol.View, ol.ViewOptions=)}
 */
ol.ViewClass;

/**
 * @param {ol.ViewOptions=} opt_options View options.
 * @constructor
 */
ol.View = function(opt_options) {};

/**
 * @return {ol.Coordinate}
 */
ol.View.prototype.getCenter = function() {};

/**
 * @const
 */
ol.layer = {};

/**
 * @constructor
 */
ol.layer.Base = function() {};

/**
 * @typedef {{
 *    opacity: (number|undefined),
 *    preload: (number|undefined),
 *    source: (ol.source.Tile|undefined),
 *    map: (ol.PluggableMap|undefined),
 *    visible: (boolean|undefined),
 *    extent: (ol.Extent|undefined),
 *    minResolution: (number|undefined),
 *    maxResolution: (number|undefined),
 *    useInterimTilesOnError: (boolean|undefined),
 *    zIndex: (number|undefined)
 *  }}
 */
ol.layer.TileOptions;

/**
 * @typedef {function(new: ol.layer.Tile, ol.layer.TileOptions)}
 */
ol.layer.TileClass;

/**
 * @param {ol.layer.TileOptions} options
 * @extends {ol.layer.Base}
 * @constructor
 */
ol.layer.Tile = function(options) {};

/**
 * @const
 */
ol.source = {};

/**
 * @constructor
 */
ol.source.Source = function() {};

/**
 * @extends {ol.source.Source}
 * @constructor
 */
ol.source.Tile = function() {};

/**
 * @typedef {{
 *   cacheSize: (number|undefined),
 *   crossOrigin: (null|string|undefined),
 *   maxZoom: (number|undefined),
 *   opaque: (boolean|undefined),
 *   reprojectionErrorThreshold: (number|undefined),
 *   url: (string|undefined),
 *   wrapX: (boolean|undefined)
 * }}
 */
ol.source.OSMOptions;

/**
 * @typedef {function(new: ol.source.OSM, ol.source.OSMOptions=)}
 */
ol.source.OSMClass;

/**
 * @param {ol.source.OSMOptions=} opt_options
 * @extends {ol.source.Tile}
 * @constructor
 */
ol.source.OSM = function(opt_options) {};
