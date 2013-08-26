var assert = require('assert');
var vobject = require('../../index');
var moment = require('moment');

describe('lib/vobject/dateTimeValue.js', function() {
  describe('initialize', function() {
    it('type should be dateTimeValue', function() {
      var dateTimeValue = vobject.dateTimeValue();
      assert.equal(dateTimeValue.type, 'dateTimeValue');
    });

    it('should parse dateTimeString from constructor', function() {
      var dateTimeValue = vobject.dateTimeValue('2013-08-13T17:33:40-04:00');
      assert.equal(dateTimeValue.dateTime.format('YYYY-MM-DD HH:mm:ss Z'), '2013-08-13 21:33:40 +00:00');
    });

    it('should default to now', function() {
      var dateTimeValue = vobject.dateTimeValue();
      assert.ok(moment().utc().unix() - dateTimeValue.dateTime.unix() < 5);
    });
  });

  describe('parseDateTime', function() {
    it('should parse date time string', function() {
      var dateTimeValue = vobject.dateTimeValue();
      dateTimeValue.parseDateTime('2013-08-13T17:33:40-04:00');
      assert.equal(dateTimeValue.dateTime.format('YYYY-MM-DD HH:mm:ss Z'), '2013-08-13 21:33:40 +00:00');
    });
  });

  describe('toDateTime', function() {
    it('should format dateTimeString in UTC', function() {
      var dateTimeValue = vobject.dateTimeValue();
      dateTimeValue.dateTime = moment('2013-08-13T17:33:40-04:00', 'YYYY-MM-DDTHH:mm:ssZ');
      assert.equal(dateTimeValue.toDateTime(), '2013-08-13T21:33:40+00:00');
    });
  });

  describe('parseTimestamp', function() {
    it('should parse timestamp string', function() {
      var dateTimeValue = vobject.dateTimeValue();
      dateTimeValue.parseTimestamp(1376605015);
      assert.equal(dateTimeValue.dateTime.format('YYYY-MM-DD HH:mm:ss Z'), '2013-08-15 22:16:55 +00:00');
    });
  });

  describe('setTZID', function() {
    it('should save tzid string', function() {
      var dateTimeValue = vobject.dateTimeValue();
      dateTimeValue.setTZID('someTZID');
      assert.equal(dateTimeValue.tzid, 'someTZID');
    });
  });

  describe('getTZID', function() {
    it('should get tzid string', function() {
      var dateTimeValue = vobject.dateTimeValue();
      dateTimeValue.tzid = 'someTZID';
      assert.equal(dateTimeValue.getTZID(), 'someTZID');
    });
  });

  describe('parseICS', function() {
    it('should parse ICS with absolute time', function() {
      var dateTimeValue = vobject.dateTimeValue();
      dateTimeValue.parseICS('20130813T213340Z');
      assert.equal(dateTimeValue.dateTime.format('YYYY-MM-DD HH:mm:ss Z'), '2013-08-13 21:33:40 +00:00');
    });

    it('should parse ICS with floating time', function() {
      var dateTimeValue = vobject.dateTimeValue();
      dateTimeValue.parseICS('20130813T173340', 'America/New_York');
      assert.equal(dateTimeValue.dateTime.format('YYYY-MM-DD HH:mm:ss Z'), '2013-08-13 21:33:40 +00:00');
    });
  });

  describe('toICS', function() {
    it('should print ICS format', function() {
      var dateTimeValue = vobject.dateTimeValue();
      dateTimeValue.dateTime = moment('2013-08-13T17:33:40-04:00', 'YYYY-MM-DDTHH:mm:ssZ');
      assert.equal(dateTimeValue.toICS(), '20130813T213340Z');
    });

    it('should print floating ICS format when TZID is specified', function() {
      var dateTimeValue = vobject.dateTimeValue('2013-08-13T17:33:40-04:00');
      dateTimeValue.setTZID('Europe/Paris');
      assert.equal(dateTimeValue.toICS(), '20130813T233340');
    });

    it('should include workaround for Etc/GMT timezone', function() {
      var dateTimeValue = vobject.dateTimeValue('2013-08-13T17:33:40-04:00');
      dateTimeValue.setTZID('Etc/GMT');
      assert.equal(dateTimeValue.toICS(), '20130813T213340');
    });
  });
});
