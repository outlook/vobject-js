var Component = require('./component');

module.exports = function() {
  var calendar = Component('VCALENDAR');

  // Calendar Properties
  // http://tools.ietf.org/html/rfc5545#section-3.7

  // Version
  // http://tools.ietf.org/html/rfc5545#section-3.7.4
  calendar.addProperty('VERSION', '2');

  // Calendar Scale
  // http://tools.ietf.org/html/rfc5545#section-3.7.1
  calendar.addProperty('CALSCALE', 'GREGORIAN');

  // Product Identifier
  // http://tools.ietf.org/html/rfc5545#section-3.7.3
  calendar.addProperty('PRODID', '-//Sunrise Atelier, Inc//EN');

  // Method
  // http://tools.ietf.org/html/rfc5545#section-3.7.2
  calendar.setMethod = function(method) {
    calendar.addProperty('METHOD', method);
  };

  calendar.getMethod = function() {
    return calendar.getPropertyValue('METHOD');
  };

  return calendar;
};