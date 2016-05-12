var Person = require('./person');

module.exports = function() {
  // http://tools.ietf.org/html/rfc5545#section-3.8.4.1
  var attendee = new Person('ATTENDEE');

  // http://tools.ietf.org/html/rfc5545#section-3.2.3
  attendee.setCUTYPE = function(cutype) {
    return attendee.setParameter('CUTYPE', cutype.toUpperCase());
  };

  attendee.getCUTYPE = function() {
    return attendee.getParameter('CUTYPE');
  };

  // http://tools.ietf.org/html/rfc5545#section-3.2.16
  attendee.setRole = function(role) {
    return attendee.setParameter('ROLE', role.toUpperCase());
  };

  attendee.getRole = function() {
    return attendee.getParameter('ROLE');
  };

  // http://tools.ietf.org/html/rfc5545#section-3.2.12
  attendee.setPartStat = function(partstat) {
    return attendee.setParameter('PARTSTAT', partstat.toUpperCase());
  };

  attendee.getPartStat = function() {
    return attendee.getParameter('PARTSTAT');
  };

  // http://tools.ietf.org/html/rfc5545#section-3.2.17
  attendee.setRSVP = function(rsvp) {
    return attendee.setParameter('RSVP', rsvp.toUpperCase());
  };

  attendee.getRSVP = function() {
    return attendee.getParameter('RSVP');
  };

  return attendee;
};
