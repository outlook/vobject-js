var Property = require('./property');

// http://tools.ietf.org/html/rfc5545#section-3.8.4.1
// This property defines an "Attendee" within a calendar component.

module.exports = function() {
  var attendee = Property('ATTENDEE');

  // CUType
  // http://tools.ietf.org/html/rfc5545#section-3.2.3
  attendee.setCUType = function(value) {
    attendee.setParameter('CUTYPE', value);
  };

  attendee.getCUType = function() {
    return attendee.getParameter('CUTYPE');
  };

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

  // CN
  // http://tools.ietf.org/html/rfc5545#section-3.2.2
  attendee.setCN = function(value) {
    attendee.setParameter('CN', value);
  };

  attendee.getCN = function() {
    return attendee.getParameter('CN');
  };

  // setMail
  attendee.setMail = function(mail) {
    attendee.setValue(['mailto:', mail].join(''));
  };

  // getMail
  attendee.getMail = function() {
    return attendee.getValue().split('mailto:')[1];
  };

  return attendee;
};