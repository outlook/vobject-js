var assert = require('assert');
var VObject = require('../index');

describe('lib/date.js', function() {
  describe('isDate', function() {
    it('should return true', function() {
      var date = VObject.date();
      assert.equal(date.isDate(), true);
    });
  });

  describe('isDateTime', function() {
    it('should return false', function() {
      var date = VObject.date();
      assert.equal(date.isDateTime(), false);
    });
  });

  describe('setDate', function() {
    it('should set year, month, day', function() {
      var date = VObject.date();
      date.setDate(2013, 12, 13);
      assert.equal(date.year, 2013);
      assert.equal(date.month, 12);
      assert.equal(date.day, 13);
    });
  });

  describe('parseDate', function() {
    it('should parse 1986-10-18', function() {
      var date = VObject.date();
      date.parseDate('1986-10-18');
      assert.equal(date.year, 1986);
      assert.equal(date.month, 10);
      assert.equal(date.day, 18);
    });
  });

  describe('toICS', function() {
    it('should format for ICS', function() {
      var date = VObject.date();
      date.setDate(1986, 10, 18);
      assert.equal(date.toICS(), '19861018');
    });
  });
});
