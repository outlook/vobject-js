var vEvent = require('./event');
var Property = require('./property');
var DateValue = require('./dateValue');
var DateTimeValue = require('./dateTimeValue');

module.exports = function() {
  // http://tools.ietf.org/html/rfc5545#section-3.6.2
  // Provide a grouping of calendar properties that describe a to-do.
  var todo = vEvent();
  todo.name = 'VTODO';

  // http://tools.ietf.org/html/rfc5545#section-3.8.2.3
  todo.setDue = function(date) {
    var property = new Property('DUE', date.toICS());
    if (date.type === 'dateValue') {
      property.setParameter('VALUE', 'DATE');
    }
    else if (date.type === 'dateTimeValue' && date.getTZID() !== undefined) {
      property.setParameter('TZID', date.getTZID());
    }
    todo.setProperty(property);
  };

  todo.getDue = function() {
    var property = todo.getProperty('DUE');
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

  return todo;
};
