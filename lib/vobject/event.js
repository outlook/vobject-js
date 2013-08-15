var Property = require('./property');
var Component = require('./component');

var escape = function(str) {
  str = str || '';
  return str.replace(/\n/g, '\\n').replace(/;/g, '\\;').replace(/,/g, '\\,');
};

module.exports = function() {
  // http://tools.ietf.org/html/rfc5545#section-3.6.1
  // Provide a grouping of component properties that describe an event.
  var event = new Component('VEVENT');

  // http://tools.ietf.org/html/rfc5545#section-3.8.4.7
  event.setUID = function(uid) {
    event.setProperty(new Property('UID', uid));
  };

  event.getUID = function() {
    return event.getProperty('UID').value;
  };

  // http://tools.ietf.org/html/rfc5545#section-3.8.1.12
  event.setSummary = function(summary) {
    event.setProperty(new Property('SUMMARY', escape(summary)));
  };

  event.getSummary = function() {
    return event.getProperty('SUMMARY').value;
  };

  // http://tools.ietf.org/html/rfc5545#section-3.8.2.4
  event.setDTStart = function(date) {
    var property = new Property('DTSTART', date.toICS());
    if (date.type === 'dateValue') {
      property.setParameter('VALUE', 'DATE');
    }
    event.pushProperty(property);
  };

  event.getDTStart = function() {
    return event.getProperty('DTSTART').value;
  };

  // http://tools.ietf.org/html/rfc5545#section-3.8.2.2
  event.setDTEnd = function(date) {
    var property = new Property('DTEND', date.toICS());
    if (date.type === 'dateValue') {
      property.setParameter('VALUE', 'DATE');
    }
    event.pushProperty(property);
  };

  event.getDTEnd = function() {
    return event.getProperty('DTEND').value;
  };

  // http://tools.ietf.org/html/rfc5545#section-3.8.1.5
  event.setDescription = function(description) {
    event.setProperty(new Property('DESCRIPTION', escape(description)));
  };

  event.getDescription = function() {
    return event.getProperty('DESCRIPTION').value;
  };

  // http://tools.ietf.org/html/rfc5545#section-3.8.1.7
  event.setLocation = function(location) {
    event.setProperty(new Property('LOCATION', location));
  };

  event.getLocation = function() {
    return event.getProperty('LOCATION').value;
  };

  // http://tools.ietf.org/html/rfc5545#section-3.8.1.11
  event.setStatus = function(status) {
    event.setProperty(new Property('STATUS', status.toUpperCase()));
  };

  event.getStatus = function() {
    return event.getProperty('STATUS').value;
  };

  // http://tools.ietf.org/html/rfc5545#section-3.8.7.2
  event.setDTStamp = function(date) {
    event.setProperty(new Property('DTSTAMP', date.toICS()));
  };

  event.getDTStamp = function() {
    return event.getProperty('DTSTAMP').value;
  };

  // http://tools.ietf.org/html/rfc5545#section-3.8.7.4
  event.setSequence = function(integer) {
    event.setProperty(new Property('SEQUENCE', integer.toString()));
  };

  event.getSequence = function() {
    return parseInt(event.getProperty('SEQUENCE').value.toString(), 10);
  };

  // http://tools.ietf.org/html/rfc5545#section-3.8.7.1
  event.setCreated = function(date) {
    event.setProperty(new Property('CREATED', date.toICS()));
  };

  event.getCreated = function() {
    return event.getProperty('CREATED').value;
  };

  // http://tools.ietf.org/html/rfc5545#section-3.8.4.3
  event.setOrganizer = function(organizer) {
    event.setProperty(organizer);
  };

  event.getOrganizer = function() {
    return event.getProperty('ORGANIZER');
  };

  // http://tools.ietf.org/html/rfc5545#section-3.8.4.1
  event.addAttendee = function(attendee) {
    event.pushProperty(attendee);
  };

  event.getAttendees = function() {
    return event.getProperties('ATTENDEE');
  };

  // http://tools.ietf.org/html/rfc5545#section-3.8.5.3
  event.addRRULE = function(rrule) {
    event.pushProperty(new Property('RRULE', rrule));
  };

  event.getRRULEs = function() {
    return event.getProperties('RRULE');
  };

  return event;
};
