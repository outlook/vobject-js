var assert = require('assert');
var VObject = require('../index');

describe('initialize', function() {
  it('should set name to ATTENDEE', function() {
    var attendee = VObject.attendee();
    assert.equal(attendee.name, 'ATTENDEE');
  });
});

describe('setCUType', function() {
  it('should set CUTYPE', function(done) {
    var attendee = VObject.attendee();
    attendee.setParameter = function(name, value) {
      assert.equal(name, 'CUTYPE');
      assert.equal(value, 'value');
      done();
    };
    attendee.setCUType('value');
  });
});

describe('getCUType', function() {
  it('should get CUTYPE', function() {
    var attendee = VObject.attendee();
    attendee.setCUType('value');
    assert.equal(attendee.getCUType(), 'value');
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
      assert.equal(value, 'value');
      done();
    };
    attendee.setPartStat('value');
  });
});

describe('getPartStat', function() {
  it('should get PARTSTAT', function() {
    var attendee = VObject.attendee();
    attendee.setPartStat('value');
    assert.equal(attendee.getPartStat(), 'value');
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

describe('setCN', function() {
  it('should set CN', function(done) {
    var attendee = VObject.attendee();
    attendee.setParameter = function(name, value) {
      assert.equal(name, 'CN');
      assert.equal(value, 'value');
      done();
    };
    attendee.setCN('value');
  });
});

describe('getCN', function() {
  it('should get CN', function() {
    var attendee = VObject.attendee();
    attendee.setCN('value');
    assert.equal(attendee.getCN(), 'value');
  });
});

describe('setMail', function() {
  it('should set VALUE to mailto:MAIL', function() {
    var attendee = VObject.attendee();
    attendee.setMail('user@domain.com');
    assert.equal(attendee.getValue(), 'mailto:user@domain.com');
  });
});

describe('getMail', function() {
  it('should parse VALUE', function() {
    var attendee = VObject.attendee();
    attendee.setValue('mailto:user@domain.com');
    assert.equal(attendee.getMail(), 'user@domain.com');
  });
});