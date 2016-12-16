var assert = require('assert');

var vobject;
beforeEach(function() {
  delete require.cache[require.resolve('../lib/vobject')];
  vobject = require('../lib/vobject');
});

describe('lib/vobject.js', function() {
  it('conversion of parsed ICS should yield original ICS', function() {
    var event = vobject.event();
    event.setSummary('Hello World!');
    event.setDescription('(made for tests)');

    var calendar = vobject.calendar();
    calendar.pushComponent(event);

    var calendarICS = calendar.toICS();

    var parsedAndStringifiedICS = vobject.parseICS(calendarICS).toICS();

    assert.deepEqual(parsedAndStringifiedICS, calendarICS);
  });
});
