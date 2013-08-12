# People (Attendees, Organizer)

VObject-JS includes a convenient way to handle People.

Attendees:

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
