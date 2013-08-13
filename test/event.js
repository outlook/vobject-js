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
    event.setPropertyWithNameAndValue = function(name, value) {
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
    event.setPropertyWithNameAndValue = function(name, value) {
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
    event.setPropertyWithNameAndValue = function(name, value) {
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
    event.setPropertyWithNameAndValue = function(name, value) {
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
    event.setPropertyWithNameAndValue = function(name, value) {
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
  it('should handle DateTime', function(done) {
    var event = VObject.event();
    var dateTime = VObject.dateTime();
    dateTime.parseISO8601('1986-10-18T13:00:00+02:00');

    event.pushProperty = function(property) {
      assert.equal(property.name, 'DTSTART');
      assert.equal(property.getParameter('VALUE'), 'DATE-TIME');
      assert.equal(property.value, '19861018T110000Z');
      done();
    };
    event.setDTStart(dateTime);
  });

  it('should handle Date', function(done) {
    var event = VObject.event();
    var date = VObject.date();
    date.parse('1986-10-18');

    event.pushProperty = function(property) {
      assert.equal(property.name, 'DTSTART');
      assert.equal(property.getParameter('VALUE'), 'DATE');
      assert.equal(property.value, '19861018');
      done();
    };
    event.setDTStart(date);
  });
});

describe('getDTStart', function() {
  it('should get DTSTART', function(done) {
    var event = VObject.event();
    event.getPropertyValue = function(name) {
      assert.equal(name, 'DTSTART');
      done();
    };
    event.getDTStart();
  });
});

describe('setDTEnd', function() {
  it('should handle DateTime', function(done) {
    var event = VObject.event();
    var dateTime = VObject.dateTime();
    dateTime.parseISO8601('1986-10-18T13:00:00+02:00');

    event.pushProperty = function(property) {
      assert.equal(property.name, 'DTEND');
      assert.equal(property.getParameter('VALUE'), 'DATE-TIME');
      assert.equal(property.value, '19861018T110000Z');
      done();
    };
    event.setDTEnd(dateTime);
  });

  it('should handle Date', function(done) {
    var event = VObject.event();
    var date = VObject.date();
    date.parse('1986-10-18');

    event.pushProperty = function(property) {
      assert.equal(property.name, 'DTEND');
      assert.equal(property.getParameter('VALUE'), 'DATE');
      assert.equal(property.value, '19861018');
      done();
    };
    event.setDTEnd(date);
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
  it('should (ONLY) handle DateTime', function() {
    var event = VObject.event();
    var dateTime = VObject.dateTime();
    dateTime.parseISO8601('1986-10-18T13:00:00+02:00');
    event.setDTStamp(dateTime);
    assert.equal(event.getDTStamp(), '19861018T110000Z');
  });
});

describe('getDTStamp', function() {
  it('should get DTSTAMP', function() {
    var event = VObject.event();
    var dateTime = VObject.dateTime();
    dateTime.parseISO8601('1986-10-18T13:00:00+02:00');
    event.setDTStamp(dateTime);
    assert.equal(event.getDTStamp(), '19861018T110000Z');
  });
});

describe('setSequence', function() {
  it('should set SEQUENCE', function(done) {
    var event = VObject.event();
    event.setPropertyWithNameAndValue = function(name, value) {
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
    event.setPropertyWithNameAndValue = function(name, value) {
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
    event.setProperty = function(value) {
      assert.equal(value, 'value');
      done();
    };
    event.setOrganizer('value');
  });
});

describe('getOrganizer', function() {
  it('should get ORGANIZER', function() {
    var event = VObject.event();
    event.getProperty = function(name) {
      assert.equal(name, 'ORGANIZER');
      return 'value';
    };
    assert.equal(event.getOrganizer(), 'value');
  });
});

describe('addAttendee', function() {
  it('should add ATTENDEE', function(done) {
    var event = VObject.event();
    event.pushProperty = function(value) {
      assert.equal(value, 'value');
      done();
    };
    event.addAttendee('value');
  });
});

describe('getAttendees', function() {
  it('should get all ATTENDEE', function() {
    var event = VObject.event();
    event.getProperties = function(name) {
      assert.equal(name, 'ATTENDEE');
      return 'value';
    };
    assert.equal(event.getAttendees(), 'value');
  });
});

describe('addRRule', function() {
  it('should add RRULE', function(done) {
    var event = VObject.event();
    event.pushPropertyWithNameAndValue = function(name, value) {
      assert.equal(name, 'RRULE');
      assert.equal(value, 'value');
      done();
    };
    event.addRRule('value');
  });
});

describe('getRRules', function() {
  it('should get all RRULE', function() {
    var event = VObject.event();
    event.getProperties = function(name) {
      assert.equal(name, 'RRULE');
      return 'value';
    };
    assert.equal(event.getRRules(), 'value');
  });
});
