# VObject-JS -- iCalendar VObject Manipulation in NodeJS

VObject-JS allows you to easily manipulate iCalendar objects using JavaScript. Implements [rfc5545](http://tools.ietf.org/html/rfc5545). Inspired by [node-icalendar](https://github.com/tritech/node-icalendar), [ical.js](https://github.com/mozilla-comm/ical.js/) and [sabre-vobject](https://github.com/fruux/sabre-vobject).

## Test

[ ![Codeship Status for sunrise/vobject-js](https://www.codeship.io/projects/3d19f660-ee41-0130-a06d-5a4a20d5c6cf/status?branch=master)](https://www.codeship.io/projects/6175)

## Installation

```
npm install vobject
var vobject = require('vobject');
```

## Example

### Create a Calendar

The top-level element in iCalendar is the Calendaring and Scheduling Core Object, a collection of calendar and scheduling information. Typically, this information will consist of a single iCalendar object.

```js
var calendar = vobject.calendar();
```

The body of the iCalendar object (the icalbody) is made up of a list of calendar properties and one or more calendar components.

```js
calendar.setMethod('REQUEST')
```

### Create a Event

```js
var event = vobject.event();
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
var attendee = vobject.attendee();
attendee.setCN('Pierre Valade');
attendee.setMail('user@domain.com');
attendee.setPartStat('ACCEPTED');
event.addAttendee(attendee);
```

```js
var organizer = vobject.organizer();
organizer.setCN('Jeremy Le Van');
organizer.setMail('user@domain.com');
event.setOrganizer(organizer);
```

### Set Dates for an Event

Date:

```js
var date = vobject.dateValue();
date.setDate(1986, 10, 18);
// or
date.parseDate('1986-10-18');
```

Date Time:

```js
var dateTime = vobject.dateTimeValue();
dateTime.setDateTime(1986, 10, 18, 13, 05, 00, 120); // last parameter is offset in minutes
// or
dateTime.parseDateTime('1986-10-18T13:00:00+02:00'); // ISO 8601 (with TimeZone support)
```

Then attach `date` or `dateTime` to an event:

```js
event.setDTStart(date)
event.setDTStart(dateTime)
```

## API

### [vobject.property(name, value, parameters)](docs/vobject/property.md)
##### [property.setParameter(name, value)](docs/vobject/property.md#propertysetparameternamevalue)
##### [property.getParameter(name)](docs/vobject/property.md#propertygetparametername)

##### [property.setValue(value)](docs/vobject/property.md#propertysetvaluevalue)
##### [property.getValue()](docs/vobject/property.md#propertygetvalue)

##### [property.toICS()](docs/vobject/property.md#propertytoics)

### [vobject.component(name)](docs/vobject/component.md)
##### [component.pushProperty(property)](docs/vobject/component.md#componentpushpropertyproperty)
##### [component.getProperties(name)](docs/vobject/component.md#componentgetpropertiesname)

##### [component.setProperty(property)](docs/vobject/component.md#componentsetpropertyproperty)
##### [component.getProperty(name, index=0)](docs/vobject/component.md#componentgetpropertyname-index0)

##### [component.pushComponent(childComponent)](docs/vobject/component.md#componentpushcomponentchildcomponent)

##### [component.toICSLines()](docs/vobject/component.md#componenttoicslines)
##### [component.toICS()](docs/vobject/component.md#componenttoics)

### [vobject.calendar()](docs/vobject/calendar.md)
##### [calendar.setMethod(method)](docs/vobject/calendar.md#setmethodmethod)
##### [calendar.getMethod()](docs/vobject/calendar.md#getmethod)

### [vobject.event()](docs/vobject/event.md)
##### [event.setUID(uid)](docs/vobject/event.md#eventsetuiduid-rfc)
##### [event.getUID()](docs/vobject/event.md#eventgetuid-rfc)

##### [event.setSummary(summary)](docs/vobject/event.md#eventsetsummarysummary-rfc)
##### [event.getSummary()](docs/vobject/event.md#eventgetsummary-rfc)

##### [event.setDTStart(date)](docs/vobject/event.md#eventsetdtstartdate-rfc)
##### [event.getDTStart()](docs/vobject/event.md#eventgetdtstart-rfc)

##### [event.setDTEnd(date)](docs/vobject/event.md#eventsetdtenddate-rfc)
##### [event.getDTEnd()](docs/vobject/event.md#eventgetdtend-rfc)

##### [event.setDescription(description)](docs/vobject/event.md#eventsetdescriptiondescription-rfc)
##### [event.getDescription()](docs/vobject/event.md#eventgetdescription-rfc)

##### [event.setLocation(location)](docs/vobject/event.md#eventsetlocationlocation-rfc)
##### [event.getLocation()](docs/vobject/event.md#eventgetlocation-rfc)

##### [event.setStatus(status)](docs/vobject/event.md#eventsetstatusstatus-rfc)
##### [event.getStatus()](docs/vobject/event.md#eventgetstatus-rfc)

##### [event.setDTStamp(date)](docs/vobject/event.md#eventsetdtstampdate-rfc)
##### [event.getDTStamp()](docs/vobject/event.md#eventgetdtstamp-rfc)

##### [event.setLastModified(date)](docs/vobject/event.md#eventsetlastmodifieddate-rfc)
##### [event.getLastModified()](docs/vobject/event.md#eventgetlastmodified-rfc)

##### [event.setSequence(integer)](docs/vobject/event.md#eventsetsequenceinteger-rfc)
##### [event.getSequence()](docs/vobject/event.md#eventgetsequence-rfc)

##### [event.setCreated(date)](docs/vobject/event.md#eventsetcreateddate-rfc)
##### [event.getCreated()](docs/vobject/event.md#eventgetcreated-rfc)

##### [event.setOrganizer(organizer)](docs/vobject/event.md#eventsetorganizerorganizer-rfc)
##### [event.getOrganizer()](docs/vobject/event.md#eventgetorganizer-rfc)

##### [event.addAttendee(attendee)](docs/vobject/event.md#eventaddattendeeattendee-rfc)
##### [event.getAttendees()](docs/vobject/event.md#eventgetattendees-rfc)

##### [event.addRRULE(rrule)](docs/vobject/event.md#eventaddrrulerrule-rfc)
##### [event.getRRULEs()](docs/vobject/event.md#eventgetrrules-rfc)

##### [event.setRecurrenceID(date)](docs/vobject/event.md#eventsetrecurrenceiddate-rfc)
##### [event.getRecurrenceID()](docs/vobject/event.md#eventgetrecurrenceid-rfc)

##### [event.setTransparency(transparency)](docs/vobject/event.md#settransparencytransparency)
##### [event.getTransparency()](docs/vobject/event.md#eventgettransparency)

### [vobject.person(name)](docs/vobject/person.md)
##### [person.setCUType(type)](docs/vobject/person.md#personsetcutypetype-rfc)
##### [person.getCUType()](docs/vobject/person.md#persongetcutype-rfc)

##### [person.setCN(cn)](docs/vobject/person.md#personsetcncn-rfc)
##### [person.getCN()](docs/vobject/person.md#persongetcn-rfc)

##### [person.setMail(mail)](docs/vobject/person.md#personsetmailmail)
##### [person.getMail()](docs/vobject/person.md#persongetmail)

### [vobject.attendee()](docs/vobject/attendee.md)
##### [attendee.setRole(role)](docs/vobject/attendee.md#attendeesetrolerole-rfc)
##### [attendee.getRole()](docs/vobject/attendee.md#attendeegetrole-rfc)

##### [attendee.setPartStat(partstat)](docs/vobject/attendee.md#attendeesetpartstatpartstat-rfc)
##### [attendee.getPartStat()](docs/vobject/attendee.md#attendeegetpartstat-rfc)

##### [attendee.setRSVP(rsvp)](docs/vobject/attendee.md#attendeesetrsvprsvp-rfc)
##### [attendee.getRSVP()](docs/vobject/attendee.md#attendeegetrsvp-rfc)

### [vobject.organizer()](docs/vobject/organizer.md)

### [vobject.dateValue(dateString='')](docs/vobject/dateValue.md)
##### [dateValue.type](docs/vobject/dateValue.md#datevaluetype--datevalue)
##### [dateValue.parseDate(dateString)](docs/vobject/dateValue.md#dateparsedatedatestring)
##### [dateValue.toICS()](docs/vobject/dateValue.md#datetoics)

### [vobject.dateTimeValue(dateTimeString='')](docs/vobject/dateTimeValue.md)
##### [dateTimeValue.type](docs/vobject/dateTimeValue.md#datetimevaluetype--datetimevalue)
##### [dateTimeValue.parseDateTime(dateTimeString)](docs/vobject/dateTimeValue.md#dateparsedatetimedatetimestring)
##### [dateTimeValue.parseTimestamp(timestamp)](docs/vobject/dateTimeValue.md#dateparsetimestamptimestamp)
##### [dateTimeValue.setTZID(tzid)](docs/vobject/dateTimeValue.md#datesettzidtzid)
##### [dateTimeValue.getTZID()](docs/vobject/dateTimeValue.md#dategettzid)
##### [dateTimeValue.toICS()](docs/vobject/dateTimeValue.md#datetoics)
