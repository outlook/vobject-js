var Property = require('./property');

module.exports = function(name) {
  var person = new Property(name);

  // CUType
  // http://tools.ietf.org/html/rfc5545#section-3.2.3
  person.setCUType = function(type) {
    person.setParameter('CUTYPE', type);
  };

  person.getCUType = function() {
    return person.getParameter('CUTYPE');
  };

  // CN
  // http://tools.ietf.org/html/rfc5545#section-3.2.2
  person.setCN = function(cn) {
    person.setParameter('CN', cn);
  };

  person.getCN = function() {
    return person.getParameter('CN');
  };

  // Mail Address
  person.setMail = function(mail) {
    person.setValue(['mailto:', mail].join(''));
  };

  person.getMail = function() {
    return person.getValue().split('mailto:')[1];
  };

  return person;
};
