var Person = require('./person');

// http://tools.ietf.org/html/rfc5545#section-3.8.4.1
// This property defines an "Attendee" within a calendar component.

module.exports = function() {
  var attendee = Person('ATTENDEE');

  // Role
  // http://tools.ietf.org/html/rfc5545#section-3.2.16
  attendee.setRole = function(value) {
    attendee.setParameter('ROLE', value);
  };

  attendee.getRole = function() {
    return attendee.getParameter('ROLE');
  };

  // PartStat
  // http://tools.ietf.org/html/rfc5545#section-3.2.12
  attendee.setPartStat = function(value) {
    attendee.setParameter('PARTSTAT', value);
  };

  attendee.getPartStat = function() {
    return attendee.getParameter('PARTSTAT');
  };

  // RSVP Expectation
  // http://tools.ietf.org/html/rfc5545#section-3.2.17
  attendee.setRSVP = function(value) {
    attendee.setParameter('RSVP', value);
  };

  attendee.getRSVP = function() {
    return attendee.getParameter('RSVP');
  };

  return attendee;
};