var VObject = require('./index');

var calendar = VObject.calendar();
calendar.setMethod('REQUEST');

var event = VObject.event();
event.setSummary('Hello World!');
event.setDescription('(made with Sunrise)');

// Date
var dateTime = VObject.dateTime();
dateTime.parseISO8601('1986-10-18T13:00:00+02:00');
event.setDTStart(dateTime);

// RRules
event.addRRule('FREQ=DAILY;COUNT=10');

// Attendees
var attendee = VObject.attendee();
attendee.setCN('Pierre Valade');
attendee.setMail('user@domain.com');
attendee.setPartStat('ACCEPTED');
event.addAttendee(attendee);

// Organizer
var organizer = VObject.organizer();
organizer.setCN('Jeremy Le Van');
organizer.setMail('user@domain.com');
event.setOrganizer(organizer);

// ICS
calendar.pushComponent(event);
console.log(calendar.toICS());
