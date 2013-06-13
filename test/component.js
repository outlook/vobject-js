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
    assert.equal(component.properties['name'][0].value, 'value');
  });
});

describe('setProperty', function() {
  it('should set UNIQUE properties[name]', function() {
    var component = VObject.component();
    component.setProperty('name', 'initialValue');
    component.setProperty('name', 'updatedValue');
    assert.deepEqual(component.properties['name'][0].value, 'updatedValue');
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