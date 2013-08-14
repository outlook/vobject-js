var assert = require('assert');
var VObject = require('../../index');
var moment = require('moment');

describe('lib/date_time.js', function() {
  describe('isDate', function() {
    it('should return false', function() {
      var dateTime = VObject.dateTime();
      assert.equal(dateTime.isDate(), false);
    });
  });

  describe('isDateTime', function() {
    it('should return true', function() {
      var dateTime = VObject.dateTime();
      assert.equal(dateTime.isDateTime(), true);
    });
  });

  describe('parseDateTime', function() {
    it('should parse date time string', function() {
      var dateTime = VObject.dateTime();
      dateTime.parseDateTime('2013-08-13T17:33:40-04:00');
      assert.equal(dateTime.dateTime.format('YYYY-MM-DD HH:mm:ss Z'), '2013-08-13 21:33:40 +00:00');
    });
  });

  describe('toICS', function() {
    it('should print ICS format', function() {
      var dateTime = VObject.dateTime();
      dateTime.dateTime = moment('2013-08-13T17:33:40-04:00', 'YYYY-MM-DDTHH:mm:ssZ');
      assert.equal(dateTime.toICS(), '20130813T213340Z');
    });
  });
});
