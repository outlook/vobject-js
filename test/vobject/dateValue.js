var assert = require('assert');
var vobject = require('../../index');
var moment = require('moment');

describe('lib/vobject/dateValue.js', function() {
  describe('initialize', function() {
    it('type should be dateValue', function() {
      var dateValue = vobject.dateValue();
      assert.equal(dateValue.type, 'dateValue');
    });

    it('should parse dateTimeString from constructor', function() {
      var dateValue = vobject.dateValue('2013-08-14');
      assert.equal(dateValue.year, 2013);
      assert.equal(dateValue.month, 8);
      assert.equal(dateValue.day, 14);
    });

    it('should default to now', function() {
      var now = moment();
      var dateValue = vobject.dateValue();
      assert.equal(dateValue.year, now.year());
      assert.equal(dateValue.month, now.month());
      assert.equal(dateValue.day, now.day());
    });
  });

  describe('parseDate', function() {
    it('should parse 1986-10-18', function() {
      var dateValue = vobject.dateValue();
      dateValue.parseDate('1986-10-18');
      assert.equal(dateValue.year, 1986);
      assert.equal(dateValue.month, 10);
      assert.equal(dateValue.day, 18);
    });
  });

  describe('toICS', function() {
    it('should format for ICS', function() {
      var dateValue = vobject.dateValue();
      dateValue.parseDate('1986-10-18');
      assert.equal(dateValue.toICS(), '19861018');
    });

    it('should zero pad dates', function() {
      var dateValue = vobject.dateValue();
      dateValue.parseDate('2013-08-01');
      assert.equal(dateValue.toICS(), '20130801');
    });
  });
});
