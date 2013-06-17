var assert = require('assert');
var VObject = require('../index');

describe('initialize', function() {
  it('should .isDate to false', function() {
    var dateTime = VObject.dateTime();
    assert.equal(dateTime.isDate, false);
  });
});

describe('parseISO8601', function() {
  it('should parse 1986-10-18T13:10:05+02:00', function() {
    var dateTime = VObject.dateTime();
    dateTime.parseISO8601('1986-10-18T13:10:05+02:00');
    assert.equal(dateTime.year, 1986);
    assert.equal(dateTime.month, 10);
    assert.equal(dateTime.day, 18);
    assert.equal(dateTime.hours, 13);
    assert.equal(dateTime.minutes, 10);
    assert.equal(dateTime.seconds, 05);
    assert.equal(dateTime.offset, 2 * 60);
  });
});

describe('setOffset', function() {
  it('should accept +02:00', function() {
    var dateTime = VObject.dateTime();
    dateTime.parseOffset('+02:00');
    assert.equal(dateTime.offset, 120);
  });

  it('should accept -12:00', function() {
    var dateTime = VObject.dateTime();
    dateTime.parseOffset('-12:00');
    assert.equal(dateTime.offset, -12 * 60);
  });
});

describe('toISO8601', function() {
  it('should format for ISO8601', function() {
    var dateTime = VObject.dateTime();
    dateTime.set(1986, 2, 8, 3, 9, 5, 120);
    assert.equal(dateTime.toISO8601(), '1986-02-08T03:09:05+02:00');
  });
});

describe('offsetToISO8601', function() {
  it('should handle +POSITIVE values', function() {
    var dateTime = VObject.dateTime();
    dateTime.setOffsetInMinutes(+189);
    assert.equal(dateTime.offsetToISO8601(), '+03:09');
  });

  it('should handle +10 values', function() {
    var dateTime = VObject.dateTime();
    dateTime.setOffsetInMinutes(+10);
    assert.equal(dateTime.offsetToISO8601(), '+00:10');
  });

  it('should handle -NEGATIVE values', function() {
    var dateTime = VObject.dateTime();
    dateTime.setOffsetInMinutes(-189);
    assert.equal(dateTime.offsetToISO8601(), '-03:09');
  });
});

describe('toICS', function() {
  it('should format for ICS (in UTC)', function() {
    var dateTime = VObject.dateTime();
    dateTime.set(1986, 9, 8, 1, 9, 5, 120);
    assert.equal(dateTime.toICS(), '19860907T230905Z');
  });
});