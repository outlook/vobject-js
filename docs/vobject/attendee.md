# VObject.attendee() [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.4.1)

This is an ATTENDEE property of a VEVENT which is an instance of a [`person`](./docs/person.md) object. Multiple attendee properties can be added to an event.

Example:

```
ATTENDEE;CUTYPE=INDIVIDUAL;ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;RSVP=TRUE;CN=Joey Dong;X-NUM-GUESTS=0:mailto:joey@sunrise.am
```

##### attendee.setRole(role) [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.2.16)

- `role` to set for the attendee. Expects a STRING. Ex: `REQ-PARTICIPANT`

##### attendee.getRole() [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.2.16)

- **returns** the role for the attendee

##### attendee.setPartStat(partstat) [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.2.12)

- `partstat` to set for the attendee. Expects a STRING. Ex: `NEEDS-ACTION`

##### attendee.getPartStat() [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.2.12)

- **returns** the participation status for the attendee. Ex: `ACCEPTED`

##### attendee.setRSVP(rsvp) [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.2.17)

- `rsvp` action for the attendee. Expects a STRING. Ex: TRUE

##### attendee.getRSVP() [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.2.17)

- **returns** the rsvp action for the attendee
