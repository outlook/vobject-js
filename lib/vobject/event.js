'use strict';

var helpers = require('./helpers');
var Property = require('./property');
var Component = require('./component');
var DateValue = require('./dateValue');
var DateTimeValue = require('./dateTimeValue');

module.exports = function() {
  // http://tools.ietf.org/html/rfc5545#section-3.6.1
  // Provide a grouping of component properties that describe an event.
  var event = new Component('VEVENT');

  // http://tools.ietf.org/html/rfc5545#section-3.8.4.7
  event.setUID = function(uid) {
    return event.setProperty(new Property('UID', uid));
  };

  event.getUID = function() {
    var property = event.getProperty('UID');
    return (property) ? property.value : undefined;
  };

  // http://tools.ietf.org/html/rfc5545#section-3.8.1.12
  event.setSummary = function(summary) {
    return event.setProperty(new Property('SUMMARY', helpers.escape(summary)));
  };

  event.getSummary = function() {
    var property = event.getProperty('SUMMARY');
    return (property) ? helpers.unescape(property.value) : undefined;
  };

  // http://tools.ietf.org/html/rfc5545#section-3.8.2.4
  event.setDTStart = function(date) {
    var property = new Property('DTSTART', date.toICS());
    if (date.type === 'dateValue') {
      property.setParameter('VALUE', 'DATE');
    }
    else if (date.type === 'dateTimeValue' && date.getTZID() !== undefined) {
      property.setParameter('TZID', date.getTZID());
    }
    return event.setProperty(property);
  };

  event.getDTStart = function() {
    var property = event.getProperty('DTSTART');
    if (!property) {
      return undefined;
    }

    var type = property.getParameter('VALUE');
    if (type === 'DATE') {
      var dateValue = new DateValue();
      dateValue.parseICS(property.value);
      return dateValue;
    }

    var dateTimeValue = new DateTimeValue();
    dateTimeValue.parseICS(property.value, property.getParameter('TZID'));
    return dateTimeValue;
  };

  // http://tools.ietf.org/html/rfc5545#section-3.8.2.2
  event.setDTEnd = function(date) {
    var property = new Property('DTEND', date.toICS());
    if (date.type === 'dateValue') {
      property.setParameter('VALUE', 'DATE');
    }
    else if (date.type === 'dateTimeValue' && date.getTZID() !== undefined) {
      property.setParameter('TZID', date.getTZID());
    }
    return event.setProperty(property);
  };

  event.getDTEnd = function() {
    var property = event.getProperty('DTEND');
    if (!property) {
      return undefined;
    }

    var type = property.getParameter('VALUE');
    if (type === 'DATE') {
      var dateValue = new DateValue();
      dateValue.parseICS(property.value);
      return dateValue;
    }

    var dateTimeValue = new DateTimeValue();
    dateTimeValue.parseICS(property.value, property.getParameter('TZID'));
    return dateTimeValue;
  };

  // http://tools.ietf.org/html/rfc5545#section-3.8.1.5
  event.setDescription = function(description) {
    return event.setProperty(new Property('DESCRIPTION', helpers.escape(description)));
  };

  event.getDescription = function() {
    var property = event.getProperty('DESCRIPTION');
    return (property) ? helpers.unescape(property.value) : undefined;
  };

  // http://tools.ietf.org/html/rfc5545#section-3.8.1.7
  event.setLocation = function(location) {
    return event.setProperty(new Property('LOCATION', helpers.escape(location)));
  };

  event.getLocation = function() {
    var property = event.getProperty('LOCATION');
    return (property) ? helpers.unescape(property.value) : undefined;
  };

  // http://tools.ietf.org/html/rfc5545#section-3.8.1.11
  event.setStatus = function(status) {
    return event.setProperty(new Property('STATUS', status.toUpperCase()));
  };

  event.getStatus = function() {
    var property = event.getProperty('STATUS');
    return (property) ? property.value : undefined;
  };

  // http://tools.ietf.org/html/rfc5545#section-3.8.7.2
  event.setDTStamp = function(date) {
    return event.setProperty(new Property('DTSTAMP', date.toICS()));
  };

  event.getDTStamp = function() {
    var property = event.getProperty('DTSTAMP');
    return (property) ? property.value : undefined;
  };

  // http://tools.ietf.org/html/rfc5545#section-3.8.7.3
  event.setLastModified = function(date) {
    return event.setProperty(new Property('LAST-MODIFIED', date.toICS()));
  };

  event.getLastModified = function() {
    var property = event.getProperty('LAST-MODIFIED');
    return (property) ? property.value : undefined;
  };

  // http://tools.ietf.org/html/rfc5545#section-3.8.7.4
  event.setSequence = function(sequence) {
    return event.setProperty(new Property('SEQUENCE', sequence.toString()));
  };

  event.getSequence = function() {
    var property = event.getProperty('SEQUENCE');
    return (property) ? parseInt(property.value.toString(), 10) : undefined;
  };

  // http://tools.ietf.org/html/rfc5545#section-3.8.7.1
  event.setCreated = function(date) {
    return event.setProperty(new Property('CREATED', date.toICS()));
  };

  event.getCreated = function() {
    var property = event.getProperty('CREATED');
    return (property) ? property.value : undefined;
  };

  // http://tools.ietf.org/html/rfc5545#section-3.8.4.3
  event.setOrganizer = function(organizer) {
    return event.setProperty(organizer);
  };

  event.getOrganizer = function() {
    return event.getProperty('ORGANIZER');
  };

  // http://tools.ietf.org/html/rfc5545#section-3.8.4.1
  event.addAttendee = function(attendee) {
    return event.pushProperty(attendee);
  };

  event.getAttendees = function() {
    return event.getProperties('ATTENDEE');
  };

  // http://tools.ietf.org/html/rfc5545#section-3.8.5.3
  event.addRRULE = function(rruleICS) {
    var property = new Property('RRULE');
    property.parseICS(rruleICS);
    return event.pushProperty(property);
  };

  event.getRRULEs = function() {
    return event.getProperties('RRULE');
  };

  // http://tools.ietf.org/html/rfc5545#section-3.8.5.1
  event.addEXDATE = function(exdateICS) {
    var property = new Property('EXDATE');
    property.parseICS(exdateICS);
    return event.pushProperty(property);
  };

  event.getEXDATEs = function() {
    return event.getProperties('EXDATE');
  };

  // http://tools.ietf.org/html/rfc5545#section-3.8.4.4
  event.setRecurrenceID = function(date) {
    var property = new Property('RECURRENCE-ID', date.toICS());
    if (date.type === 'dateValue') {
      property.setParameter('VALUE', 'DATE');
    }
    else if (date.type === 'dateTimeValue') {
      property.setParameter('TZID', date.tzid);
    }
    return event.setProperty(property);
  };

  event.getRecurrenceID = function() {
    var property = event.getProperty('RECURRENCE-ID');
    if (!property) {
      return undefined;
    }

    var type = property.getParameter('VALUE');
    if (type === 'DATE') {
      var dateValue = new DateValue();
      dateValue.parseICS(property.value);
      return dateValue;
    }

    var dateTimeValue = new DateTimeValue();
    dateTimeValue.parseICS(property.value, property.getParameter('TZID'));
    return dateTimeValue;
  };

  // http://tools.ietf.org/html/rfc5545#section-3.8.2.7
  event.setTransparency = function(transparency) {
    return event.setProperty(new Property('TRANSP', transparency.toUpperCase()));
  };

  event.getTransparency = function() {
    var property = event.getProperty('TRANSP');
    return (property) ? property.value : undefined;
  };

  event.getCategories = function() {
    var property = event.getProperty('CATEGORIES');
    return (property) ? property.value.split(',') : undefined;
  };

  return event;
};
