var assert = require('assert');

var parse;
beforeEach(function() {
  delete require.cache[require.resolve('../lib/parse')];
  parse = require('../lib/parse');
});

describe('lib/parse.js', function() {
  describe('splitICS', function() {
    it('should expand lines with trailing CRLF', function() {
      var ics = 'FIRST\r\nSECOND\r\nTHIRD\r\n';
      assert.deepEqual(parse.splitICS(ics), ['FIRST', 'SECOND', 'THIRD']);
    });

    it('should fold lines with leading space', function() {
      var ics = 'FIRST\r\nSECOND1\r\n SECOND2\r\nTHIRD\r\n';
      assert.deepEqual(parse.splitICS(ics), ['FIRST', 'SECOND1SECOND2', 'THIRD']);
    });

    it('should fold lines with leading tab', function() {
      var ics = 'FIRST\r\nSECOND1\r\n\tSECOND2\r\nTHIRD\r\n';
      assert.deepEqual(parse.splitICS(ics), ['FIRST', 'SECOND1SECOND2', 'THIRD']);
    });
  });
});
