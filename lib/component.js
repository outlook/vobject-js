module.exports = function(name) {
  var component = {};

  component.name = (name || 'VCALENDAR').toUpperCase();
  component.components = {};    // http://tools.ietf.org/html/rfc5545#section-3.6
  component.properties = {};    // http://tools.ietf.org/html/rfc5545#section-3.7

  // pushProperty
  component.pushProperty = function(property) {
    var name = property.name.toUpperCase();
    component.properties[name] = component.properties[name] || [];
    component.properties[name].push(property);
  };

  // setProperty
  // unique
  component.setProperty = function(property) {
    var name = property.name.toUpperCase();
    component.properties[name] = [property];
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

  // pushComponent
  component.pushComponent = function(childComponent) {
    component.components[childComponent.name] = component.properties[childComponent.name] || [];
    component.components[childComponent.name].push(childComponent);
  };

  // toICSArray
  component.toICSArray = function() {
    var lines = [];

    // BEGIN:VCALENDAR
    lines.push(['BEGIN', component.name].join(':'));

    // Stringify .properties
    for (var name in component.properties) {
      component.properties[name].forEach(function(property) {
        lines.push(property.toICS());
      });
    }

    // Stringify .components
    for (var name in component.components) {
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
