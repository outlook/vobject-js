var assert = require('assert');
var vobject = require('../../lib/vobject');

describe('lib/vobject/alarm.js', function() {
  describe('initialize', function() {
    it('component name should be VALARM', function() {
      var alarm = vobject.alarm();
      assert.equal(alarm.name, 'VALARM');
    });
  });

  describe('setAction', function() {
    it('should set ACTION property uppercased', function() {
      var alarm = vobject.alarm();
      alarm.setAction('display');
      assert.equal(alarm.properties['ACTION'][0].value, 'DISPLAY');
    });
  });

  describe('getAction', function() {
    it('should return value of ACTION property value', function() {
      var alarm = vobject.alarm();
      alarm.properties['ACTION'] = [vobject.property('ACTION', 'DISPLAY')];
      assert.equal(alarm.getAction(), 'DISPLAY');
    });
  });

  describe('setDescription', function() {
    it('should set DESCRIPTION Property', function() {
      var alarm = vobject.alarm();
      alarm.setDescription('description of the alarm');
      assert.equal(alarm.properties['DESCRIPTION'][0].value, 'description of the alarm');
    });
  });

  describe('getDescription', function() {
    it('should return value of DESCRIPTION property value', function() {
      var alarm = vobject.alarm();
      alarm.properties['DESCRIPTION'] = [vobject.property('DESCRIPTION', 'description of the alarm')];
      assert.equal(alarm.getDescription(), 'description of the alarm');
    });
  });

  describe('setTrigger', function() {
    it('should accept duration value', function() {
      var alarm = vobject.alarm();
      alarm.setTrigger(vobject.durationValue({value: -1, minute: 15}));
      assert.deepEqual(alarm.properties['TRIGGER'][0].parameters, {});
      assert.equal(alarm.properties['TRIGGER'][0].value, '-P15M');
    });
  });

  describe('getTrigger', function() {
    it('should return value of TRIGGER property', function() {
      var alarm = vobject.alarm();
      alarm.setProperty(vobject.property('TRIGGER', 'VALUE'));
      assert.equal(alarm.getTrigger().value, 'VALUE');
    });
  });
});
