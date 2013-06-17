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

describe('setDTStart', function() {
  it('should handle DateTime', function() {
    var event = VObject.event();
    var dateTime = VObject.dateTime();
    dateTime.parseISO8601('1986-10-18T13:00:00+02:00');
    event.setDTStart(dateTime);
    assert.equal(event.getDTStart(), '19861018T110000Z');
  });

  it('should handle Date', function() {
    var event = VObject.event();
    var dateTime = VObject.date();
    dateTime.parse('1986-10-18');
    event.setDTStart(dateTime);
    assert.equal(event.getDTStart(), 'VALUE=DATE:19861018');
  });
});

describe('getDTStart', function() {
  it('should get DTEND', function(done) {
    var event = VObject.event();
    event.getPropertyValue = function(name) {
      assert.equal(name, 'DTSTART');
      done();
    };
    event.getDTStart();
  });
});

describe('setDTEnd', function() {
  it('should handle DateTime', function() {
    var event = VObject.event();
    var dateTime = VObject.dateTime();
    dateTime.parseISO8601('1986-10-18T13:00:00+02:00');
    event.setDTEnd(dateTime);
    assert.equal(event.getDTEnd(), '19861018T110000Z');
  });

  it('should handle Date', function() {
    var event = VObject.event();
    var dateTime = VObject.date();
    dateTime.parse('1986-10-18');
    event.setDTEnd(dateTime);
    assert.equal(event.getDTEnd(), 'VALUE=DATE:19861018');
  });
});

describe('getDTEnd', function() {
  it('should get DTEND', function(done) {
    var event = VObject.event();
    event.getPropertyValue = function(name) {
      assert.equal(name, 'DTEND');
      done();
    };
    event.getDTEnd();
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

describe('setOrganizer', function() {
  it('should set ORGANIZER', function(done) {
    var event = VObject.event();
    event.setProperty = function(name, value) {
      assert.equal(name, 'ORGANIZER');
      assert.equal(value, 'value');
      done();
    };
    event.setOrganizer('value');
  });
});

describe('getOrganizer', function() {
  it('should get ORGANIZER', function() {
    var event = VObject.event();
    event.setOrganizer('value');
    assert.equal(event.getOrganizer(), 'value');
  });
});

describe('addAttendee', function() {
  it('should add ATTENDEE', function(done) {
    var event = VObject.event();
    event.addProperty = function(name, value) {
      assert.equal(name, 'ATTENDEE');
      assert.equal(value, 'value');
      done();
    };
    event.addAttendee('value');
  });
});

describe('getAttendees', function() {
  it('should get all ATTENDEE', function() {
    var event = VObject.event();
    event.addAttendee('attendeeA');
    event.addAttendee('attendeeB');
    assert.deepEqual(event.getAttendees()[0].value, 'attendeeA');
    assert.deepEqual(event.getAttendees()[1].value, 'attendeeB');
  });
});