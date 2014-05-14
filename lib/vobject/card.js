var Component = require('./component');

module.exports = function() {
  // https://tools.ietf.org/html/rfc6350
  var card = new Component('VCARD');

  // https://tools.ietf.org/html/rfc6350#section-6.7.6
  card.getUID = function() {
    var property = card.getProperty('UID');
    return (property) ? property.value : undefined;
  };

  // https://tools.ietf.org/html/rfc6350#section-6.2.2
  card.getFirstName = function() {
    var property = card.getProperty('N');
    if (!(property && property.value)) {
      return undefined;
    }

    var nameComponents = property.value.split(';');
    if (nameComponents.length !== 5) {
      // Incomplete name structure
      return undefined;
    }

    var firstName = nameComponents[1];
    return firstName;
  };

  // https://tools.ietf.org/html/rfc6350#section-6.2.2
  card.getLastName = function() {
    var property = card.getProperty('N');
    if (!(property && property.value)) {
      return undefined;
    }

    var nameComponents = property.value.split(';');
    if (nameComponents.length !== 5) {
      // Incomplete name structure
      return undefined;
    }

    var lastName = nameComponents[0];
    return lastName;
  };

  // https://tools.ietf.org/html/rfc6350#section-6.2.1
  card.getName = function() {
    var property = card.getProperty('FN');
    return (property) ? property.value : undefined;
  };

  // https://tools.ietf.org/html/rfc6350#section-6.4.2
  card.getEmails = function() {
    return card.getProperties('EMAIL');
  };

  // https://tools.ietf.org/html/rfc6350#section-6.4.1
  card.getTelephoneNumbers = function() {
    return card.getProperties('TEL');
  };

  // https://tools.ietf.org/html/rfc6350#section-6.2.5
  card.getBirthday =  function() {
    var property = card.getProperty('BDAY');
    return (property) ? property.value : undefined;
  };

  return card;
};
