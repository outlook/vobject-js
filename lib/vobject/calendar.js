var Property = require('./property');
var Component = require('./component');

module.exports = function() {
  // http://tools.ietf.org/html/rfc5545#section-3.7
  var calendar = new Component('VCALENDAR');

  // Method
  // http://tools.ietf.org/html/rfc5545#section-3.7.2
  // http://tools.ietf.org/html/rfc2446#section-3.2
  calendar.setMethod = function(method) {
    return calendar.setProperty(new Property('METHOD', method.toUpperCase()));
  };

  calendar.getMethod = function() {
    return calendar.getProperty('METHOD').value;
  };

  calendar._toICSLines = calendar.toICSLines;
  calendar.toICSLines = function() {
    // Set a few standard properties before exporting to ICS

    // Version
    // http://tools.ietf.org/html/rfc5545#section-3.7.4
    if (!calendar.getProperty('VERSION')) {
      calendar.setProperty(new Property('VERSION', '2.0'));
    }

    // Calendar Scale
    // http://tools.ietf.org/html/rfc5545#section-3.7.1
    if (!calendar.getProperty('CALSCALE')) {
      calendar.setProperty(new Property('CALSCALE', 'GREGORIAN'));
    }

    // Product Identifier
    // http://tools.ietf.org/html/rfc5545#section-3.7.3
    if (!calendar.getProperty('PRODID')) {
      calendar.setProperty(new Property('PRODID', '-//Sunrise Atelier, Inc//EN'));
    }

    return calendar._toICSLines.apply(calendar, arguments);
  };

  return calendar;
};
