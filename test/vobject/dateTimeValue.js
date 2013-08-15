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

  describe('toICS', function() {
    it('should print ICS format', function() {
      var dateTimeValue = vobject.dateTimeValue();
      dateTimeValue.dateTime = moment('2013-08-13T17:33:40-04:00', 'YYYY-MM-DDTHH:mm:ssZ');
      assert.equal(dateTimeValue.toICS(), '20130813T213340Z');
    });
  });
});
