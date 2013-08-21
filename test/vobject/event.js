var assert = require('assert');
var vobject = require('../../index');

var event;
beforeEach(function() {
  event = vobject.event();
});

describe('lib/vobject/event.js', function() {
  describe('initialize', function() {
    it('should set name to VEVENT', function() {
      assert.equal(event.name, 'VEVENT');
    });
  });

  describe('setUID', function() {
    it('should set UID', function(done) {
      event.setProperty = function(property) {
        assert.equal(property.name, 'UID');
        assert.equal(property.value, 'value');
        done();
      };
      event.setUID('value');
    });
  });

  describe('getUID', function() {
    it('should return undefined by default', function() {
      assert.equal(event.getUID(), undefined);
    });

    it('should get UID', function() {
      event.setUID('value');
      assert.equal(event.getUID(), 'value');
    });
  });

  describe('setSummary', function() {
    it('should set SUMMARY', function(done) {
      event.setProperty = function(property) {
        assert.equal(property.name, 'SUMMARY');
        assert.equal(property.value, 'value');
        done();
      };
      event.setSummary('value');
    });

    it('should escape special characters', function() {
      event.setSummary('\n;,');
      assert.equal(event.getSummary(), '\\n\\;\\,');
    });
  });

  describe('getSummary', function() {
    it('should return undefined by default', function() {
      assert.equal(event.getSummary(), undefined);
    });

    it('should get SUMMARY', function() {
      event.setSummary('value');
      assert.equal(event.getSummary(), 'value');
    });
  });

  describe('setDTStart', function() {
    it('should handle dateTimeValue', function() {
      event.setDTStart(vobject.dateTimeValue('1986-10-18T13:00:00+02:00'));
      assert.equal(event.properties['DTSTART'][0].getParameter('VALUE'), undefined);
      assert.equal(event.properties['DTSTART'][0].getParameter('TZID'), undefined);
      assert.equal(event.properties['DTSTART'][0].value, '19861018T110000Z');
    });

    it('should handle floating dateTimeValue', function() {
      var dateTime = vobject.dateTimeValue('2013-08-16T17:00:00-04:00');
      dateTime.setTZID('America/New_York');
      event.setDTStart(dateTime);
      assert.equal(event.properties['DTSTART'][0].getParameter('VALUE'), undefined);
      assert.equal(event.properties['DTSTART'][0].getParameter('TZID'), 'America/New_York');
      assert.equal(event.properties['DTSTART'][0].value, '20130816T170000');
    });

    it('should handle dateValue', function() {
      event.setDTStart(vobject.dateValue('1986-10-18'));
      assert.equal(event.properties['DTSTART'][0].getParameter('VALUE'), 'DATE');
      assert.equal(event.properties['DTSTART'][0].getParameter('TZID'), undefined);
      assert.equal(event.properties['DTSTART'][0].value, '19861018');
    });
  });

  describe('getDTStart', function() {
    it('should return undefined by default', function() {
      assert.equal(event.getDTStart(), undefined);
    });

    it('should get DTSTART property', function() {
      event.properties['DTSTART'] = [vobject.property('DTSTART', 'VALUE')];
      assert.equal(event.getDTStart().value, 'VALUE');
    });
  });

  describe('setDTEnd', function() {
    it('should handle dateTimeValue', function() {
      event.setDTEnd(vobject.dateTimeValue('1986-10-18T13:00:00+02:00'));
      assert.equal(event.properties['DTEND'][0].getParameter('VALUE'), undefined);
      assert.equal(event.properties['DTEND'][0].getParameter('TZID'), undefined);
      assert.equal(event.properties['DTEND'][0].value, '19861018T110000Z');
    });

    it('should handle floating dateTimeValue', function() {
      var dateTime = vobject.dateTimeValue('2013-08-16T17:00:00-04:00');
      dateTime.setTZID('America/New_York');
      event.setDTEnd(dateTime);
      assert.equal(event.properties['DTEND'][0].getParameter('VALUE'), undefined);
      assert.equal(event.properties['DTEND'][0].getParameter('TZID'), 'America/New_York');
      assert.equal(event.properties['DTEND'][0].value, '20130816T170000');
    });

    it('should handle dateValue', function() {
      event.setDTEnd(vobject.dateValue('1986-10-18'));
      assert.equal(event.properties['DTEND'][0].getParameter('VALUE'), 'DATE');
      assert.equal(event.properties['DTEND'][0].getParameter('TZID'), undefined);
      assert.equal(event.properties['DTEND'][0].value, '19861018');
    });
  });

  describe('getDTEnd', function() {
    it('should be undefined by default', function() {
      assert.equal(event.getDTEnd(), undefined);
    });

    it('should get DTEND property', function() {
      event.properties['DTEND'] = [vobject.property('DTEND', 'VALUE')];
      assert.equal(event.getDTEnd().value, 'VALUE');
    });
  });

  describe('setDescription', function() {
    it('should set DESCRIPTION', function(done) {
      event.setProperty = function(property) {
        assert.equal(property.name, 'DESCRIPTION');
        assert.equal(property.value, 'value');
        done();
      };
      event.setDescription('value');
    });

    it('should escape special characters', function() {
      event.setDescription('\n;,');
      assert.equal(event.getDescription(), '\\n\\;\\,');
    });
  });

  describe('getDescription', function() {
    it('should be undefined by default', function() {
      assert.equal(event.getDescription(), undefined);
    });

    it('should get DESCRIPTION', function() {
      event.setDescription('value');
      assert.equal(event.getDescription(), 'value');
    });
  });

  describe('setLocation', function() {
    it('should set LOCATION', function(done) {
      event.setProperty = function(property) {
        assert.equal(property.name, 'LOCATION');
        assert.equal(property.value, 'value');
        done();
      };
      event.setLocation('value');
    });
  });

  describe('getLocation', function() {
    it('should be undefined by default', function() {
      assert.equal(event.getLocation(), undefined);
    });

    it('should get LOCATION', function() {
      event.setLocation('value');
      assert.equal(event.getLocation(), 'value');
    });
  });

  describe('setStatus', function() {
    it('should set STATUS', function(done) {
      event.setProperty = function(property) {
        assert.equal(property.name, 'STATUS');
        assert.equal(property.value, 'VALUE');
        done();
      };
      event.setStatus('value');
    });
  });

  describe('getStatus', function() {
    it('should be undefined by default', function() {
      assert.equal(event.getStatus(), undefined);
    });

    it('should get STATUS', function() {
      event.setStatus('value');
      assert.equal(event.getStatus(), 'VALUE');
    });
  });

  describe('setDTStamp', function() {
    it('should (ONLY) handle DateTime', function() {
      var dateTime = vobject.dateTimeValue();
      dateTime.parseDateTime('1986-10-18T13:00:00+02:00');
      event.setDTStamp(dateTime);
      assert.equal(event.getDTStamp(), '19861018T110000Z');
    });
  });

  describe('getDTStamp', function() {
    it('should be undefined by default', function() {
      assert.equal(event.getDTStamp(), undefined);
    });

    it('should get DTSTAMP', function() {
      var dateTime = vobject.dateTimeValue();
      dateTime.parseDateTime('1986-10-18T13:00:00+02:00');
      event.setDTStamp(dateTime);
      assert.equal(event.getDTStamp(), '19861018T110000Z');
    });
  });

  describe('setLastModified', function() {
    it('should set LAST-MODIFIED', function() {
      var dateTimeValue = vobject.dateTimeValue('1986-10-18T13:00:00+02:00');
      event.setLastModified(dateTimeValue);
      assert.equal(event.properties['LAST-MODIFIED'][0].value, dateTimeValue.toICS());
    });
  });

  describe('getLastModified', function() {
    it('should be undefined by default', function() {
      assert.equal(event.getLastModified(), undefined);
    });

    it('should get LAST-MODIFIED', function() {
      var dateTimeValue = vobject.dateTimeValue('1986-10-18T13:00:00+02:00');
      event.properties['LAST-MODIFIED'] = [vobject.property('LAST-MODIFIED', dateTimeValue.toICS())];
      assert.equal(event.getLastModified(), dateTimeValue.toICS());
    });
  });

  describe('setSequence', function() {
    it('should set SEQUENCE', function(done) {
      event.setProperty = function(property) {
        assert.equal(property.name, 'SEQUENCE');
        assert.equal(property.value, 'value');
        done();
      };
      event.setSequence('value');
    });
  });

  describe('getSequence', function() {
    it('should be undefined by default', function() {
      assert.equal(event.getSequence(), undefined);
    });

    it('should get SEQUENCE', function() {
      event.setSequence(11);
      assert.equal(event.getSequence(), 11);
    });
  });

  describe('setCreated', function() {
    it('should set CREATED', function() {
      var dateTime = vobject.dateTimeValue();
      dateTime.parseDateTime('1986-10-18T13:00:00+02:00');
      event.setCreated(dateTime);
      assert.equal(event.getCreated(), '19861018T110000Z');
    });
  });

  describe('getCreated', function() {
    it('should be undefined by default', function() {
      assert.equal(event.getCreated(), undefined);
    });

    it('should get CREATED', function() {
      var dateTime = vobject.dateTimeValue();
      dateTime.parseDateTime('1986-10-18T13:00:00+02:00');
      event.setCreated(dateTime);
      assert.equal(event.getCreated(), '19861018T110000Z');
    });
  });

  describe('setOrganizer', function() {
    it('should set ORGANIZER', function(done) {
      event.setProperty = function(property) {
        assert.equal(property, 'value');
        done();
      };
      event.setOrganizer('value');
    });
  });

  describe('getOrganizer', function() {
    it('should be undefined by default', function() {
      assert.equal(event.getOrganizer(), undefined);
    });

    it('should get ORGANIZER', function() {
      event.getProperty = function(name) {
        assert.equal(name, 'ORGANIZER');
        return 'value';
      };
      assert.equal(event.getOrganizer(), 'value');
    });
  });

  describe('addAttendee', function() {
    it('should add ATTENDEE', function(done) {
      event.pushProperty = function(property) {
        assert.equal(property, 'value');
        done();
      };
      event.addAttendee('value');
    });
  });

  describe('getAttendees', function() {
    it('should be [] by default', function() {
      assert.deepEqual(event.getAttendees(), []);
    });

    it('should get all ATTENDEE', function() {
      event.getProperties = function(name) {
        assert.equal(name, 'ATTENDEE');
        return 'value';
      };
      assert.equal(event.getAttendees(), 'value');
    });
  });

  describe('addRRULE', function() {
    it('should add RRULE', function(done) {
      event.pushProperty = function(property) {
        assert.equal(property.name, 'RRULE');
        assert.equal(property.value, 'value');
        done();
      };
      event.addRRULE('value');
    });
  });

  describe('getRRULEs', function() {
    it('should be [] by default', function() {
      assert.deepEqual(event.getRRULEs(), []);
    });

    it('should get all RRULE', function() {
      event.getProperties = function(name) {
        assert.equal(name, 'RRULE');
        return 'value';
      };
      assert.equal(event.getRRULEs(), 'value');
    });
  });

  describe('addEXDATE', function() {
    it('should add EXDATE', function(done) {
      event.pushProperty = function(property) {
        assert.equal(property.name, 'EXDATE');
        assert.equal(property.value, 'value');
        done();
      };
      event.addEXDATE('value');
    });
  });

  describe('getEXDATEs', function() {
    it('should be [] by default', function() {
      assert.deepEqual(event.getEXDATEs(), []);
    });

    it('should get all EXDATE', function() {
      event.getProperties = function(name) {
        assert.equal(name, 'EXDATE');
        return 'value';
      };
      assert.equal(event.getEXDATEs(), 'value');
    });
  });

  describe('setRecurrenceID', function() {
    it('should set RECURRENCE-ID property with dateValue', function() {
      event.setRecurrenceID(vobject.dateValue('2013-08-16'));
      assert.equal(event.properties['RECURRENCE-ID'][0].getParameter('VALUE'), 'DATE');
      assert.equal(event.properties['RECURRENCE-ID'][0].value, '20130816');
    });

    it('should set RECURRENCE-ID property with dateTimeValue', function() {
      var dateTimeValue = vobject.dateTimeValue('2013-08-13 21:33:40 -04:00');
      dateTimeValue.setTZID('America/New_York');

      event.setRecurrenceID(dateTimeValue);
      assert.equal(event.properties['RECURRENCE-ID'][0].getParameter('TZID'), 'America/New_York');
      assert.equal(event.properties['RECURRENCE-ID'][0].value, '20130813T213340');
    });
  });

  describe('getRecurrenceID', function() {
    it('should be undefined by default', function() {
      assert.equal(event.getRecurrenceID(), undefined);
    });

    it('should get RECURRENCE-ID property', function() {
      event.properties['RECURRENCE-ID'] = [vobject.property('RECURRENCE-ID', 'VALUE')];
      assert.equal(event.getRecurrenceID().value, 'VALUE');
    });
  });

  describe('setTransparency', function() {
    it('should set TRANSP property', function() {
      event.setTransparency('transparent');
      assert.equal(event.properties['TRANSP'][0].value, 'TRANSPARENT');
    });
  });

  describe('getTransparency', function() {
    it('should be undefined by default', function() {
      assert.equal(event.getTransparency(), undefined);
    });

    it('should get TRANSP property value', function() {
      event.properties['TRANSP'] = [vobject.property('TRANSP', 'TRANSPARENT')];
      assert.equal(event.getTransparency(), 'TRANSPARENT');
    });
  });
});
