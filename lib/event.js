var Component = require('./component');

module.exports = function() {
  // http://tools.ietf.org/html/rfc5545#section-3.6.1
  // Provide a grouping of component properties that describe an event.
  var event = Component('VEVENT');

  // Sequence to 0 (Default)
  event.setPropertyWithNameAndValue('SEQUENCE', '0');

  // http://tools.ietf.org/html/rfc5545#section-3.8.4.7
  event.setUID = function(UID) {
    event.setPropertyWithNameAndValue('UID', UID);
  };

  event.getUID = function() {
    return event.getPropertyValue('UID');
  };

  // http://tools.ietf.org/html/rfc5545#section-3.8.1.12
  event.setSummary = function(summary) {
    event.setPropertyWithNameAndValue('SUMMARY', summary);
  };

  event.getSummary = function() {
    return event.getPropertyValue('SUMMARY');
  };

  // http://tools.ietf.org/html/rfc5545#section-3.8.1.5
  event.setDescription = function(description) {
    event.setPropertyWithNameAndValue('DESCRIPTION', description);
  };

  event.getDescription = function() {
    return event.getPropertyValue('DESCRIPTION');
  };

  // http://tools.ietf.org/html/rfc5545#section-3.8.1.7
  event.setLocation = function(location) {
    event.setPropertyWithNameAndValue('LOCATION', location);
  };

  event.getLocation = function() {
    return event.getPropertyValue('LOCATION');
  };

  // http://tools.ietf.org/html/rfc5545#section-3.8.1.11
  event.setStatus = function(status) {
    event.setPropertyWithNameAndValue('STATUS', status);
  };

  event.getStatus = function() {
    return event.getPropertyValue('STATUS');
  };

  // http://tools.ietf.org/html/rfc5545#section-3.8.7.2
  event.setDTStamp = function(value) {
    var prefix = '';
    if (value.isDate) {
      prefix = 'VALUE=DATE:';
    }
    event.setPropertyWithNameAndValue('DTSTAMP', [prefix, value.toICS()].join(''));
  };

  event.getDTStamp = function() {
    return event.getPropertyValue('DTSTAMP');
  };

  // http://tools.ietf.org/html/rfc5545#section-3.8.7.4
  event.setSequence = function(sequence) {
    event.setPropertyWithNameAndValue('SEQUENCE', sequence);
  };

  event.getSequence = function() {
    return event.getPropertyValue('SEQUENCE');
  };

  // http://tools.ietf.org/html/rfc5545#section-3.8.7.1
  event.setCreated = function(sequence) {
    event.setPropertyWithNameAndValue('CREATED', sequence);
  };

  event.getCreated = function() {
    return event.getPropertyValue('CREATED');
  };

  // http://tools.ietf.org/html/rfc5545#section-3.8.4.3
  event.setOrganizer = function(organizer) {
    event.setPropertyWithNameAndValue('ORGANIZER', organizer);
  };

  event.getOrganizer = function() {
    return event.getPropertyValue('ORGANIZER');
  };

  // http://tools.ietf.org/html/rfc5545#section-3.8.4.1
  event.addAttendee = function(attendee) {
    event.addProperty(attendee);
  };

  event.getAttendees = function() {
    return event.getProperties('ATTENDEE');
  };

  // setDTStart
  // http://tools.ietf.org/html/rfc5545#section-3.8.2.4
  event.setDTStart = function(value) {
    var prefix = '';
    if (value.isDate) {
      prefix = 'VALUE=DATE:';
    }
    event.setPropertyWithNameAndValue('DTSTART', [prefix, value.toICS()].join(''));
  };

  event.getDTStart = function() {
    return event.getPropertyValue('DTSTART');
  };

  // setDTEnd
  // http://tools.ietf.org/html/rfc5545#section-3.8.2.2
  event.setDTEnd = function(value) {
    var prefix = '';
    if (value.isDate) {
      prefix = 'VALUE=DATE:';
    }
    event.setPropertyWithNameAndValue('DTEND', [prefix, value.toICS()].join(''));
  };

  event.getDTEnd = function() {
    return event.getPropertyValue('DTEND');
  };

  return event;
};