var assert = require('assert');
var VObject = require('../index');

describe('initialize', function() {
  it('should set name to VCALENDAR', function() {
    var calendar = VObject.calendar();
    assert.equal(calendar.name, 'VCALENDAR');
  });

  it('should set VERSION = 2', function() {
    var calendar = VObject.calendar();
    assert.equal(calendar.getPropertyValue('VERSION'), '2.0');
  });

  it('should set PRODID', function() {
    var calendar = VObject.calendar();
    assert.equal(calendar.getPropertyValue('PRODID'), '-//Sunrise Atelier, Inc//EN');
  });
});

describe('getMethod', function() {
  it('should get METHOD', function() {
    var calendar = VObject.calendar();
    calendar.setMethod('value');
    assert.equal(calendar.getMethod(), 'value');
  });
});

describe('setMethod', function() {
  it('should set METHOD', function() {
    var calendar = VObject.calendar();
    calendar.setMethod('value');
    assert.equal(calendar.getPropertyValue('METHOD'), 'value');
  });
});