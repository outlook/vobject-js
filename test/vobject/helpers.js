var assert = require('assert');
var helpers = require('../../lib/vobject/helpers');

describe('lib/vobject/helpers.js', function() {
  describe('escape', function() {
    it('should escape newline', function() {
      var str = 'this\nthat';
      assert.equal(helpers.escape(str), 'this\\nthat');
    });

    it('should escape semicolon', function() {
      var str = 'this;that';
      assert.equal(helpers.escape(str), 'this\\;that');
    });

    it('should escape comma', function() {
      var str = 'this,that';
      assert.equal(helpers.escape(str), 'this\\,that');
    });

    it('should escape double quote', function() {
      var str = 'this"that';
      assert.equal(helpers.escape(str), 'this\\"that');
    });
  });

  describe('unescape', function() {
    it('should unescape newline', function() {
      var str = 'this\\nthat';
      assert.equal(helpers.unescape(str), 'this\nthat');
    });

    it('should unescape semicolon', function() {
      var str = 'this\\;that';
      assert.equal(helpers.unescape(str), 'this;that');
    });

    it('should unescape comma', function() {
      var str = 'this\\,that';
      assert.equal(helpers.unescape(str), 'this,that');
    });

    it('should unescape double quote', function() {
      var str = 'this\\"that';
      assert.equal(helpers.unescape(str), 'this"that');
    });
  });
});
