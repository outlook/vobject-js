var assert = require('assert');
var vobject = require('../../index');

describe('lib/vobject/dateValue.js', function() {
  describe('initialize', function() {
    it('type should be dateValue', function() {
      var dateValue = vobject.dateValue();
      assert.equal(dateValue.type, 'dateValue');
    });

    it('should parse dateString from constructor', function() {
      var dateValue = vobject.dateValue('2013-08-14');
      assert.equal(dateValue.year, 2013);
      assert.equal(dateValue.month, 8);
      assert.equal(dateValue.day, 14);
    });

    it('should default to undefined', function() {
      var dateValue = vobject.dateValue();
      assert.equal(dateValue.year, undefined);
      assert.equal(dateValue.month, undefined);
      assert.equal(dateValue.day, undefined);
    });
  });

  describe('parseDate', function() {
    it('should parse dateString', function() {
      var dateValue = vobject.dateValue();
      dateValue.parseDate('1986-10-18');
      assert.equal(dateValue.year, 1986);
      assert.equal(dateValue.month, 10);
      assert.equal(dateValue.day, 18);
    });

    it('should return reference to itself', function() {
      var dateValue = vobject.dateValue();
      var that = dateValue.parseDate('1986-10-18');
      assert.equal(that, dateValue);
    });
  });

  describe('toDate', function() {
    it('should generate dateString', function() {
      var dateValue = vobject.dateValue();
      dateValue.year = 2013;
      dateValue.month = 8;
      dateValue.day = 23;
      assert.equal(dateValue.toDate(), '2013-08-23');
    });
  });

  describe('parseICS', function() {
    it('should parse ICS formatted dateString', function() {
      var dateValue = vobject.dateValue();
      dateValue.parseICS('20130823');
      assert.equal(dateValue.year, 2013);
      assert.equal(dateValue.month, 8);
      assert.equal(dateValue.day, 23);
    });

    it('should return reference to itself', function() {
      var dateValue = vobject.dateValue();
      var that = dateValue.parseICS('20130823');
      assert.equal(that, dateValue);
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
