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
    it('should set UID', function() {
      event.setUID('value');
      assert.equal(event.properties['UID'][0].value, 'value');
    });

    it('should return reference to itself', function() {
      var that = event.setUID('value');
      assert.equal(that, event);
    });
  });

  describe('getUID', function() {
    it('should return undefined by default', function() {
      assert.equal(event.getUID(), undefined);
    });

    it('should get UID', function() {
      event.properties['UID'] = [vobject.property('UID', 'value')];
      assert.equal(event.getUID(), 'value');
    });
  });

  describe('setSummary', function() {
    it('should set SUMMARY', function() {
      event.setSummary('value');
      assert.equal(event.properties['SUMMARY'][0].value, 'value');
    });

    it('should escape special characters', function() {
      event.setSummary('\n;,');
      assert.equal(event.properties['SUMMARY'][0].value, '\\n\\;\\,');
    });

    it('should return reference to itself', function() {
      var that = event.setSummary('value');
      assert.equal(that, event);
    });
  });

  describe('getSummary', function() {
    it('should return undefined by default', function() {
      assert.equal(event.getSummary(), undefined);
    });

    it('should get SUMMARY', function() {
      event.properties['SUMMARY'] = [vobject.property('SUMMARY', 'value')];
      assert.equal(event.getSummary(), 'value');
    });

    it('should unescape SUMMARY', function() {
      event.properties['SUMMARY'] = [vobject.property('SUMMARY', '\\n\\;\\,')];
      assert.equal(event.getSummary(), '\n;,');
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

    it('should return reference to itself', function() {
      var that = event.setDTStart(vobject.dateValue('1986-10-18'));
      assert.equal(that, event);
    });
  });

  describe('getDTStart', function() {
    it('should return undefined by default', function() {
      assert.equal(event.getDTStart(), undefined);
    });

    it('should get DTSTART dateValue', function() {
      var property = vobject.property('DTSTART', '20130826');
      property.setParameter('VALUE', 'DATE');
      event.properties['DTSTART'] = [property];
      assert.equal(event.getDTStart().type, 'dateValue');
      assert.equal(event.getDTStart().toICS(), '20130826');
    });

    it('should get DTSTART dateTimeValue in absolute time', function() {
      event.properties['DTSTART'] = [vobject.property('DTSTART', '20130813T173000Z')];
      assert.equal(event.getDTStart().type, 'dateTimeValue');
      assert.equal(event.getDTStart().toDateTime(), '2013-08-13T17:30:00+00:00');
    });

    it('should get DTSTART dateTimeValue in floating time', function() {
      var property = vobject.property('DTSTART', '20130813T173000');
      property.setParameter('TZID', 'America/New_York');
      event.properties['DTSTART'] = [property];
      assert.equal(event.getDTStart().type, 'dateTimeValue');
      assert.equal(event.getDTStart().getTZID(), 'America/New_York');
      assert.equal(event.getDTStart().toDateTime(), '2013-08-13T21:30:00+00:00');
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

    it('should return reference to itself', function() {
      var that = event.setDTEnd(vobject.dateValue('1986-10-18'));
      assert.equal(that, event);
    });
  });

  describe('getDTEnd', function() {
    it('should be undefined by default', function() {
      assert.equal(event.getDTEnd(), undefined);
    });

    it('should get DTEND dateValue', function() {
      var property = vobject.property('DTEND', '20130826');
      property.setParameter('VALUE', 'DATE');
      event.properties['DTEND'] = [property];
      assert.equal(event.getDTEnd().type, 'dateValue');
      assert.equal(event.getDTEnd().toICS(), '20130826');
    });

    it('should get DTEND dateTimeValue in absolute time', function() {
      event.properties['DTEND'] = [vobject.property('DTEND', '20130813T173000Z')];
      assert.equal(event.getDTEnd().type, 'dateTimeValue');
      assert.equal(event.getDTEnd().toDateTime(), '2013-08-13T17:30:00+00:00');
    });

    it('should get DTEND dateTimeValue in floating time', function() {
      var property = vobject.property('DTEND', '20130813T173000');
      property.setParameter('TZID', 'America/New_York');
      event.properties['DTEND'] = [property];
      assert.equal(event.getDTEnd().type, 'dateTimeValue');
      assert.equal(event.getDTEnd().getTZID(), 'America/New_York');
      assert.equal(event.getDTEnd().toDateTime(), '2013-08-13T21:30:00+00:00');
    });
  });

  describe('setDescription', function() {
    it('should set DESCRIPTION', function() {
      event.setDescription('value');
      assert.equal(event.properties['DESCRIPTION'][0].value, 'value');
    });

    it('should escape special characters', function() {
      event.setDescription('\n;,');
      assert.equal(event.properties['DESCRIPTION'][0].value, '\\n\\;\\,');
    });

    it('should return reference to itself', function() {
      var that = event.setDescription('value');
      assert.equal(that, event);
    });
  });

  describe('getDescription', function() {
    it('should be undefined by default', function() {
      assert.equal(event.getDescription(), undefined);
    });

    it('should get DESCRIPTION', function() {
      event.properties['DESCRIPTION'] = [vobject.property('DESCRIPTION', 'value')];
      assert.equal(event.getDescription(), 'value');
    });

    it('should unescape DESCRIPTION', function() {
      event.properties['DESCRIPTION'] = [vobject.property('DESCRIPTION', '\\n\\;\\,')];
      assert.equal(event.getDescription(), '\n;,');
    });
  });

  describe('setLocation', function() {
    it('should set LOCATION', function() {
      event.setLocation('value');
      assert.equal(event.properties['LOCATION'][0].value, 'value');
    });

    it('should escape special characters', function() {
      event.setLocation('\n;,');
      assert.equal(event.properties['LOCATION'][0].value, '\\n\\;\\,');
    });

    it('should return reference to itself', function() {
      var that = event.setLocation('value');
      assert.equal(that, event);
    });
  });

  describe('getLocation', function() {
    it('should be undefined by default', function() {
      assert.equal(event.getLocation(), undefined);
    });

    it('should get LOCATION', function() {
      event.properties['LOCATION'] = [vobject.property('LOCATION', 'value')];
      assert.equal(event.getLocation(), 'value');
    });

    it('should unescape LOCATION', function() {
      event.properties['LOCATION'] = [vobject.property('LOCATION', '\\n\\;\\,')];
      assert.equal(event.getLocation(), '\n;,');
    });
  });

  describe('setStatus', function() {
    it('should set STATUS', function() {
      event.setStatus('value');
      assert.equal(event.properties['STATUS'][0].value, 'VALUE');
    });

    it('should return reference to itself', function() {
      var that = event.setStatus('value');
      assert.equal(that, event);
    });
  });

  describe('getStatus', function() {
    it('should be undefined by default', function() {
      assert.equal(event.getStatus(), undefined);
    });

    it('should get STATUS', function() {
      event.properties['STATUS'] = [vobject.property('STATUS', 'VALUE')];
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

    it('should return reference to itself', function() {
      var dateTime = vobject.dateTimeValue();
      dateTime.parseDateTime('1986-10-18T13:00:00+02:00');
      var that = event.setDTStamp(dateTime);
      assert.equal(that, event);
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

    it('should return reference to itself', function() {
      var dateTimeValue = vobject.dateTimeValue('1986-10-18T13:00:00+02:00');
      var that = event.setLastModified(dateTimeValue);
      assert.equal(that, event);
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

    it('should return reference to itself', function() {
      var that = event.setSequence('value');
      assert.equal(that, event);
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

    it('should return reference to itself', function() {
      var dateTime = vobject.dateTimeValue();
      dateTime.parseDateTime('1986-10-18T13:00:00+02:00');
      var that = event.setCreated(dateTime);
      assert.equal(that, event);
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

    it('should return reference to itself', function() {
      var organizer = vobject.organizer();
      var that = event.setOrganizer(organizer);
      assert.equal(that, event);
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

    it('should return reference to itself', function() {
      var attendee = vobject.attendee();
      var that = event.addAttendee(attendee);
      assert.equal(that, event);
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
    it('should add RRULE ics', function(done) {
      event.pushProperty = function(property) {
        assert.equal(property.name, 'RRULE');
        assert.equal(property.value, 'FREQ=DAILY');
        done();
      };
      event.addRRULE('RRULE:FREQ=DAILY');
    });

    it('should return reference to itself', function() {
      var that = event.addRRULE('RRULE:FREQ=DAILY');
      assert.equal(that, event);
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
    it('should add EXDATE ics', function(done) {
      event.pushProperty = function(property) {
        assert.equal(property.name, 'EXDATE');
        assert.equal(property.getParameter('VALUE'), 'DATE');
        assert.equal(property.value, '20140206');
        done();
      };
      event.addEXDATE('EXDATE;VALUE=DATE:20140206');
    });

    it('should return reference to itself', function() {
      var that = event.addEXDATE('EXDATE;VALUE=DATE:20140206');
      assert.equal(that, event);
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

    it('should return reference to itself', function() {
      var dateTimeValue = vobject.dateTimeValue('2013-08-13 21:33:40 -04:00');
      dateTimeValue.setTZID('America/New_York');

      var that = event.setRecurrenceID(dateTimeValue);
      assert.equal(that, event);
    });
  });

  describe('getRecurrenceID', function() {
    it('should be undefined by default', function() {
      assert.equal(event.getRecurrenceID(), undefined);
    });

    it('should get RECURRENCE-ID dateValue', function() {
      var property = vobject.property('RECURRENCE-ID', '20130826');
      property.setParameter('VALUE', 'DATE');
      event.properties['RECURRENCE-ID'] = [property];
      assert.equal(event.getRecurrenceID().type, 'dateValue');
      assert.equal(event.getRecurrenceID().toICS(), '20130826');
    });

    it('should get RECURRENCE-ID dateTimeValue in absolute time', function() {
      event.properties['RECURRENCE-ID'] = [vobject.property('RECURRENCE-ID', '20130813T173000Z')];
      assert.equal(event.getRecurrenceID().type, 'dateTimeValue');
      assert.equal(event.getRecurrenceID().toDateTime(), '2013-08-13T17:30:00+00:00');
    });

    it('should get RECURRENCE-ID dateTimeValue in floating time', function() {
      var property = vobject.property('RECURRENCE-ID', '20130813T173000');
      property.setParameter('TZID', 'America/New_York');
      event.properties['RECURRENCE-ID'] = [property];
      assert.equal(event.getRecurrenceID().type, 'dateTimeValue');
      assert.equal(event.getRecurrenceID().getTZID(), 'America/New_York');
      assert.equal(event.getRecurrenceID().toDateTime(), '2013-08-13T21:30:00+00:00');
    });
  });

  describe('setTransparency', function() {
    it('should set TRANSP property', function() {
      event.setTransparency('transparent');
      assert.equal(event.properties['TRANSP'][0].value, 'TRANSPARENT');
    });

    it('should return reference to itself', function() {
      var that = event.setTransparency('transparent');
      assert.equal(that, event);
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
