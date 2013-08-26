var assert = require('assert');
var vobject = require('../../index');

describe('lib/vobject/attendee.js', function() {
  describe('initialize', function() {
    it('should set name to ATTENDEE', function() {
      var attendee = vobject.attendee();
      assert.equal(attendee.name, 'ATTENDEE');
    });

    it('should set isMultiProperty to true', function() {
      var attendee = vobject.attendee();
      assert.equal(attendee.isMultiProperty, true);
    });
  });

  describe('setCUTYPE', function() {
    it('should set CUTYPE parameter', function() {
      var attendee = vobject.attendee();
      attendee.setCUTYPE('value');
      assert.equal(attendee.parameters['CUTYPE'], 'VALUE');
    });
  });

  describe('getCUTYPE', function() {
    it('should get CUTYPE parameter', function() {
      var attendee = vobject.attendee();
      attendee.parameters['CUTYPE'] = 'VALUE';
      assert.equal(attendee.getCUTYPE(), 'VALUE');
    });
  });

  describe('setRole', function() {
    it('should set ROLE', function() {
      var attendee = vobject.attendee();
      attendee.setRole('value');
      assert.equal(attendee.parameters['ROLE'], 'VALUE');
    });
  });

  describe('getRole', function() {
    it('should get ROLE', function() {
      var attendee = vobject.attendee();
      attendee.parameters['ROLE'] = 'VALUE';
      assert.equal(attendee.getRole(), 'VALUE');
    });
  });

  describe('setPartStat', function() {
    it('should set PARTSTAT', function() {
      var attendee = vobject.attendee();
      attendee.setPartStat('value');
      assert.equal(attendee.parameters['PARTSTAT'], 'VALUE');
    });
  });

  describe('getPartStat', function() {
    it('should get PARTSTAT', function() {
      var attendee = vobject.attendee();
      attendee.parameters['PARTSTAT'] = 'VALUE';
      assert.equal(attendee.getPartStat(), 'VALUE');
    });
  });

  describe('setRSVP', function() {
    it('should set RSVP', function() {
      var attendee = vobject.attendee();
      attendee.setRSVP('value');
      assert.equal(attendee.parameters['RSVP'], 'VALUE');
    });
  });

  describe('getRSVP', function() {
    it('should get RSVP', function() {
      var attendee = vobject.attendee();
      attendee.parameters['RSVP'] = 'VALUE';
      assert.equal(attendee.getRSVP(), 'VALUE');
    });
  });
});
