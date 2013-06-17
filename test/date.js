var assert = require('assert');
var VObject = require('../index');

describe('initialize', function() {
  it('should .isDate to true', function() {
    var date = VObject.date();
    assert.equal(date.isDate, true);
  });
});

describe('parse', function() {
  it('should parse 1986-10-18', function() {
    var date = VObject.date();
    date.parse('1986-10-18');
    assert.equal(date.year, 1986);
    assert.equal(date.month, 10);
    assert.equal(date.day, 18);
  });
});

describe('toICS', function() {
  it('should format for ICS', function() {
    var date = VObject.date();
    date.set(1986, 10, 18);
    assert.equal(date.toICS(), '19861018');
  });
});