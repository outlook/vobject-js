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

### Set Dates for an Event

Date:

```js
var date = VObject.dateValue();
date.setDate(1986, 10, 18);
// or
date.parseDate('1986-10-18');
```

Date Time:

```js
var dateTime = VObject.dateTimeValue();
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

### [VObject.property(name, value, parameters)](docs/vobject/property.md)
##### [property.setParameter(name, value)](docs/vobject/property.md#propertysetparameternamevalue)
##### [property.getParameter(name)](docs/vobject/property.md#propertygetparametername)

##### [property.setValue(value)](docs/vobject/property.md#propertysetvaluevalue)
##### [property.getValue()](docs/vobject/property.md#propertygetvalue)

##### [property.toICS()](docs/vobject/property.md#propertytoics)

### [VObject.component(name)](docs/vobject/component.md)
##### [component.pushProperty(property)](docs/vobject/component.md#componentpushpropertyproperty)
##### [component.getProperties(name)](docs/vobject/component.md#componentgetpropertiesname)

##### [component.setProperty(property)](docs/vobject/component.md#componentsetpropertyproperty)
##### [component.getProperty(name, index=0)](docs/vobject/component.md#componentgetpropertyname-index0)

##### [component.pushComponent(childComponent)](docs/vobject/component.md#componentpushcomponentchildcomponent)

##### [component.toICSLines()](docs/vobject/component.md#componenttoicslines)
##### [component.toICS()](docs/vobject/component.md#componenttoics)

### [VObject.calendar()](docs/vobject/calendar.md)
##### [calendar.setMethod(method)](docs/vobject/calendar.md#setmethodmethod)
##### [calendar.getMethod()](docs/vobject/calendar.md#getmethod)

### [VObject.event()](docs/vobject/event.md)
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

### [VObject.person(name)](docs/vobject/person.md)
##### [person.setCUType(type)](docs/vobject/person.md#personsetcutypetype-rfc)
##### [person.getCUType()](docs/vobject/person.md#persongetcutype-rfc)

##### [person.setCN(cn)](docs/vobject/person.md#personsetcncn-rfc)
##### [person.getCN()](docs/vobject/person.md#persongetcn-rfc)

##### [person.setMail(mail)](docs/vobject/person.md#personsetmailmail)
##### [person.getMail()](docs/vobject/person.md#persongetmail)

### [VObject.attendee()](docs/vobject/attendee.md)
##### [attendee.setRole(role)](docs/vobject/attendee.md#attendeesetrolerole-rfc)
##### [attendee.getRole()](docs/vobject/attendee.md#attendeegetrole-rfc)

##### [attendee.setPartStat(partstat)](docs/vobject/attendee.md#attendeesetpartstatpartstat-rfc)
##### [attendee.getPartStat()](docs/vobject/attendee.md#attendeegetpartstat-rfc)

##### [attendee.setRSVP(rsvp)](docs/vobject/attendee.md#attendeesetrsvprsvp-rfc)
##### [attendee.getRSVP()](docs/vobject/attendee.md#attendeegetrsvp-rfc)

### [VObject.organizer()](docs/vobject/organizer.md)

### [VObject.dateValue(dateString='')](docs/vobject/dateValue.md)
##### [date.isDate()](docs/vobject/dateValue.md#dateisdate)
##### [date.isDateTime()](docs/vobject/dateValue.md#dateisdatetime)
##### [date.setDate(year, month, day)](docs/vobject/dateValue.md#datesetdateyearmonthday)
##### [date.parseDate(dateString)](docs/vobject/dateValue.md#dateparsedatedatestring)
##### [date.toICS()](docs/vobject/dateValue.md#datetoics)

### [VObject.dateTimeValue(dateTimeString='')](docs/vobject/dateTimeValue.md)
##### [date.isDate()](docs/vobject/dateTimeValue.md#dateisdate)
##### [date.isDateTime()](docs/vobject/dateTimeValue.md#dateisdatetime)
##### [date.parseDateTime(dateTimeString)](docs/vobject/dateTimeValue.md#dateparsedatetimedatetimestring)
##### [date.toICS()](docs/vobject/dateTimeValue.md#datetoics)
