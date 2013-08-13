var assert = require('assert');
var VObject = require('../index');

describe('initialize', function() {
  it('should set .name UPPERCASE', function() {
    var component = VObject.component();
    assert.equal(component.name, 'VCALENDAR');
  });

  it('should set .components to empty {}', function() {
    var component = VObject.component();
    assert.deepEqual(component.components, {});
  });

  it('should set .properties to empty {}', function() {
    var component = VObject.component();
    assert.deepEqual(component.properties, {});
  });
});

describe('pushProperty', function() {
  it('should add property to HASH', function() {
    var component = VObject.component();
    var property = VObject.property('NAME', 'value');
    component.pushProperty(property);
    assert.equal(component.properties['NAME'][0].value, 'value');
  });
});

describe('pushPropertyWithNameAndValue', function() {
  it('should add properties with name and value', function() {
    var component = VObject.component();
    component.pushPropertyWithNameAndValue('name', 'value');
    assert.equal(component.properties['NAME'][0].value, 'value');
  });
});

describe('setProperty', function() {
  it('should handle Property as value', function() {
    var component = VObject.component();
    var property = VObject.property('NAME', 'value');
    component.setProperty(property);
    assert.equal(component.properties['NAME'][0].value, 'value');
  });
});

describe('setPropertyWithNameAndValue', function() {
  it('should set UNIQUE properties[name]', function() {
    var component = VObject.component();
    component.setPropertyWithNameAndValue('name', 'initialValue');
    component.setPropertyWithNameAndValue('name', 'updatedValue');
    assert.deepEqual(component.properties['NAME'][0].value, 'updatedValue');
  });
});

describe('getProperty', function() {
  it('should return ')
});

describe('getProperties', function() {
  it('should get all properties with name', function() {
    var component = VObject.component();
    component.pushPropertyWithNameAndValue('ATTENDEE', ['A']);
    component.pushPropertyWithNameAndValue('ATTENDEE', ['B']);
    assert.deepEqual(component.getProperties('ATTENDEE').length, 2);
  });

  it('should return [] if property is undefined', function() {
    var component = VObject.component();
    assert.deepEqual(component.getProperties('NAME'), []);
  });
});

describe('getPropertyValue', function() {
  it('should get property value', function() {
    var component = VObject.component();
    component.pushPropertyWithNameAndValue('name', 'value');
    assert.equal(component.getPropertyValue('name'), 'value');
  });

  it('should return undefined when property does not exist', function() {
    var component = VObject.component();
    assert.equal(component.getPropertyValue('name'), undefined);
  });
});

describe('toICSArray', function() {
  it('should transform into ICS', function() {
    var calendar = VObject.calendar('');
    var event = VObject.event();
    event.setSummary('Hello World!');
    calendar.pushComponent(event);
    var dateTime = VObject.dateTime();
    dateTime.parseISO8601('1986-10-18T13:00:00+02:00');
    event.setDTStart(dateTime);
    assert.deepEqual(calendar.toICSArray(),
      [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'CALSCALE:GREGORIAN',
        'PRODID:-//Sunrise Atelier, Inc//EN',
        'BEGIN:VEVENT',
        'SEQUENCE:0',
        'SUMMARY:Hello World!',
        'DTSTART;VALUE=DATE-TIME:19861018T110000Z',
        'END:VEVENT',
        'END:VCALENDAR'
      ]);
  });
});
