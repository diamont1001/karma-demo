'use strict';

var A = require('./src/a.js');
var B = require('./src/b.js');

module.exports = (function() {
  var _e = {};

  _e.show = function() {
    return A.name + '_' + B.name;
  };

  return _e;
})();
