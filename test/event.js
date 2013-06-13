var assert = require('assert');
var VObject = require('../index');

describe('initialize', function() {
  it('should set name to VEVENT', function() {
    var event = VObject.event();
    assert.equal(event.name, 'VEVENT');
  });

  it('should set SEQUENCE to 0', function() {
    var event = VObject.event();
    assert.equal(event.getSequence(), '0');
  });
});

describe('setUID', function() {
  it('should set SUMMARY', function(done) {
    var event = VObject.event();
    event.setProperty = function(name, value) {
      assert.equal(name, 'UID');
      assert.equal(value, 'value');
      done();
    };
    event.setUID('value');
  });
});

describe('getUID', function() {
  it('should get UID', function() {
    var event = VObject.event();
    event.setUID('value');
    assert.equal(event.getUID(), 'value');
  });
});

describe('setSummary', function() {
  it('should set SUMMARY', function(done) {
    var event = VObject.event();
    event.setProperty = function(name, value) {
      assert.equal(name, 'SUMMARY');
      assert.equal(value, 'value');
      done();
    };
    event.setSummary('value');
  });
});

describe('getSummary', function() {
  it('should get SUMMARY', function() {
    var event = VObject.event();
    event.setSummary('value');
    assert.equal(event.getPropertyValue('SUMMARY'), 'value');
  });
});

describe('setDescription', function() {
  it('should set DESCRIPTION', function(done) {
    var event = VObject.event();
    event.setProperty = function(name, value) {
      assert.equal(name, 'DESCRIPTION');
      assert.equal(value, 'value');
      done();
    };
    event.setDescription('value');
  });
});

describe('getDescription', function() {
  it('should get DESCRIPTION', function() {
    var event = VObject.event();
    event.setDescription('value');
    assert.equal(event.getDescription(), 'value');
  });
});

describe('setLocation', function() {
  it('should set LOCATION', function(done) {
    var event = VObject.event();
    event.setProperty = function(name, value) {
      assert.equal(name, 'LOCATION');
      assert.equal(value, 'value');
      done();
    };
    event.setLocation('value');
  });
});

describe('getLocation', function() {
  it('should get LOCATION', function() {
    var event = VObject.event();
    event.setLocation('value');
    assert.equal(event.getLocation(), 'value');
  });
});

describe('setStatus', function() {
  it('should set STATUS', function(done) {
    var event = VObject.event();
    event.setProperty = function(name, value) {
      assert.equal(name, 'STATUS');
      assert.equal(value, 'value');
      done();
    };
    event.setStatus('value');
  });
});

describe('getStatus', function() {
  it('should get STATUS', function() {
    var event = VObject.event();
    event.setStatus('value');
    assert.equal(event.getStatus(), 'value');
  });
});

describe('setDTStamp', function() {
  it('should set DTSTAMP', function(done) {
    var event = VObject.event();
    event.setProperty = function(name, value) {
      assert.equal(name, 'DTSTAMP');
      assert.equal(value, 'value');
      done();
    };
    event.setDTStamp('value');
  });
});

describe('getDTStamp', function() {
  it('should get DTSTAMP', function() {
    var event = VObject.event();
    event.setDTStamp('value');
    assert.equal(event.getDTStamp(), 'value');
  });
});

describe('setSequence', function() {
  it('should set SEQUENCE', function(done) {
    var event = VObject.event();
    event.setProperty = function(name, value) {
      assert.equal(name, 'SEQUENCE');
      assert.equal(value, 'value');
      done();
    };
    event.setSequence('value');
  });
});

describe('getSequence', function() {
  it('should get SEQUENCE', function() {
    var event = VObject.event();
    event.setSequence('value');
    assert.equal(event.getSequence(), 'value');
  });
});

describe('setCreated', function() {
  it('should set CREATED', function(done) {
    var event = VObject.event();
    event.setProperty = function(name, value) {
      assert.equal(name, 'CREATED');
      assert.equal(value, 'value');
      done();
    };
    event.setCreated('value');
  });
});

describe('getCreated', function() {
  it('should get CREATED', function() {
    var event = VObject.event();
    event.setCreated('value');
    assert.equal(event.getCreated(), 'value');
  });
});