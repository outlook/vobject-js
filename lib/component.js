var Property = require('./property');

module.exports = function(name) {
  var component = {};

  component.name = (name || 'VCALENDAR').toUpperCase();

  // http://tools.ietf.org/html/rfc5545#section-3.6
  component.components = {};

  // http://tools.ietf.org/html/rfc5545#section-3.7
  component.properties = {};

  // addProperty
  component.addProperty = function(property) {
    component.properties[property.name] = component.properties[property.name] || [];
    component.properties[property.name].push(property);
  };

  // addPropertyWithNameAndValue
  component.addPropertyWithNameAndValue = function(name, value) {
    var property = Property(name, value);
    component.addProperty(property);
  };

  // setProperty
  // unique
  component.setProperty = function(property) {
    component.properties[property.name] = [property];
  };

  // setPropertyWithNameAndValue
  component.setPropertyWithNameAndValue = function(name, value) {
    var property = Property(name, value);
    component.setProperty(property);
  };

  // getProperty
  // returns first Property when index is undefined
  component.getProperty = function(name, index) {
    if (!name) {
      return undefined;
    }
    name = name.toUpperCase();
    return (this.properties[name] || [])[index || 0];
  };

  // getProperties
  // returns all Properties
  component.getProperties = function(name) {
    if (!name) {
      return [];
    }
    name = name.toUpperCase();
    return component.properties[name] || [];
  };

  // getPropertyValue
  component.getPropertyValue = function(name, index) {
    if (!name) {
      return undefined;
    }
    name = name.toUpperCase();
    var property = component.getProperty(name, index);
    if (!property) {
      return undefined;
    }
    return property.value;
  };

  // addComponent
  component.addComponent = function(childComponent) {
    component.components[childComponent.name] = component.properties[childComponent.name] || [];
    component.components[childComponent.name].push(childComponent);
  };

  // toICSArray
  component.toICSArray = function() {
    var lines = [];

    // BEGIN:VCALENDAR
    lines.push(['BEGIN', component.name].join(':'));

    // Stringify .properties
    for(var name in component.properties) {
      component.properties[name].forEach(function(property) {
        lines.push(property.toICS());
      });
    }

    // Stringify .components
    for(var name in component.components) {
      component.components[name].forEach(function(component) {
        lines = lines.concat(component.toICSArray());
      });
    }

    // END:VCALENDAR
    lines.push(['END', component.name].join(':'));

    return lines;
  };

  // toICS
  component.toICS = function() {
    var output = component.toICSArray();
    output.push(''); // <-- Add empty element to ensure trailing CRLF
    return output.join('\r\n');
  };

  return component;
};