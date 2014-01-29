var assert = require('assert');
var vobject = require('../../index');

describe('lib/vobject/component.js', function() {
  describe('initialize', function() {
    it('should set .name UPPERCASE', function() {
      var component = vobject.component('componentname');
      assert.equal(component.name, 'COMPONENTNAME');
    });

    it('should default .name to VCALENDAR', function() {
      var component = vobject.component();
      assert.equal(component.name, 'VCALENDAR');
    });

    it('should set .components to empty {}', function() {
      var component = vobject.component();
      assert.deepEqual(component.components, {});
    });

    it('should set .properties to empty {}', function() {
      var component = vobject.component();
      assert.deepEqual(component.properties, {});
    });
  });

  describe('pushProperty', function() {
    it('should add property to HASH', function() {
      var component = vobject.component();
      component.pushProperty(vobject.property('NAME', 'value'));
      assert.equal(component.properties['NAME'][0].value, 'value');
    });
  });

  describe('getProperties', function() {
    it('should get all properties with name', function() {
      var component = vobject.component();
      component.pushProperty(vobject.property('ATTENDEE', ['A']));
      component.pushProperty(vobject.property('ATTENDEE', ['B']));
      assert.deepEqual(component.getProperties('ATTENDEE').length, 2);
    });

    it('should return [] on missing name', function() {
      var component = vobject.component();
      assert.deepEqual(component.getProperties(), []);
    });

    it('should return [] if property is unset', function() {
      var component = vobject.component();
      assert.deepEqual(component.getProperties('NAME'), []);
    });
  });

  describe('setProperty', function() {
    it('should handle Property as value', function() {
      var component = vobject.component();
      component.setProperty(vobject.property('NAME', 'value'));
      assert.equal(component.properties['NAME'][0].value, 'value');
    });
  });

  describe('getProperty', function() {
    it('should return property with name at index', function() {
      var component = vobject.component();
      component.pushProperty(vobject.property('NAME', 'value0'));
      component.pushProperty(vobject.property('NAME', 'value1'));
      assert.equal(component.getProperty('NAME', 1).value, 'value1');
    });

    it('should return property at index 0 by default', function() {
      var component = vobject.component();
      component.pushProperty(vobject.property('NAME', 'value0'));
      component.pushProperty(vobject.property('NAME', 'value1'));
      assert.equal(component.getProperty('NAME').value, 'value0');
    });

    it('should return undefined on missing name', function() {
      var component = vobject.component();
      assert.equal(component.getProperty(), undefined);
    });

    it('should return undefined on unset name', function() {
      var component = vobject.component();
      assert.equal(component.getProperty('SOMEPROPERTYNAME'), undefined);
    });
  });

  describe('pushComponent', function() {
    it('should push subcomponent', function() {
      var component = vobject.component();
      component.pushComponent(vobject.component('SUBCOMPONENT'));
      assert.equal(component.components['SUBCOMPONENT'][0].name, 'SUBCOMPONENT');
    });

    it('should push subcomponent with same name', function() {
      var component = vobject.component();
      component.pushComponent(vobject.component('SUBCOMPONENT'));
      component.pushComponent(vobject.component('SUBCOMPONENT'));
      assert.equal(component.components['SUBCOMPONENT'][1].name, 'SUBCOMPONENT');
    });
  });

  describe('getComponents', function() {
    it('should be [] by default', function() {
      var component = vobject.component();
      assert.deepEqual(component.getComponents('UNKNOWNCOMPONENT'), []);
    });
    it('should get components with name', function() {
      var component = vobject.component();
      component.components['SUBCOMPONENT'] = ['a', 'b'];
      assert.deepEqual(component.getComponents('SUBCOMPONENT'), ['a', 'b']);
    });
  });

  describe('toICSLines', function() {
    it('should transform into ICS lines array', function() {
      var calendar = vobject.calendar();

      var event = vobject.event();
      event.setSummary('Hello World!');
      var dateTime = vobject.dateTimeValue();
      dateTime.parseDateTime('1986-10-18T13:00:00+02:00');
      event.setDTStart(dateTime);

      calendar.pushComponent(event);

      assert.deepEqual(calendar.toICSLines(),
        [
          'BEGIN:VCALENDAR',
          'VERSION:2.0',
          'CALSCALE:GREGORIAN',
          'PRODID:-//Sunrise Atelier, Inc//EN',
          'BEGIN:VEVENT',
          'SUMMARY:Hello World!',
          'DTSTART:19861018T110000Z',
          'END:VEVENT',
          'END:VCALENDAR'
        ]);
    });

    it('should render multiple sub components', function() {
      var component = vobject.component('PARENT');
      component.pushComponent(vobject.component('CHILDCOMPONENT'));
      component.pushComponent(vobject.component('CHILDCOMPONENT'));
      assert.equal(component.toICSLines().length, 6);
    });
  });

  describe('toICS', function() {
    it('should join toICSLines with CRLF with trailing break', function() {
      var component = vobject.component();
      component.toICSLines = function() {
        return ['a', 'b'];
      };

      assert.equal(component.toICS(), 'a\r\nb\r\n');
    });
  });

  describe('escape', function() {
    it('should escape newline', function() {
      var str = 'this\nthat';
      assert.equal(vobject.component().escape(str), 'this\\nthat');
    });

    it('should escape semicolon', function() {
      var str = 'this;that';
      assert.equal(vobject.component().escape(str), 'this\\;that');
    });

    it('should escape comma', function() {
      var str = 'this,that';
      assert.equal(vobject.component().escape(str), 'this\\,that');
    });

    it('should escape double quote', function() {
      var str = 'this"that';
      assert.equal(vobject.component().escape(str), 'this\\"that');
    });
  });

  describe('unescape', function() {
    it('should unescape newline', function() {
      var str = 'this\\nthat';
      assert.equal(vobject.component().unescape(str), 'this\nthat');
    });

    it('should unescape semicolon', function() {
      var str = 'this\\;that';
      assert.equal(vobject.component().unescape(str), 'this;that');
    });

    it('should unescape comma', function() {
      var str = 'this\\,that';
      assert.equal(vobject.component().unescape(str), 'this,that');
    });

    it('should unescape double quote', function() {
      var str = 'this\\"that';
      assert.equal(vobject.component().unescape(str), 'this"that');
    });
  });
});
