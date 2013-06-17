var assert = require('assert');
var VObject = require('../index');

describe('initialize', function() {
  it('should set .name UPPERCASE', function() {
    var component = VObject.component();
    assert.equal(component.name, 'VCALENDAR');
  });

  it('should set .components to empty []', function() {
    var component = VObject.component();
    assert.deepEqual(component.components, {});
  });

  it('should set .properties to empty {}', function() {
    var component = VObject.component();
    assert.deepEqual(component.properties, {});
  });
});

describe('addProperty', function() {
  it('should add properties with name and value', function() {
    var component = VObject.component();
    component.addProperty('name', 'value');
    assert.equal(component.properties['NAME'][0].value, 'value');
  });

  it('should handle Property as value', function() {
    var component = VObject.component();
    var property = VObject.property('NAME', 'value');
    component.addProperty(property);
    assert.equal(component.properties['NAME'][0].value, 'value');
  });
});

describe('setProperty', function() {
  it('should set UNIQUE properties[name]', function() {
    var component = VObject.component();
    component.setProperty('name', 'initialValue');
    component.setProperty('name', 'updatedValue');
    assert.deepEqual(component.properties['NAME'][0].value, 'updatedValue');
  });

  it('should handle Property as value', function() {
    var component = VObject.component();
    var property = VObject.property('NAME', 'value');
    component.setProperty(property);
    assert.equal(component.properties['NAME'][0].value, 'value');
  });
});

describe('getProperties', function() {
  it('should get all properties with name', function() {
    var component = VObject.component();
    component.addProperty('ATTENDEE', ['A']);
    component.addProperty('ATTENDEE', ['B']);
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
    component.addProperty('name', 'value');
    assert.equal(component.getPropertyValue('name'), 'value');
  });

  it('should return undefined when property does not exist', function() {
    var component = VObject.component();
    assert.equal(component.getPropertyValue('name'), undefined);
  });
});

describe('stringifyToArray', function() {
  it('should transform into ICS', function() {
    var calendar = VObject.calendar('');
    var event = VObject.event();
    event.setSummary('Hello World!');
    calendar.addComponent(event);

    assert.deepEqual(calendar.stringifyToArray(),
      [
        'BEGIN:VCALENDAR',
        'VERSION:2',
        'CALSCALE:GREGORIAN',
        'PRODID:-//Sunrise Atelier, Inc//EN',
        'BEGIN:VEVENT',
        'SEQUENCE:0',
        'SUMMARY:Hello World!',
        'END:VEVENT',
        'END:VCALENDAR'
      ]);
  });
});