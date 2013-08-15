var assert = require('assert');
var VObject = require('../../index');

describe('lib/vobject/event.js', function() {
  describe('initialize', function() {
    it('should set name to VEVENT', function() {
      var event = VObject.event();
      assert.equal(event.name, 'VEVENT');
    });
  });

  describe('setUID', function() {
    it('should set UID', function(done) {
      var event = VObject.event();
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
      var event = VObject.event();
      event.setUID('value');
      assert.equal(event.getUID(), 'value');
    });
  });

  describe('setSummary', function() {
    it('should set SUMMARY', function(done) {
      var event = VObject.event();
      event.setProperty = function(property) {
        assert.equal(property.name, 'SUMMARY');
        assert.equal(property.value, 'value');
        done();
      };
      event.setSummary('value');
    });

    it('should escape special characters', function() {
      var event = VObject.event();
      event.setSummary('\n;,');
      assert.equal(event.getSummary(), '\\n\\;\\,');
    });
  });

  describe('getSummary', function() {
    it('should get SUMMARY', function() {
      var event = VObject.event();
      event.setSummary('value');
      assert.equal(event.getSummary(), 'value');
    });
  });

  describe('setDTStart', function() {
    it('should handle DateTime', function(done) {
      var event = VObject.event();
      var dateTime = VObject.dateTimeValue();
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
      var event = VObject.event();
      var date = VObject.dateValue();
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
      var event = VObject.event();
      event.getProperty = function(name) {
        assert.equal(name, 'DTSTART');
        return VObject.property('DTSTART', 'value');
      };

      assert.equal(event.getDTStart(), 'value');
    });
  });

  describe('setDTEnd', function() {
    it('should handle DateTime', function(done) {
      var event = VObject.event();
      var dateTime = VObject.dateTimeValue();
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
      var event = VObject.event();
      var date = VObject.dateValue();
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
      var event = VObject.event();
      event.getProperty = function(name) {
        assert.equal(name, 'DTEND');
        return VObject.property('DTEND', 'value');
      };
      assert.equal(event.getDTEnd(), 'value');
    });
  });

  describe('setDescription', function() {
    it('should set DESCRIPTION', function(done) {
      var event = VObject.event();
      event.setProperty = function(property) {
        assert.equal(property.name, 'DESCRIPTION');
        assert.equal(property.value, 'value');
        done();
      };
      event.setDescription('value');
    });

    it('should escape special characters', function() {
      var event = VObject.event();
      event.setDescription('\n;,');
      assert.equal(event.getDescription(), '\\n\\;\\,');
    });
  });

  describe('getDescription', function() {
    it('should get DESCRIPTION', function() {
      var event = VObject.event();
      event.setDescription('value');
      assert.equal(event.getDescription(), 'value');
    });
  });

  describe('setLocation', function() {
    it('should set LOCATION', function(done) {
      var event = VObject.event();
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
      var event = VObject.event();
      event.setLocation('value');
      assert.equal(event.getLocation(), 'value');
    });
  });

  describe('setStatus', function() {
    it('should set STATUS', function(done) {
      var event = VObject.event();
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
      var event = VObject.event();
      event.setStatus('value');
      assert.equal(event.getStatus(), 'VALUE');
    });
  });

  describe('setDTStamp', function() {
    it('should (ONLY) handle DateTime', function() {
      var event = VObject.event();
      var dateTime = VObject.dateTimeValue();
      dateTime.parseDateTime('1986-10-18T13:00:00+02:00');
      event.setDTStamp(dateTime);
      assert.equal(event.getDTStamp(), '19861018T110000Z');
    });
  });

  describe('getDTStamp', function() {
    it('should get DTSTAMP', function() {
      var event = VObject.event();
      var dateTime = VObject.dateTimeValue();
      dateTime.parseDateTime('1986-10-18T13:00:00+02:00');
      event.setDTStamp(dateTime);
      assert.equal(event.getDTStamp(), '19861018T110000Z');
    });
  });

  describe('setSequence', function() {
    it('should set SEQUENCE', function(done) {
      var event = VObject.event();
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
      var event = VObject.event();
      event.setSequence(11);
      assert.equal(event.getSequence(), 11);
    });
  });

  describe('setCreated', function() {
    it('should set CREATED', function() {
      var event = VObject.event();
      var dateTime = VObject.dateTimeValue();
      dateTime.parseDateTime('1986-10-18T13:00:00+02:00');
      event.setCreated(dateTime);
      assert.equal(event.getCreated(), '19861018T110000Z');
    });
  });

  describe('getCreated', function() {
    it('should get CREATED', function() {
      var event = VObject.event();
      var dateTime = VObject.dateTimeValue();
      dateTime.parseDateTime('1986-10-18T13:00:00+02:00');
      event.setCreated(dateTime);
      assert.equal(event.getCreated(), '19861018T110000Z');
    });
  });

  describe('setOrganizer', function() {
    it('should set ORGANIZER', function(done) {
      var event = VObject.event();
      event.setProperty = function(property) {
        assert.equal(property, 'value');
        done();
      };
      event.setOrganizer('value');
    });
  });

  describe('getOrganizer', function() {
    it('should get ORGANIZER', function() {
      var event = VObject.event();
      event.getProperty = function(name) {
        assert.equal(name, 'ORGANIZER');
        return 'value';
      };
      assert.equal(event.getOrganizer(), 'value');
    });
  });

  describe('addAttendee', function() {
    it('should add ATTENDEE', function(done) {
      var event = VObject.event();
      event.pushProperty = function(property) {
        assert.equal(property, 'value');
        done();
      };
      event.addAttendee('value');
    });
  });

  describe('getAttendees', function() {
    it('should get all ATTENDEE', function() {
      var event = VObject.event();
      event.getProperties = function(name) {
        assert.equal(name, 'ATTENDEE');
        return 'value';
      };
      assert.equal(event.getAttendees(), 'value');
    });
  });

  describe('addRRULE', function() {
    it('should add RRULE', function(done) {
      var event = VObject.event();
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
      var event = VObject.event();
      event.getProperties = function(name) {
        assert.equal(name, 'RRULE');
        return 'value';
      };
      assert.equal(event.getRRULEs(), 'value');
    });
  });
});
