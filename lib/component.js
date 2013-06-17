var Property = require('./property');

module.exports = function(name) {
  var component = {};

  component.name = (name || 'VCALENDAR').toUpperCase();

  // http://tools.ietf.org/html/rfc5545#section-3.6
  component.components = {};

  // http://tools.ietf.org/html/rfc5545#section-3.7
  component.properties = {};

  // addProperty
  // name, value
  component.addProperty = function(property, value) {
    if (!(property instanceof Object)) {
      property = Property(property, value);
    }
    component.properties[property.name] = component.properties[property.name] || [];
    component.properties[property.name].push(property);
  };

  // setProperty
  // unique
  component.setProperty = function(property, value) {
    if (!(property instanceof Object)) {
      property = Property(property, value);
    }
    component.properties[property.name] = [property];
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

  // stringifyToArray
  component.stringifyToArray = function() {
    var lines = [];

    // BEGIN:VCALENDAR
    lines.push(['BEGIN', component.name].join(':'));

    // Stringify .properties
    for(var name in component.properties) {
      component.properties[name].forEach(function(property) {
        lines.push(property.stringify());
      });
    }

    // Stringify .components
    for(var name in component.components) {
      component.components[name].forEach(function(component) {
        lines = lines.concat(component.stringifyToArray());
      });
    }

    // END:VCALENDAR
    lines.push(['END', component.name].join(':'));

    return lines;
  };

  return component;
};