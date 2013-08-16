# vobject.calendar() [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.7)

This is a VCALENDAR component which is a subclass of the [`component`](./component.md) object. The following properties are set by default:
`VERSION = 2.0`, `CALSCALE = GREGORIAN`, `PRODID = -//Sunrise Atelier, Inc//EN`.

Usage:

```js
var calendar = vobject.calendar();
calendar.setMethod('REQUEST');
calendar.toICS();
```

Example:

```
BEGIN:VCALENDAR
PRODID:-//Sunrise Atelier, Inc//EN
VERSION:2.0
CALSCALE:GREGORIAN
METHOD:REQUEST
END:VCALENDAR
```

-----------------------------------------------------------------------------------------

##### calendar.setMethod(method) [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.7.2) [`RFC2`](http://tools.ietf.org/html/rfc2446#section-3.2)

- `method` associated with this calendar object. Ex: `PUBLISH`, `REQUEST`, `REPLY`, `ADD`, `CANCEL`, `REFRESH`, `COUNTER`, `DECLINECOUNTER`

```
+================+==================================================+
| Method         |  Description                                     |
|================+==================================================|
| PUBLISH        | Post notification of an event. Used primarily as |
|                | a method of advertising the existence of an      |
|                | event.                                           |
|                |                                                  |
| REQUEST        | Make a request for an event. This is an explicit |
|                | invitation to one or more "Attendees". Event     |
|                | Requests are also used to update or change an    |
|                | existing event. Clients that cannot handle       |
|                | REQUEST may degrade the event to view it as an   |
|                | PUBLISH.                                         |
|                |                                                  |
| REPLY          | Reply to an event request. Clients may set their |
|                | status ("partstat") to ACCEPTED, DECLINED,       |
|                | TENTATIVE, or DELEGATED.                         |
|                |                                                  |
| ADD            | Add one or more instances to an existing event.  |
|                |                                                  |
| CANCEL         | Cancel one or more instances of an existing      |
|                | event.                                           |
|                |                                                  |
| REFRESH        | A request is sent to an "Organizer" by an        |
|                | "Attendee" asking for the latest version of an   |
|                | event to be resent to the requester.             |
|                |                                                  |
| COUNTER        | Counter a REQUEST with an alternative proposal,  |
|                | Sent by an "Attendee" to the "Organizer".        |
|                |                                                  |
| DECLINECOUNTER | Decline a counter proposal. Sent to an           |
|                | "Attendee" by the "Organizer".                   |
+================+==================================================+
```

##### calendar.getMethod()

- **returns** the `method` set for this calendar
