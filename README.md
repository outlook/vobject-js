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
##### event.setUID(uid)
##### event.getUID()

##### event.setSummary(summary)
##### event.getSummary()

##### event.setDTStart(date)
##### event.getDTStart()

##### event.setDTEnd(date)
##### event.getDTEnd()

##### event.setDescription(description)
##### event.getDescription()

##### event.setLocation(location)
##### event.getLocation()

##### event.setStatus(status)
##### event.getStatus()

##### event.setDTStamp(date)
##### event.getDTStamp()

##### event.setSequence(integer)
##### event.getSequence()

##### event.setCreated(date)
##### event.getCreated()

##### event.setOrganizer(organizer)
##### event.getOrganizer()

##### event.addAttendee(attendee)
##### event.getAttendees()

##### event.addRRULE(rrule)
##### event.getRRULEs()

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
