'use strict';

var assert = require('assert');
var vobject = require('../../lib/vobject');

describe('lib/vobject/timezone.js', function() {
  describe('initialize', function() {
    it('should be VTIMEZONE component', function() {
      var timezone = vobject.timezone();
      assert.equal(timezone.name, 'VTIMEZONE');
    });

    it('should save reference to tzid', function() {
      var timezone = vobject.timezone('timezone');
      assert.equal(timezone.tzid, 'timezone');
    });
  });

  describe('toICSLines', function() {
    it('should load zoneinfo for constructed tzid', function() {
      var timezone = vobject.timezone('Asia/Colombo');
      assert.equal(timezone.toICSLines()[1], 'TZID:Asia/Colombo');
    });

    it('should default to nothing for invalid tzid', function() {
      var timezone = vobject.timezone('garbage');
      assert.equal(timezone.toICSLines(), undefined);
    });
  });
});
