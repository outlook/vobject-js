var Component = require('./component');

module.exports = function() {
  // http://tools.ietf.org/html/rfc5545#section-3.6.1
  // Provide a grouping of component properties that describe an event.
  var event = Component('VEVENT');

  // Sequence to 0 (Default)
  event.setProperty('SEQUENCE', '0');

  // http://tools.ietf.org/html/rfc5545#section-3.8.4.7
  event.setUID = function(UID) {
    event.setProperty('UID', UID);
  };

  event.getUID = function() {
    return event.getPropertyValue('UID');
  };

  // http://tools.ietf.org/html/rfc5545#section-3.8.1.12
  event.setSummary = function(summary) {
    event.setProperty('SUMMARY', summary);
  };

  event.getSummary = function() {
    return event.getPropertyValue('SUMMARY');
  };

  // http://tools.ietf.org/html/rfc5545#section-3.8.1.5
  event.setDescription = function(description) {
    event.setProperty('DESCRIPTION', description);
  };

  event.getDescription = function() {
    return event.getPropertyValue('DESCRIPTION');
  };

  // http://tools.ietf.org/html/rfc5545#section-3.8.1.7
  event.setLocation = function(location) {
    event.setProperty('LOCATION', location);
  };

  event.getLocation = function() {
    return event.getPropertyValue('LOCATION');
  };

  // http://tools.ietf.org/html/rfc5545#section-3.8.1.11
  event.setStatus = function(status) {
    event.setProperty('STATUS', status);
  };

  event.getStatus = function() {
    return event.getPropertyValue('STATUS');
  };

  // http://tools.ietf.org/html/rfc5545#section-3.8.7.2
  event.setDTStamp = function(dtstamp) {
    event.setProperty('DTSTAMP', dtstamp);
  };

  event.getDTStamp = function() {
    return event.getPropertyValue('DTSTAMP');
  };

  // http://tools.ietf.org/html/rfc5545#section-3.8.7.4
  event.setSequence = function(sequence) {
    event.setProperty('SEQUENCE', sequence);
  };

  event.getSequence = function() {
    return event.getPropertyValue('SEQUENCE');
  };

  // http://tools.ietf.org/html/rfc5545#section-3.8.7.1
  event.setCreated = function(sequence) {
    event.setProperty('CREATED', sequence);
  };

  event.getCreated = function() {
    return event.getPropertyValue('CREATED');
  };

  return event;
};