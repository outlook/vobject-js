module.exports = function(name, value, parameters) {
  var property = {};

  property.name = (name || '').toUpperCase();
  property.value = value;
  property.parameters = parameters || {};

  // setParameter
  property.setParameter = function(name, value) {
    property.parameters[name] = value;
  };

  // getParameter
  property.getParameter = function(name) {
    return property.parameters[name];
  };

  // getValue
  property.getValue = function() {
    return property.value;
  };

  // setValue
  property.setValue = function(value) {
    property.value = value;
  };

  // stringify
  property.stringify = function() {
    // name
    var stringParts = [property.name];

    var parameters = [];
    for(var name in property.parameters) {
      parameters.push([name, property.parameters[name]].join('='));
    }
    if (parameters.length) {
      stringParts.push(';');
      stringParts.push(parameters.join(''));
    }

    stringParts.push(':');
    stringParts.push(property.value);

    return stringParts.join('');
  };

  return property;
};