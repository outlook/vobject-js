var _ = require('underscore');

module.exports = function(name) {
  var component = {};

  component.name = (name || 'VCALENDAR').toUpperCase();
  component.components = {};    // http://tools.ietf.org/html/rfc5545#section-3.6
  component.properties = {};    // http://tools.ietf.org/html/rfc5545#section-3.7

  component.pushProperty = function(property) {
    var name = property.name.toUpperCase();
    component.properties[name] = component.properties[name] || [];
    component.properties[name].push(property);
  };

  component.getProperties = function(name) {
    if (!name) {
      return [];
    }

    name = name.toUpperCase();
    return component.properties[name] || [];
  };

  component.setProperty = function(property) {
    var name = property.name.toUpperCase();
    component.properties[name] = [property];
  };

  component.getProperty = function(name, index) {
    if (!name) {
      return undefined;
    }

    name = name.toUpperCase();
    return (this.properties[name] || [])[index || 0];
  };

  component.pushComponent = function(childComponent) {
    var name = childComponent.name.toUpperCase();
    component.components[name] = component.components[name] || [];
    component.components[name].push(childComponent);
  };

  component.getComponents = function(name) {
    return component.components[name.toUpperCase()] || [];
  };

  component.toICSLines = function() {
    var lines = [];

    // BEGIN:VCALENDAR
    lines.push(['BEGIN', component.name].join(':'));

    // Stringify .properties
    _.each(component.properties, function(value) {
      _.each(value, function(property) {
        lines.push(property.toICS());
      });
    });

    // Stringify .components
    _.each(component.components, function(value) {
      _.each(value, function(subComponent) {
        lines = lines.concat(subComponent.toICSLines());
      });
    });

    // END:VCALENDAR
    lines.push(['END', component.name].join(':'));

    return lines;
  };

  component.toICS = function() {
    var output = component.toICSLines();
    output.push('');  // Add empty element to ensure trailing CRLF
    return output.join('\r\n');
  };

  component.escape = function(str) {
    str = str || '';
    return str.replace(/\n/g, '\\n').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/"/g, '\\"');
  };

  component.unescape = function(str) {
    return str.replace(/\\n/g, '\n').replace(/\\;/g, ';').replace(/\\,/g, ',').replace(/\\"/g, '"');
  };

  return component;
};
