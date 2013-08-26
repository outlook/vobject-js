var Property = require('./property');
var Component = require('./component');
var DateTimeValue = require('./dateTimeValue');
var DurationValue = require('./durationValue');

module.exports = function() {
  // http://tools.ietf.org/html/rfc5545#section-3.6.6
  var alarm = new Component('VALARM');

  // http://tools.ietf.org/html/rfc5545#section-3.8.6.1
  alarm.setAction = function(action) {
    alarm.setProperty(new Property('ACTION', action.toUpperCase()));
  };

  alarm.getAction = function() {
    return alarm.getProperty('ACTION').value;
  };

  alarm.setDescription = function(description) {
    alarm.setProperty(new Property('DESCRIPTION', description));
  };

  alarm.getDescription = function() {
    return alarm.getProperty('DESCRIPTION').value;
  };

  // http://tools.ietf.org/html/rfc5545#section-3.8.6.3
  alarm.setTrigger = function(trigger) {
    var property = new Property('TRIGGER', trigger.toICS());
    if (trigger.type === 'dateTimeValue') {
      property.setParameter('VALUE', 'DATE-TIME');
    }
    alarm.setProperty(property);
  };

  alarm.getTrigger = function() {
    var property = alarm.getProperty('TRIGGER');
    if (!property) {
      return undefined;
    }

    var type = property.getParameter('VALUE');
    if (type === 'DATE-TIME') {
      var dateTimeValue = new DateTimeValue();
      dateTimeValue.parseICS(property.value);
      return dateTimeValue;
    }

    var durationValue = new DurationValue();
    durationValue.parseICS(property.value);
    return durationValue;
  };

  return alarm;
};
