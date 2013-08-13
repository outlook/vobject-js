var Property = require('./property');
var Component = require('./component');

module.exports = function() {
  var calendar = new Component('VCALENDAR');

  // Calendar Properties
  // http://tools.ietf.org/html/rfc5545#section-3.7

  // Version
  // http://tools.ietf.org/html/rfc5545#section-3.7.4
  calendar.setProperty(new Property('VERSION', '2.0'));

  // Calendar Scale
  // http://tools.ietf.org/html/rfc5545#section-3.7.1
  calendar.setProperty(new Property('CALSCALE', 'GREGORIAN'));

  // Product Identifier
  // http://tools.ietf.org/html/rfc5545#section-3.7.3
  calendar.setProperty(new Property('PRODID', '-//Sunrise Atelier, Inc//EN'));

  // Method
  // http://tools.ietf.org/html/rfc5545#section-3.7.2
  calendar.setMethod = function(method) {
    calendar.setProperty(new Property('METHOD', method));
  };

  calendar.getMethod = function() {
    return calendar.getProperty('METHOD').value;
  };

  return calendar;
};
