var assert = require('assert');

var parse;
beforeEach(function() {
  delete require.cache[require.resolve('../lib/parse')];
  parse = require('../lib/parse');
});

describe('lib/parse.js', function() {
  describe('splitICS', function() {
    it('should expand lines with trailing CRLF', function() {
      var ics = 'FIRST\r\nSECOND\r\nTHIRD\r\n';
      assert.deepEqual(parse.splitICS(ics), ['FIRST', 'SECOND', 'THIRD']);
    });

    it('should fold lines with leading space', function() {
      var ics = 'FIRST\r\nSECOND1\r\n SECOND2\r\nTHIRD\r\n';
      assert.deepEqual(parse.splitICS(ics), ['FIRST', 'SECOND1SECOND2', 'THIRD']);
    });

    it('should fold lines with leading tab', function() {
      var ics = 'FIRST\r\nSECOND1\r\n\tSECOND2\r\nTHIRD\r\n';
      assert.deepEqual(parse.splitICS(ics), ['FIRST', 'SECOND1SECOND2', 'THIRD']);
    });

    it('should expand lines with trailing LF only', function() {
      var ics = 'FIRST\nSECOND\nTHIRD\n';
      assert.deepEqual(parse.splitICS(ics), ['FIRST', 'SECOND', 'THIRD']);
    });

    it('should fold lines with leading space with trailing LF only', function() {
      var ics = 'FIRST\nSECOND1\n SECOND2\nTHIRD\n';
      assert.deepEqual(parse.splitICS(ics), ['FIRST', 'SECOND1SECOND2', 'THIRD']);
    });

    it('should fold lines with leading tab with trailing LF only', function() {
      var ics = 'FIRST\nSECOND1\n\tSECOND2\nTHIRD\n';
      assert.deepEqual(parse.splitICS(ics), ['FIRST', 'SECOND1SECOND2', 'THIRD']);
    });
  });

  describe('parseComponent', function() {
    beforeEach(function() {
      parse.vobject = {
        calendar: function() {
          return 'VCALENDAR';
        },
        event: function() {
          return 'VEVENT';
        },
        todo: function() {
          return 'VTODO';
        },
        alarm: function() {
          return 'VALARM';
        },
        component: function() {
          return 'VCOMPONENT';
        }
      };
    });

    it('should delegate calendar object', function() {
      assert.equal(parse.parseComponent('BEGIN:VCALENDAR'), 'VCALENDAR');
    });

    it('should delegate event object', function() {
      assert.equal(parse.parseComponent('BEGIN:VEVENT'), 'VEVENT');
    });

    it('should delegate todo object', function() {
      assert.equal(parse.parseComponent('BEGIN:VTODO'), 'VTODO');
    });

    it('should delegate alarm object', function() {
      assert.equal(parse.parseComponent('BEGIN:VALARM'), 'VALARM');
    });

    it('should default to component object', function() {
      assert.equal(parse.parseComponent('BEGIN:VCOMPONENT'), 'VCOMPONENT');
    });
  });

  describe('parseProperty', function() {
    beforeEach(function() {
      parse.vobject = {
        attendee: function() {
          return {
            name: 'ATTENDEE',
            parseICS: function(ics) {
              assert.equal(ics, 'ATTENDEE');
            }
          };
        },
        organizer: function() {
          return {
            name: 'ORGANIZER',
            parseICS: function(ics) {
              assert.equal(ics, 'ORGANIZER');
            }
          };
        },
        property: function() {
          return {
            name: 'PROPERTY',
            parseICS: function(ics) {
              assert.ok(ics === 'EXDATE' || ics === 'PROPERTY');
            }
          };
        }
      };
    });

    it('should delegate attendee property', function() {
      assert.equal(parse.parseProperty('ATTENDEE').name, 'ATTENDEE');
    });

    it('should delegate organizer property', function() {
      assert.equal(parse.parseProperty('ORGANIZER').name, 'ORGANIZER');
    });

    it('should set multiProperty for exdate property', function() {
      assert.equal(parse.parseProperty('EXDATE').isMultiProperty, true);
    });

    it('should default to property', function() {
      assert.equal(parse.parseProperty('PROPERTY').name, 'PROPERTY');
    });
  });
});
