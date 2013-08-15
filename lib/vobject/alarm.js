var Property = require('./property');
var Component = require('./component');

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
    return alarm.getProperty('TRIGGER');
  };

  return alarm;
};
