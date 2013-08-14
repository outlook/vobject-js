var assert = require('assert');
var VObject = require('../../index');

describe('lib/vobject/organizer.js', function() {
  describe('initialize', function() {
    it('should set name to ORGANIZER', function() {
      var organizer = VObject.organizer();
      assert.equal(organizer.name, 'ORGANIZER');
    });
  });
});
