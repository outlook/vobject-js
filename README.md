VObject
=====

VObject allows you to easily manipulate iCalendar objects using JavaScript. Implements [rfc5545](http://tools.ietf.org/html/rfc5545).

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

### Create a Event

```js
var event = VObject.event();
event.setSummary('Hello World!');
```

Then, add the event to that calendar (events need to be added to a calendar to be a proper iCal object):

```js
calendar.addComponent(event);
```

Then, to ICS:

```js
calendar.stringify();
```

API
---

### VObject.calendar

#### getMethod
#### setMethod
#### stringify

### VObject.event

#### setUID (required)
#### getUID
#### setSummary
#### getSummary
#### setDescription
#### setDescription
#### setLocation
#### setLocation
#### setStatus
#### getStatus
#### setDTStamp
#### getDTStamp
#### setSequence
#### getSequence (Default 0)
#### setCreated
#### getCreated

### VObject.attendee



### VObject.component
#### addProperty
#### setProperty
#### getProperty
#### getPropertyValue