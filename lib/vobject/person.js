'use strict';

var helpers = require('./helpers');
var Property = require('./property');

module.exports = function(name) {
  var person = new Property(name);

  // CUType
  // http://tools.ietf.org/html/rfc5545#section-3.2.3
  person.setCUType = function(type) {
    return person.setParameter('CUTYPE', type);
  };

  person.getCUType = function() {
    return person.getParameter('CUTYPE');
  };

  // CN
  // http://tools.ietf.org/html/rfc5545#section-3.2.2
  person.setCN = function(cn) {
    return person.setParameter('CN', helpers.escape(cn));
  };

  person.getCN = function() {
    var cn = person.getParameter('CN');
    return (cn) ? helpers.unescape(cn) : undefined;
  };

  // Mail Address
  person.setMail = function(mail) {
    return person.setValue(['mailto:', mail].join(''));
  };

  person.getMail = function() {
    var value = person.getValue();

    if (value) {
      return value.toLowerCase().split('mailto:')[1];
    }

    return undefined;
  };

  return person;
};
