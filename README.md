# VObject-JS -- iCalendar VObject Manipulation in NodeJS

VObject-JS allows you to easily manipulate iCalendar objects using JavaScript. Implements [rfc5545](http://tools.ietf.org/html/rfc5545). Inspired by [node-icalendar](https://github.com/tritech/node-icalendar), [ical.js](https://github.com/mozilla-comm/ical.js/) and [sabre-vobject](https://github.com/fruux/sabre-vobject).

## Installation

```
npm install vobject
var VObject = require('vobject');
```

## Example

### Create a Calendar

The top-level element in iCalendar is the Calendaring and Scheduling Core Object, a collection of calendar and scheduling information. Typically, this information will consist of a single iCalendar object.

```js
var calendar = VObject.calendar();
```

The body of the iCalendar object (the icalbody) is made up of a list of calendar properties and one or more calendar components.

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
calendar.pushComponent(event);
```

Then, to ICS:

```js
calendar.toICS();
```

### Add Attendees and Organizer

```js
var attendee = VObject.attendee();
attendee.setCN('Pierre Valade');
attendee.setMail('user@domain.com');
attendee.setPartStat('ACCEPTED');
event.addAttendee(attendee);
```

```js
var organizer = VObject.organizer();
organizer.setCN('Jeremy Le Van');
organizer.setMail('user@domain.com');
event.setOrganizer(organizer);
```

## API

### [VObject.property(name, value, parameters)](docs/property.md)
##### property.getParameter(name)
##### property.setParameter(name, value)

##### property.getValue()
##### property.setValue(value)

##### property.toICS()

### [VObject.component(name)](docs/component.md)
##### component.pushProperty(property)
##### component.getProperties(name)

##### component.setProperty(property)
##### component.getProperty(name, index=0)

##### component.pushComponent(childComponent)

##### component.toICSLines()
##### component.toICS()

### [VObject.calendar()](docs/calendar.md)
##### calendar.setMethod(method)
##### calendar.getMethod()

### [VObject.event](docs/event.md)
##### [event.setUID(uid)](docs/event.md#eventsetuiduid-rfc)
##### [event.getUID()](docs/event.md#eventgetuid-rfc)

##### [event.setSummary(summary)](docs/event.md#eventsetsummarysummary-rfc)
##### [event.getSummary()](docs/event.md#eventgetsummary-rfc)

##### [event.setDTStart(date)](docs/event.md#eventsetdtstartdate-rfc)
##### [event.getDTStart()](docs/event.md#eventgetdtstart-rfc)

##### [event.setDTEnd(date)](docs/event.md#eventsetdtenddate-rfc)
##### [event.getDTEnd()](docs/event.md#eventgetdtend-rfc)

##### [event.setDescription(description)](docs/event.md#eventsetdescriptiondescription-rfc)
##### [event.getDescription()](docs/event.md#eventgetdescription-rfc)

##### [event.setLocation(location)](docs/event.md#eventsetlocationlocation-rfc)
##### [event.getLocation()](docs/event.md#eventgetlocation-rfc)

##### [event.setStatus(status)](docs/event.md#eventsetstatusstatus-rfc)
##### [event.getStatus()](docs/event.md#eventgetstatus-rfc)

##### [event.setDTStamp(date)](docs/event.md#eventsetdtstampdate-rfc)
##### [event.getDTStamp()](docs/event.md#eventgetdtstamp-rfc)

##### [event.setSequence(integer)](docs/event.md#eventsetsequenceinteger-rfc)
##### [event.getSequence()](docs/event.md#eventgetsequence-rfc)

##### [event.setCreated(date)](docs/event.md#eventsetcreateddate-rfc)
##### [event.getCreated()](docs/event.md#eventgetcreated-rfc)

##### [event.setOrganizer(organizer)](docs/event.md#eventsetorganizerorganizer-rfc)
##### [event.getOrganizer()](docs/event.md#eventgetorganizer-rfc)

##### [event.addAttendee(attendee)](docs/event.md#eventaddattendeeattendee-rfc)
##### [event.getAttendees()](docs/event.md#eventgetattendees-rfc)

##### [event.addRRULE(rrule)](docs/event.md#eventaddrrulerrule-rfc)
##### [event.getRRULEs()](docs/event.md#eventgetrrules-rfc)

### [VObject.person](docs/person.md)
##### [person.setCUType(type)](docs/person.md#personsetcutypetype-rfc)
##### [person.getCUType()](docs/person.md#persongetcutype-rfc)

##### [person.setCN(cn)](docs/person.md#personsetcncn-rfc)
##### [person.getCN()](docs/person.md#persongetcn-rfc)

##### [person.setMail(mail)](docs/person.md#personsetmailmail)
##### [person.getMail()](docs/person.md#persongetmail)

### [VObject.attendee](docs/people.md)
##### setCUType
##### getCUType
##### setRole
##### getRole
##### setPartStat
##### getPartStat
##### setRSVP
##### getRSVP
##### setCN
##### getCN
##### setMail
##### getMail
##### setCUType
##### getCUType

### [VObject.organizer](docs/people.md)
##### setCN
##### getCN
##### setMail
##### getMail
##### setCUType
##### getCUType

### [VObject.date](docs/date.md)
##### set(year, month, day)
##### parse('YYYY-MM-DD')
##### toICS

### [VObject.dateTime](docs/date.md)
##### set(year, month, day, hours, minutes, seconds, offsetInMinutes)
##### parseISO8601('YYYY-MM-DDTHH:mm:ssZ')
##### toICS
