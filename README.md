This module is NOT ready for production usage. Please wait until 1.0.0 is released.
---

VObject
=====

VObject allows you to easily manipulate iCalendar objects using JavaScript. Implements [rfc5545](http://tools.ietf.org/html/rfc5545). Inspired by [node-icalendar](https://github.com/tritech/node-icalendar), [ical.js](https://github.com/mozilla-comm/ical.js/) and [sabre-vobject](https://github.com/fruux/sabre-vobject).

Installation
---

Example
---

### Create a Calendar

> The top-level element in iCalendar is the Calendaring and Scheduling Core Object, a collection of calendar and scheduling information. Typically, this information will consist of a single iCalendar object.


```js
var calendar = VObject.calendar();
```

> The body of the iCalendar object (the icalbody) is made up of a list of calendar properties and one or more calendar components.

```js
calendar.setMethod('REQUEST')
```

### Create a Event

```js
var event = VObject.event();
event.setSummary('Hello World!');
event.setDescription('(made with Sunrise)');
```

Then, add the event to that calendar (events need to be added to a calendar to be a proper iCal object):

```js
calendar.addComponent(event);
```

Then, to ICS:

```js
calendar.toICS();
```

### Dates

VObject includes a convenient way to handle Date and DateTime.

Date:

```js
var date = VObject.date();
date.set(1986, 10, 18);
// or
date.parse('1986-10-18');
```

DateTime:


```js
var dateTime = VObject.dateTime();
dateTime.set(1986, 10, 18, 13, 05, 00, 120); // last parameter is offset in minutes
// or
dateTime.parseISO8601('1986-10-18T13:00:00+02:00'); // ISO 8601 (with TimeZone support)
```

Then attach `date` or `dateTime` to an event:

```js
event.setDTStart(date)
event.setDTStart(dateTime)
```

### People (Attendees, Organizer)

VObject includes a convenient way to handle people.

```js
var attendee = VObject.attendee();
attendee.setCN('Pierre Valade');
attendee.setMail('user@domain.com');
attendee.setPartStat('ACCEPTED');
event.addAttendee(attendee);
```

Organizer:
```js
var organizer = VObject.organizer();
organizer.setCN('Jeremy Le Van');
organizer.setMail('user@domain.com');
event.setOrganizer(organizer);
```

API
---

### VObject.calendar

#### getMethod
#### setMethod
#### toICS

### VObject.event

#### setUID (required)
#### getUID
#### setSummary
#### getSummary
#### setDescription
#### getDescription
#### setLocation
#### setLocation
#### setStatus
#### getStatus
#### setDTStart
#### getDTStart
#### setDTEnd
#### getDTEnd
#### setDTStamp
#### getDTStamp
#### setSequence
#### getSequence (Default 0)
#### setCreated
#### getCreated
#### setOrganizer
#### getOrganizer
#### addAttendee
#### getAttendees
#### addRRule
#### getRRules

### VObject.attendee

#### setCUType
#### getCUType
#### setRole
#### getRole
#### setPartStat
#### getPartStat
#### setRSVP
#### getRSVP
#### setCN
#### getCN
#### setMail
#### getMail
#### setCUType
#### getCUType

### VObjet.organizer
#### setCN
#### getCN
#### setMail
#### getMail
#### setCUType
#### getCUType

### VObject.component
#### addProperty
#### addPropertyWithNameAndValue
#### setProperty
#### setPropertyWithNameAndValue
#### getProperty
#### getPropertyValue

### VObject.date
#### set(year, month, day)
#### parse('YYYY-MM-DD')
#### toICS

### VObject.dateTime
#### set(year, month, day, hours, minutes, seconds, offsetInMinutes)
#### parseISO8601('YYYY-MM-DDTHH:mm:ssZ')
#### toICS
