var assert = require('assert');
var tzlinks = require('../lib/tz-links');

describe('lib/tz-links.js', function() {
  it('should return tzid if no link found', function() {
    assert.equal(tzlinks('unknown'), 'unknown');
  });

  it('should return linked tzid', function() {
    assert.equal(tzlinks('Japan'), 'Asia/Tokyo');
  });
});
