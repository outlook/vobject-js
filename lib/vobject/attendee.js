var Person = require('./person');

module.exports = function() {
  // http://tools.ietf.org/html/rfc5545#section-3.8.4.1
  // This property defines an "Attendee" within a calendar component.
  var attendee = new Person('ATTENDEE');

  // Role
  // http://tools.ietf.org/html/rfc5545#section-3.2.16
  attendee.setRole = function(role) {
    attendee.setParameter('ROLE', role);
  };

  attendee.getRole = function() {
    return attendee.getParameter('ROLE');
  };

  // PartStat
  // http://tools.ietf.org/html/rfc5545#section-3.2.12
  attendee.setPartStat = function(partstat) {
    attendee.setParameter('PARTSTAT', partstat.toUpperCase());
  };

  attendee.getPartStat = function() {
    return attendee.getParameter('PARTSTAT');
  };

  // RSVP Expectation
  // http://tools.ietf.org/html/rfc5545#section-3.2.17
  attendee.setRSVP = function(rsvp) {
    attendee.setParameter('RSVP', rsvp);
  };

  attendee.getRSVP = function() {
    return attendee.getParameter('RSVP');
  };

  return attendee;
};
