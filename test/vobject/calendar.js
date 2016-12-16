var assert = require('assert');
var VObject = require('../../index');
var Property = VObject.property;

describe('lib/vobject/calendar.js', function() {
  describe('initialize', function() {
    it('should set name to VCALENDAR', function() {
      var calendar = VObject.calendar();
      assert.equal(calendar.name, 'VCALENDAR');
    });

    it('should not set VERSION = 2.0', function() {
      var calendar = VObject.calendar();
      assert.equal(calendar.getProperty('VERSION'), undefined);
    });

    it('should not set CALSCALE to GREGORIAN', function() {
      var calendar = VObject.calendar();
      assert.equal(calendar.getProperty('CALSCALE'), undefined);
    });

    it('should not set PRODID', function() {
      var calendar = VObject.calendar();
      assert.equal(calendar.getProperty('PRODID'), undefined);
    });
  });

  describe('setMethod', function() {
    it('should set METHOD', function() {
      var calendar = VObject.calendar();
      calendar.setMethod('value');
      assert.equal(calendar.getProperty('METHOD').value, 'VALUE');
    });

    it('should return reference to instance', function() {
      var calendar = VObject.calendar();
      var that = calendar.setMethod('value');
      assert.equal(that, calendar);
    });
  });

  describe('getMethod', function() {
    it('should get METHOD', function() {
      var calendar = VObject.calendar();
      calendar.setMethod('value');
      assert.equal(calendar.getMethod(), 'VALUE');
    });
  });

  describe('toICSLines', function() {
    it('should set VERSION = 2.0 if VERSION is missing', function() {
      var calendar = VObject.calendar();
      assert.deepEqual(calendar.getProperties('VERSION'), []);
      calendar.toICSLines();
      assert.equal(calendar.getProperty('VERSION').value, '2.0');
    });

    it('should not set VERSION = 2.0 if VERSION is already set', function() {
      var calendar = VObject.calendar();
      calendar.pushProperty(new Property('VERSION', '8.9'));

      assert.deepEqual(calendar.getProperties('VERSION').length, 1);
      assert.equal(calendar.getProperty('VERSION').value, '8.9');

      calendar.toICSLines();

      assert.deepEqual(calendar.getProperties('VERSION').length, 1);
      assert.equal(calendar.getProperty('VERSION').value, '8.9');
    });

    it('should set CALSCALE to GREGORIAN if CALSCALE is missing', function() {
      var calendar = VObject.calendar();
      assert.deepEqual(calendar.getProperties('CALSCALE'), []);
      calendar.toICSLines();
      assert.equal(calendar.getProperty('CALSCALE').value, 'GREGORIAN');
    });

    it('should not set VERSION = 2.0 if VERSION is already set', function() {
      var calendar = VObject.calendar();
      calendar.pushProperty(new Property('CALSCALE', 'CHINESE'));

      assert.deepEqual(calendar.getProperties('CALSCALE').length, 1);
      assert.equal(calendar.getProperty('CALSCALE').value, 'CHINESE');

      calendar.toICSLines();

      assert.deepEqual(calendar.getProperties('CALSCALE').length, 1);
      assert.equal(calendar.getProperty('CALSCALE').value, 'CHINESE');
    });

    it('should set PRODID if PRODID is missing', function() {
      var calendar = VObject.calendar();
      assert.deepEqual(calendar.getProperties('PRODID'), []);
      calendar.toICSLines();
      assert.equal(calendar.getProperty('PRODID').value, '-//Sunrise Atelier, Inc//EN');
    });

    it('should not set VERSION = 2.0 if VERSION is already set', function() {
      var calendar = VObject.calendar();
      calendar.pushProperty(new Property('PRODID', 'WonderCal'));

      assert.deepEqual(calendar.getProperties('PRODID').length, 1);
      assert.equal(calendar.getProperty('PRODID').value, 'WonderCal');

      calendar.toICSLines();

      assert.deepEqual(calendar.getProperties('PRODID').length, 1);
      assert.equal(calendar.getProperty('PRODID').value, 'WonderCal');
    });
  });
});
