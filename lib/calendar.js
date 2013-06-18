var Component = require('./component');

module.exports = function() {
  var calendar = Component('VCALENDAR');

  // Calendar Properties
  // http://tools.ietf.org/html/rfc5545#section-3.7

  // Version
  // http://tools.ietf.org/html/rfc5545#section-3.7.4
  calendar.setPropertyWithNameAndValue('VERSION', '2.0');

  // Calendar Scale
  // http://tools.ietf.org/html/rfc5545#section-3.7.1
  calendar.setPropertyWithNameAndValue('CALSCALE', 'GREGORIAN');

  // Product Identifier
  // http://tools.ietf.org/html/rfc5545#section-3.7.3
  calendar.setPropertyWithNameAndValue('PRODID', '-//Sunrise Atelier, Inc//EN');

  // Method
  // http://tools.ietf.org/html/rfc5545#section-3.7.2
  calendar.setMethod = function(method) {
    calendar.setPropertyWithNameAndValue('METHOD', method);
  };

  calendar.getMethod = function() {
    return calendar.getPropertyValue('METHOD');
  };

  return calendar;
};