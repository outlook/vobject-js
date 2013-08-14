var assert = require('assert');
var VObject = require('../../index');

describe('lib/vobject/attendee.js', function() {
  describe('initialize', function() {
    it('should set name to ATTENDEE', function() {
      var attendee = VObject.attendee();
      assert.equal(attendee.name, 'ATTENDEE');
    });
  });

  describe('setRole', function() {
    it('should set ROLE', function(done) {
      var attendee = VObject.attendee();
      attendee.setParameter = function(name, value) {
        assert.equal(name, 'ROLE');
        assert.equal(value, 'value');
        done();
      };
      attendee.setRole('value');
    });
  });

  describe('getRole', function() {
    it('should get ROLE', function() {
      var attendee = VObject.attendee();
      attendee.setRole('value');
      assert.equal(attendee.getRole(), 'value');
    });
  });

  describe('setPartStat', function() {
    it('should set PARTSTAT', function(done) {
      var attendee = VObject.attendee();
      attendee.setParameter = function(name, value) {
        assert.equal(name, 'PARTSTAT');
        assert.equal(value, 'VALUE');
        done();
      };
      attendee.setPartStat('value');
    });
  });

  describe('getPartStat', function() {
    it('should get PARTSTAT', function() {
      var attendee = VObject.attendee();
      attendee.setPartStat('value');
      assert.equal(attendee.getPartStat(), 'VALUE');
    });
  });

  describe('setRSVP', function() {
    it('should set RSVP', function(done) {
      var attendee = VObject.attendee();
      attendee.setParameter = function(name, value) {
        assert.equal(name, 'RSVP');
        assert.equal(value, 'value');
        done();
      };
      attendee.setRSVP('value');
    });
  });

  describe('getRSVP', function() {
    it('should get RSVP', function() {
      var attendee = VObject.attendee();
      attendee.setRSVP('value');
      assert.equal(attendee.getRSVP(), 'value');
    });
  });
});
