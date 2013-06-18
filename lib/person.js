var Property = require('./property');

// http://tools.ietf.org/html/rfc5545#section-3.8.4.1
// This property defines an "Attendee" within a calendar component.

module.exports = function(name) {
  var person = Property(name);

  // CUType
  // http://tools.ietf.org/html/rfc5545#section-3.2.3
  person.setCUType = function(value) {
    person.setParameter('CUTYPE', value);
  };

  person.getCUType = function() {
    return person.getParameter('CUTYPE');
  };

  // CN
  // http://tools.ietf.org/html/rfc5545#section-3.2.2
  person.setCN = function(value) {
    person.setParameter('CN', value);
  };

  person.getCN = function() {
    return person.getParameter('CN');
  };

  // setMail
  person.setMail = function(mail) {
    person.setValue(['mailto:', mail].join(''));
  };

  // getMail
  person.getMail = function() {
    return person.getValue().split('mailto:')[1];
  };

  return person;
};