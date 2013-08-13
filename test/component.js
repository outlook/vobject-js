var assert = require('assert');
var VObject = require('../index');

describe('lib/component.js', function() {
  describe('initialize', function() {
    it('should set .name UPPERCASE', function() {
      var component = VObject.component('componentname');
      assert.equal(component.name, 'COMPONENTNAME');
    });

    it('should default .name to VCALENDAR', function() {
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
      component.pushProperty(VObject.property('NAME', 'value'));
      assert.equal(component.properties['NAME'][0].value, 'value');
    });
  });

  describe('getProperties', function() {
    it('should get all properties with name', function() {
      var component = VObject.component();
      component.pushProperty(VObject.property('ATTENDEE', ['A']));
      component.pushProperty(VObject.property('ATTENDEE', ['B']));
      assert.deepEqual(component.getProperties('ATTENDEE').length, 2);
    });

    it('should return [] on missing name', function() {
      var component = VObject.component();
      assert.deepEqual(component.getProperties(), []);
    });

    it('should return [] if property is unset', function() {
      var component = VObject.component();
      assert.deepEqual(component.getProperties('NAME'), []);
    });
  });

  describe('setProperty', function() {
    it('should handle Property as value', function() {
      var component = VObject.component();
      component.setProperty(VObject.property('NAME', 'value'));
      assert.equal(component.properties['NAME'][0].value, 'value');
    });
  });

  describe('getProperty', function() {
    it('should return property with name at index', function() {
      var component = VObject.component();
      component.pushProperty(VObject.property('NAME', 'value0'));
      component.pushProperty(VObject.property('NAME', 'value1'));
      assert.equal(component.getProperty('NAME', 1).value, 'value1');
    });

    it('should return property at index 0 by default', function() {
      var component = VObject.component();
      component.pushProperty(VObject.property('NAME', 'value0'));
      component.pushProperty(VObject.property('NAME', 'value1'));
      assert.equal(component.getProperty('NAME').value, 'value0');
    });

    it('should return undefined on missing name', function() {
      var component = VObject.component();
      assert.equal(component.getProperty(), undefined);
    });

    it('should return undefined on unset name', function() {
      var component = VObject.component();
      assert.equal(component.getProperty('SOMEPROPERTYNAME'), undefined);
    });
  });

  describe('toICSLines', function() {
    it('should transform into ICS lines array', function() {
      var calendar = VObject.calendar();

      var event = VObject.event();
      event.setSummary('Hello World!');
      var dateTime = VObject.dateTime();
      dateTime.parseISO8601('1986-10-18T13:00:00+02:00');
      event.setDTStart(dateTime);

      calendar.pushComponent(event);

      assert.deepEqual(calendar.toICSLines(),
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

  describe('toICS', function() {
    it('should join toICSLines with CRLF with trailing break', function() {
      var component = VObject.component();
      component.toICSLines = function() {
        return ['a', 'b'];
      };

      assert.equal(component.toICS, 'a\r\nb\r\n');
    });
  });
});
