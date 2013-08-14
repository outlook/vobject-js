var assert = require('assert');
var VObject = require('../../index');

describe('lib/vobject/dateValue.js', function() {
  describe('isDate', function() {
    it('should return true', function() {
      var date = VObject.dateValue();
      assert.equal(date.isDate(), true);
    });
  });

  describe('isDateTime', function() {
    it('should return false', function() {
      var date = VObject.dateValue();
      assert.equal(date.isDateTime(), false);
    });
  });

  describe('parseDate', function() {
    it('should parse 1986-10-18', function() {
      var date = VObject.dateValue();
      date.parseDate('1986-10-18');
      assert.equal(date.year, 1986);
      assert.equal(date.month, 10);
      assert.equal(date.day, 18);
    });
  });

  describe('toICS', function() {
    it('should format for ICS', function() {
      var date = VObject.dateValue();
      date.setDate(1986, 10, 18);
      assert.equal(date.toICS(), '19861018');
    });
  });
});
