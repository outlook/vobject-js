var assert = require('assert');
var VObject = require('../../index');

describe('lib/vobject/calendar.js', function() {
  describe('initialize', function() {
    it('should set name to VCALENDAR', function() {
      var calendar = VObject.calendar();
      assert.equal(calendar.name, 'VCALENDAR');
    });

    it('should set VERSION = 2.0', function() {
      var calendar = VObject.calendar();
      assert.equal(calendar.getProperty('VERSION').value, '2.0');
    });

    it('should set CALSCALE to GREGORIAN', function() {
      var calendar = VObject.calendar();
      assert.equal(calendar.getProperty('CALSCALE').value, 'GREGORIAN');
    });

    it('should set PRODID', function() {
      var calendar = VObject.calendar();
      assert.equal(calendar.getProperty('PRODID').value, '-//Sunrise Atelier, Inc//EN');
    });
  });

  describe('setMethod', function() {
    it('should set METHOD', function() {
      var calendar = VObject.calendar();
      calendar.setMethod('value');
      assert.equal(calendar.getProperty('METHOD').value, 'value');
    });
  });

  describe('getMethod', function() {
    it('should get METHOD', function() {
      var calendar = VObject.calendar();
      calendar.setMethod('value');
      assert.equal(calendar.getMethod(), 'value');
    });
  });
});
