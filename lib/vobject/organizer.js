'use strict';

var Person = require('./person');

module.exports = function() {
  // http://tools.ietf.org/html/rfc5545#section-3.8.4.3
  var organizer = new Person('ORGANIZER');
  return organizer;
};
