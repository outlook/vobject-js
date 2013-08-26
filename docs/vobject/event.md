# vobject.event() [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.6.1)

This is a VEVENT component which is a subclass of the [`component`](./component.md) object.

Usage:

```js
var event = vobject.event();
event.setDTStart(vobject.dateTimeValue('2013-08-14T19:00:00-04:00'));
event.setDTEnd(vobject.dateTimeValue('2013-08-14T20:00:00-04:00'));
event.setUID('6ltoah87095h151231fqugp2ombm8@sunrise.am');
event.setSummary('Night Photowalk');
event.toICS();
```

Example:

```
BEGIN:VEVENT
DTSTART:20130814T230000Z
DTEND:20130815T003000Z
DTSTAMP:20130812T182800Z
ORGANIZER;CN=jeremy@sunrise.im:mailto:jeremy@sunrise.im
UID:6ltoah87095h151231fqugp2ombm8@sunrise.am
ATTENDEE;CUTYPE=INDIVIDUAL;ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;RSVP=
 TRUE;CN=Joey Dong;X-NUM-GUESTS=0:mailto:joey@sunrise.am
ATTENDEE;CUTYPE=INDIVIDUAL;ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;RSVP=
 TRUE;CN=Christophe Lamperti;X-NUM-GUESTS=0:mailto:christophe@sunrise.am
ATTENDEE;CUTYPE=INDIVIDUAL;ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;RSVP=
 TRUE;CN=Victor Coulon;X-NUM-GUESTS=0:mailto:victor@sunrise.am
ATTENDEE;CUTYPE=INDIVIDUAL;ROLE=REQ-PARTICIPANT;PARTSTAT=ACCEPTED;RSVP=TRUE
 ;CN=jeremy@sunrise.im;X-NUM-GUESTS=0:mailto:jeremy@sunrise.im
CREATED:20130812T180357Z
DESCRIPTION:Drinks
LAST-MODIFIED:20130812T182800Z
SEQUENCE:1
STATUS:CONFIRMED
SUMMARY:Night Photowalk
TRANSP:OPAQUE
END:VEVENT
```

-----------------------------------------------------------------------------------------

##### event.setUID(uid) [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.4.7)

- `uid` for the event. Expects a STRING. Ex: `6ltoah81242h15kgqugp7ombm8@sunrise.am`

```
This property defines the persistent, globally unique identifier for the calendar component.
```

##### event.getUID() [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.4.7)

- **returns** the UID for the event or `undefined` by default

-----------------------------------------------------------------------------------------

##### event.setSummary(summary) [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.1.12)

- `summary` to set for the event. Expects a STRING. Ex: "Dinner at Peels"

Also known as the title for the event.

##### event.getSummary() [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.1.12)

- **returns** the unescaped summary for the event or `undefined` by default

-----------------------------------------------------------------------------------------

##### event.setDTStart(date) [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.2.4)

- `date` to set as the start date. Expects either a [`dateValue`](./dateValue.md) or [`dateTimeValue`](./dateTimeValue.md) object. If a TZID is specified for the dateTimeValue, the property will be set with a floating date format. See [`dateTimeValue.toICS()`](./dateTimeValue.md#datetimevaluetoics) for more information

##### event.getDTStart() [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.2.4)

- **returns** the [`dateValue`](./dateValue.md) or [`dateTimeValue`](./dateTimeValue.md) set as the start date for the event, otherwise `undefined` by default

##### event.setDTEnd(date) [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.2.2)

- `date` to set as the end date. Expects either a [`dateValue`](./dateValue.md) or [`dateTimeValue`](./dateTimeValue.md) object.  If a TZID is specified for the dateTimeValue, the property will be set with a floating date format. See [`dateTimeValue.toICS()`](./dateTimeValue.md#datetimevaluetoics) for more information

##### event.getDTEnd() [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.2.2)

- **returns** the [`dateValue`](./dateValue.md) or [`dateTimeValue`](./dateTimeValue.md) set as the end date for the event, otherwise `undefined` by default

-----------------------------------------------------------------------------------------

##### event.setDescription(description) [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.1.5)

- `description` to set for the event. Expects a STRING. Ex: "Meet at the corner of Broadway and Lafayette"

##### event.getDescription() [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.1.5)

- **returns** the unescaped description for the event or `undefined` by default

-----------------------------------------------------------------------------------------

##### event.setLocation(location) [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.1.7)

- `location` to set for the event. Expects a STRING. Ex: "123 Fake St.""

##### event.getLocation() [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.1.7)

- **returns** the unescaped location for the event or `undefined` by default

-----------------------------------------------------------------------------------------

##### event.setStatus(status) [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.1.11)

- `status` to set for the event. Expects a STRING. Ex: `TENTATIVE`, `CONFIRMED`, `CANCELLED`

```
Status values for a VEVENT
  "TENTATIVE"    ;Indicates event is tentative.
  "CONFIRMED"    ;Indicates event is definite.
  "CANCELLED"    ;Indicates event was cancelled.
```

##### event.getStatus() [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.1.11)

- **returns** the status of the event or `undefined` by default

-----------------------------------------------------------------------------------------

##### event.setDTStamp(date) [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.7.2)

- `date` to set as the timestamp for the event. Expects either a [`dateTimeValue`](./dateTimeValue.md) object

```
In the case of an iCalendar object that specifies a "METHOD" property, this property specifies the date and time that
the instance of the iCalendar object was created. In the case of an iCalendar object that doesn't specify a "METHOD"
property, this property specifies the date and time that the information associated with the calendar component was
last revised in the calendar store.
```

##### event.getDTStamp() [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.7.2)

- **returns** a string representation of the timestamp for the event or `undefined` by default

-----------------------------------------------------------------------------------------

##### event.setLastModified(date) [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.7.3)

- `date` to set as the last modified date for the event. Expects a [`dateTimeValue`](./dateTimeValue.md) object

##### event.getLastModified() [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.7.3)

- **returns** a string representation of the last modified date for the event or `undefined` by default

-----------------------------------------------------------------------------------------

##### event.setSequence(sequence) [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.7.4)

- `sequence` to set as the sequence number of the event. Expects an INTEGER

Sequence number of the event. Should be monotonically increasing on changes on the fields: `DTSTART`, `DTEND`, `DUE`, `RDATE`, `RRULE`, `EXDATE`, `EXRULE`, and `STATUS`.

##### event.getSequence() [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.7.4)

- **returns** the sequence number for the event or `undefined` by default

-----------------------------------------------------------------------------------------

##### event.setCreated(date) [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.7.1)

- `date` to set as the creation date. Expects either a [`dateValue`](./dateValue.md) or [`dateTimeValue`](./dateTimeValue.md) object

##### event.getCreated() [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.7.1)

- **returns** a string representation of the creation date for the event or `undefined` by default

-----------------------------------------------------------------------------------------

##### event.setOrganizer(organizer) [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.4.3)

- `organizer` to set for the event. Expects an [`organizer`](./organizer.md) object

##### event.getOrganizer() [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.4.3)

- **returns** the [`organizer`](./organizer.md) property for the event or `undefined` by default

##### event.addAttendee(attendee) [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.4.1)

- `attendee` to be added to the event. Expects an [`attendee`](./attendee.md) object

##### event.getAttendees() [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.4.1)

- **returns** an array of [`attendee`](./attendee.md) properties for the event or `[]` by default

-----------------------------------------------------------------------------------------

##### event.addRRULE(rrule) [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.5.3)

- `rrule` to be added to the event. Expects a STRING

##### event.getRRULEs() [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.5.3)

- **returns** an array of RRULE properties or `[]` by default

##### event.addEXDATE(exdate) [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.5.1)

- `exdate` to be added to the event. Expects a STRING

##### event.getEXDATEs() [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.5.1)

- **returns** an array of EXDATE properties or `[]` by default

##### event.setRecurrenceID(date) [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.4.4)

- `date` to set as the recurrence id for the event. Expects either a [`dateValue`](./dateValue.md) or [`dateTimeValue`](./dateTimeValue.md) object

##### event.getRecurrenceID() [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.4.4)

- **returns** the property set as the recurrence id for the event or `undefined` by default

-----------------------------------------------------------------------------------------

##### event.setTransparency(transparency) [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.2.7)

- `transparency` to set for the event. Expects either TRANSPARENT or OPAQUE

##### event.getTransparency() [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.2.7)

- **returns** the string value set as the transparency of the event or `undefined` by default
