var _ = require('underscore');

module.exports = function(name, value, parameters) {
  var property = {};

  property.name = (name || '').toUpperCase();
  property.value = value;
  property.parameters = parameters || {};

  // getParameter
  property.getParameter = function(name) {
    return property.parameters[name];
  };

  // setParameter
  property.setParameter = function(name, value) {
    property.parameters[name] = value;
  };

  // getValue
  property.getValue = function() {
    return property.value;
  };

  // setValue
  property.setValue = function(value) {
    property.value = value;
  };

  // toICS
  property.toICS = function() {
    // Property Name
    var ics = [property.name];

    // Property Parameters
    var parameters = _.map(property.parameters, function(val, key) {
      return [key, val].join('=');
    });

    if (parameters.length > 0) {
      ics.push(';');
      ics.push(parameters.join(';'));
    }

    // Property Value
    if (property.value) {
      ics.push(':');
      ics.push(property.value);
    }

    return ics.join('');
  };

  return property;
};
