'use strict';

var _ = require('underscore');

module.exports = function(name, value, parameters) {
  var property = {};

  property.name = (name || '').toUpperCase();
  property.value = value;
  property.parameters = parameters || {};

  property.setParameter = function(name, value) {
    property.parameters[name.toUpperCase()] = value;
    return this;
  };

  property.getParameter = function(name) {
    return property.parameters[name.toUpperCase()];
  };

  property.setValue = function(value) {
    property.value = value;
    return this;
  };

  property.getValue = function() {
    return property.value;
  };

  property.parseICS = function(ics) {
    var colon = ics.indexOf(':');
    var params = ics.substring(0, colon).split(';');
    var val = ics.substring(colon + 1, ics.length);

    // Property Name
    property.name = params[0].toUpperCase();

    // Property Parameters
    for (var i = 1; i < params.length; i++) {
      var parameterSplit = params[i].split('=');
      var parameterKey = parameterSplit[0];
      var parameterVal = parameterSplit[1];

      property.setParameter(parameterKey, parameterVal);
    }

    // Property Value
    return property.setValue(val);
  };

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
    if (property.name) {
      ics.push(':');
      ics.push(property.value);
    }

    var line = ics.join('');

    // Only the first line should be trimmed to 75
    // every other line should be trimmed to 74
    var lines = [];
    var lineCount = Math.ceil(Math.max(0, line.length - 75) / 74) + 1;
    for (var i = 0, o = 0; i < lineCount; i++) {
      var offset = 74;
      if (i === 0) {
        offset = 75;
      }
      var part = line.substring(o, Math.min(o + offset, line.length));
      lines.push(part);
      o += offset;
    }
    return lines.join('\r\n ');
  };

  return property;
};
