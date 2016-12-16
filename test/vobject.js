var assert = require('assert');

var vobject;
beforeEach(function() {
  delete require.cache[require.resolve('../lib/vobject')];
  vobject = require('../lib/vobject');
});

describe('lib/vobject.js', function() {
  it('conversion of parsed ICS should yield original ICS', function() {
    var originalICS = ['BEGIN:VCALENDAR',
                       'VERSION:2.0',
                       'CALSCALE:GREGORIAN',
                       'PRODID:-//WonderCal//EN',
                       'BEGIN:VEVENT',
                       'SUMMARY:Hello World!',
                       'DESCRIPTION:Some description that is',
                       'END:VEVENT',
                       'END:VCALENDAR',
                       ''].join('\r\n');

    var parsedAndStringifiedICS = vobject.parseICS(originalICS).toICS();

    assert.deepEqual(parsedAndStringifiedICS, originalICS);
  });
});
