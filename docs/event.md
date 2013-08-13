# VObject.event

This is a VEVENT component which is an instance of a [`component`](./component.md) object.

Default Properties:

`SEQUENCE` = `0`

Example:

```
BEGIN:VEVENT
DTSTART:20130814T230000Z
DTEND:20130815T003000Z
DTSTAMP:20130812T182800Z
ORGANIZER;CN=jeremy@sunrise.im:mailto:jeremy@sunrise.im
UID:6ltoah87095h15kgqugp2ombm8@google.com
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

##### event.setUID(uid) [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.4.7)

- `uid` for the event. Expects a STRING. Ex: 6ltoah81242h15kgqugp7ombm8@sunrise.am

##### event.getUID() [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.4.7)

- **returns** the UID for the event

##### event.setSummary(summary) [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.1.12)

- `summary` to set for the event. Expects a STRING. Ex: Dinner at Peels

##### event.getSummary() [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.1.12)

- **returns** the summary for the event

##### event.setDTStart(date) [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.2.4)

- `date` to set as the start date. Expects either a [`date`](./date.md) or [`date time`](./date_time.md) object

##### event.getDTStart() [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.2.4)

- **returns** a string representation of the start date for the event

##### event.setDTEnd(date) [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.2.2)

- `date` to set as the end date. Expects either a [`date`](./date.md) or [`date time`](./date_time.md) object

##### event.getDTEnd() [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.2.2)

- **returns** a string representation of the end date for the event

##### event.setDescription(description) [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.1.5)

- `description` to set for the event. Expects a STRING. Ex: Meet at the corner of Broadway and Lafayette

##### event.getDescription() [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.1.5)

- **returns** the description for the event

##### event.setLocation(location) [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.1.7)

- `location` to set for the event. Expects a STRING. Ex: 123 Fake St.

##### event.getLocation() [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.1.7)

- **returns** the location for the event

##### event.setStatus(status) [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.1.11)

- `status` to set for the event. Expects a STRING. Ex: CONFIRMED

##### event.getStatus() [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.1.11)

- **returns** the status of the event

##### event.setDTStamp(date) [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.7.2)

- `date` to set as the timestamp for the event. Expects either a [`date`](./date.md) or [`date time`](./date_time.md) object

##### event.getDTStamp() [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.7.2)

- **returns** a string representation of the timestamp for the event

##### event.setSequence(integer) [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.7.4)
Sequence number of the event. Should be monotonically increasing.

- `integer` to set as the sequence number of the event. Expects an INTEGER

##### event.getSequence() [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.7.4)

- **returns** the sequence number for the event

##### event.setCreated(date) [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.7.1)

- `date` to set as the creation date. Expects either a [`date`](./date.md) or [`date time`](./date_time.md) object

##### event.getCreated() [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.7.1)

- **returns** a string representation of the creation date for the event

##### event.setOrganizer(organizer) [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.4.3)

- `organizer` to set for the event. Expects an [`organizer`](./organizer.md) object

##### event.getOrganizer() [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.4.3)

- **returns** the [`organizer`](./organizer.md) property for the event

##### event.addAttendee(attendee) [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.4.1)

- `attendee` to be added to the event. Expects an [`attendee`](./attendee.md) object

##### event.getAttendees() [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.4.1)

- **returns** an array of [`attendee`](./attendee.md) properties for the event

##### event.addRRULE(rrule) [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.5.3)

- `rrule` to be added to the event. Expects a STRING

##### event.getRRULEs() [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.5.3)

- **returns** an array of RRULE properties
