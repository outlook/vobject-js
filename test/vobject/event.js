var assert = require('assert');
var vobject = require('../../index');

describe('lib/vobject/event.js', function() {
  describe('initialize', function() {
    it('should set name to VEVENT', function() {
      var event = vobject.event();
      assert.equal(event.name, 'VEVENT');
    });
  });

  describe('setUID', function() {
    it('should set UID', function(done) {
      var event = vobject.event();
      event.setProperty = function(property) {
        assert.equal(property.name, 'UID');
        assert.equal(property.value, 'value');
        done();
      };
      event.setUID('value');
    });
  });

  describe('getUID', function() {
    it('should get UID', function() {
      var event = vobject.event();
      event.setUID('value');
      assert.equal(event.getUID(), 'value');
    });
  });

  describe('setSummary', function() {
    it('should set SUMMARY', function(done) {
      var event = vobject.event();
      event.setProperty = function(property) {
        assert.equal(property.name, 'SUMMARY');
        assert.equal(property.value, 'value');
        done();
      };
      event.setSummary('value');
    });

    it('should escape special characters', function() {
      var event = vobject.event();
      event.setSummary('\n;,');
      assert.equal(event.getSummary(), '\\n\\;\\,');
    });
  });

  describe('getSummary', function() {
    it('should get SUMMARY', function() {
      var event = vobject.event();
      event.setSummary('value');
      assert.equal(event.getSummary(), 'value');
    });
  });

  describe('setDTStart', function() {
    it('should handle DateTime', function(done) {
      var event = vobject.event();
      var dateTime = vobject.dateTimeValue();
      dateTime.parseDateTime('1986-10-18T13:00:00+02:00');

      event.pushProperty = function(property) {
        assert.equal(property.name, 'DTSTART');
        assert.equal(property.getParameter('VALUE'), undefined);
        assert.equal(property.value, '19861018T110000Z');
        done();
      };
      event.setDTStart(dateTime);
    });

    it('should handle Date', function(done) {
      var event = vobject.event();
      var date = vobject.dateValue();
      date.parseDate('1986-10-18');

      event.pushProperty = function(property) {
        assert.equal(property.name, 'DTSTART');
        assert.equal(property.getParameter('VALUE'), 'DATE');
        assert.equal(property.value, '19861018');
        done();
      };
      event.setDTStart(date);
    });
  });

  describe('getDTStart', function() {
    it('should get DTSTART', function() {
      var event = vobject.event();
      event.getProperty = function(name) {
        assert.equal(name, 'DTSTART');
        return vobject.property('DTSTART', 'value');
      };

      assert.equal(event.getDTStart(), 'value');
    });
  });

  describe('setDTEnd', function() {
    it('should handle DateTime', function(done) {
      var event = vobject.event();
      var dateTime = vobject.dateTimeValue();
      dateTime.parseDateTime('1986-10-18T13:00:00+02:00');

      event.pushProperty = function(property) {
        assert.equal(property.name, 'DTEND');
        assert.equal(property.getParameter('VALUE'), undefined);
        assert.equal(property.value, '19861018T110000Z');
        done();
      };
      event.setDTEnd(dateTime);
    });

    it('should handle Date', function(done) {
      var event = vobject.event();
      var date = vobject.dateValue();
      date.parseDate('1986-10-18');

      event.pushProperty = function(property) {
        assert.equal(property.name, 'DTEND');
        assert.equal(property.getParameter('VALUE'), 'DATE');
        assert.equal(property.value, '19861018');
        done();
      };
      event.setDTEnd(date);
    });
  });

  describe('getDTEnd', function() {
    it('should get DTEND', function() {
      var event = vobject.event();
      event.getProperty = function(name) {
        assert.equal(name, 'DTEND');
        return vobject.property('DTEND', 'value');
      };
      assert.equal(event.getDTEnd(), 'value');
    });
  });

  describe('setDescription', function() {
    it('should set DESCRIPTION', function(done) {
      var event = vobject.event();
      event.setProperty = function(property) {
        assert.equal(property.name, 'DESCRIPTION');
        assert.equal(property.value, 'value');
        done();
      };
      event.setDescription('value');
    });

    it('should escape special characters', function() {
      var event = vobject.event();
      event.setDescription('\n;,');
      assert.equal(event.getDescription(), '\\n\\;\\,');
    });
  });

  describe('getDescription', function() {
    it('should get DESCRIPTION', function() {
      var event = vobject.event();
      event.setDescription('value');
      assert.equal(event.getDescription(), 'value');
    });
  });

  describe('setLocation', function() {
    it('should set LOCATION', function(done) {
      var event = vobject.event();
      event.setProperty = function(property) {
        assert.equal(property.name, 'LOCATION');
        assert.equal(property.value, 'value');
        done();
      };
      event.setLocation('value');
    });
  });

  describe('getLocation', function() {
    it('should get LOCATION', function() {
      var event = vobject.event();
      event.setLocation('value');
      assert.equal(event.getLocation(), 'value');
    });
  });

  describe('setStatus', function() {
    it('should set STATUS', function(done) {
      var event = vobject.event();
      event.setProperty = function(property) {
        assert.equal(property.name, 'STATUS');
        assert.equal(property.value, 'VALUE');
        done();
      };
      event.setStatus('value');
    });
  });

  describe('getStatus', function() {
    it('should get STATUS', function() {
      var event = vobject.event();
      event.setStatus('value');
      assert.equal(event.getStatus(), 'VALUE');
    });
  });

  describe('setDTStamp', function() {
    it('should (ONLY) handle DateTime', function() {
      var event = vobject.event();
      var dateTime = vobject.dateTimeValue();
      dateTime.parseDateTime('1986-10-18T13:00:00+02:00');
      event.setDTStamp(dateTime);
      assert.equal(event.getDTStamp(), '19861018T110000Z');
    });
  });

  describe('getDTStamp', function() {
    it('should get DTSTAMP', function() {
      var event = vobject.event();
      var dateTime = vobject.dateTimeValue();
      dateTime.parseDateTime('1986-10-18T13:00:00+02:00');
      event.setDTStamp(dateTime);
      assert.equal(event.getDTStamp(), '19861018T110000Z');
    });
  });

  describe('setLastModified', function() {
    it('should set LAST-MODIFIED', function() {
      var event = vobject.event();
      var dateTimeValue = vobject.dateTimeValue('1986-10-18T13:00:00+02:00');
      event.setLastModified(dateTimeValue);
      assert.equal(event.properties['LAST-MODIFIED'][0].value, dateTimeValue.toICS());
    });
  });

  describe('getLastModified', function() {
    it('should get LAST-MODIFIED', function() {
      var event = vobject.event();
      var dateTimeValue = vobject.dateTimeValue('1986-10-18T13:00:00+02:00');
      event.properties['LAST-MODIFIED'] = [vobject.property('LAST-MODIFIED', dateTimeValue.toICS())];
      assert.equal(event.getLastModified(), dateTimeValue.toICS());
    });
  });

  describe('setSequence', function() {
    it('should set SEQUENCE', function(done) {
      var event = vobject.event();
      event.setProperty = function(property) {
        assert.equal(property.name, 'SEQUENCE');
        assert.equal(property.value, 'value');
        done();
      };
      event.setSequence('value');
    });
  });

  describe('getSequence', function() {
    it('should get SEQUENCE', function() {
      var event = vobject.event();
      event.setSequence(11);
      assert.equal(event.getSequence(), 11);
    });
  });

  describe('setCreated', function() {
    it('should set CREATED', function() {
      var event = vobject.event();
      var dateTime = vobject.dateTimeValue();
      dateTime.parseDateTime('1986-10-18T13:00:00+02:00');
      event.setCreated(dateTime);
      assert.equal(event.getCreated(), '19861018T110000Z');
    });
  });

  describe('getCreated', function() {
    it('should get CREATED', function() {
      var event = vobject.event();
      var dateTime = vobject.dateTimeValue();
      dateTime.parseDateTime('1986-10-18T13:00:00+02:00');
      event.setCreated(dateTime);
      assert.equal(event.getCreated(), '19861018T110000Z');
    });
  });

  describe('setOrganizer', function() {
    it('should set ORGANIZER', function(done) {
      var event = vobject.event();
      event.setProperty = function(property) {
        assert.equal(property, 'value');
        done();
      };
      event.setOrganizer('value');
    });
  });

  describe('getOrganizer', function() {
    it('should get ORGANIZER', function() {
      var event = vobject.event();
      event.getProperty = function(name) {
        assert.equal(name, 'ORGANIZER');
        return 'value';
      };
      assert.equal(event.getOrganizer(), 'value');
    });
  });

  describe('addAttendee', function() {
    it('should add ATTENDEE', function(done) {
      var event = vobject.event();
      event.pushProperty = function(property) {
        assert.equal(property, 'value');
        done();
      };
      event.addAttendee('value');
    });
  });

  describe('getAttendees', function() {
    it('should get all ATTENDEE', function() {
      var event = vobject.event();
      event.getProperties = function(name) {
        assert.equal(name, 'ATTENDEE');
        return 'value';
      };
      assert.equal(event.getAttendees(), 'value');
    });
  });

  describe('addRRULE', function() {
    it('should add RRULE', function(done) {
      var event = vobject.event();
      event.pushProperty = function(property) {
        assert.equal(property.name, 'RRULE');
        assert.equal(property.value, 'value');
        done();
      };
      event.addRRULE('value');
    });
  });

  describe('getRRULEs', function() {
    it('should get all RRULE', function() {
      var event = vobject.event();
      event.getProperties = function(name) {
        assert.equal(name, 'RRULE');
        return 'value';
      };
      assert.equal(event.getRRULEs(), 'value');
    });
  });

  describe('setRecurrenceID', function() {
    it('should set RECURRENCE-ID property with dateValue', function() {
      var event = vobject.event();
      event.setRecurrenceID(vobject.dateValue('2013-08-16'));
      assert.equal(event.properties['RECURRENCE-ID'][0].getParameter('VALUE'), 'DATE');
      assert.equal(event.properties['RECURRENCE-ID'][0].value, '20130816');
    });

    it('should set RECURRENCE-ID property with dateTimeValue', function() {
      var dateTimeValue = vobject.dateTimeValue('2013-08-13 21:33:40 -04:00');
      dateTimeValue.setTZID('America/New_York');

      var event = vobject.event();
      event.setRecurrenceID(dateTimeValue);
      assert.equal(event.properties['RECURRENCE-ID'][0].getParameter('TZID'), 'America/New_York');
      assert.equal(event.properties['RECURRENCE-ID'][0].value, '20130813T213340');
    });
  });

  describe('getRecurrenceID', function() {
    it('should get RECURRENCE-ID property', function() {
      var event = vobject.event();
      event.properties['RECURRENCE-ID'] = [vobject.property('RECURRENCE-ID', 'VALUE')];
      assert.equal(event.getRecurrenceID().value, 'VALUE');
    });
  });

  describe('setTransparency', function() {
    it('should set TRANSP property', function() {
      var event = vobject.event();
      event.setTransparency('transparent');
      assert.equal(event.properties['TRANSP'][0].value, 'TRANSPARENT');
    });
  });

  describe('getTransparency', function() {
    it('should get TRANSP property value', function() {
      var event = vobject.event();
      event.properties['TRANSP'] = [vobject.property('TRANSP', 'TRANSPARENT')];
      assert.equal(event.getTransparency(), 'TRANSPARENT');
    });
  });
});
