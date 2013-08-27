# vobject.timezone(tzid) [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.6.5)

This is a VTIMEZONE component that automatically loads time zone definitions.

- `tzid` of the desired time zone to load

Example:

```js
var vcalendar = vobject.calendar();

var newYorkTimeZone = vobject.timezone('America/New_York');
vcalendar.pushComponent(newYorkTimeZone);

vcalendar.toICS();
```

Output:

```
BEGIN:VCALENDAR
VERSION:2.0
CALSCALE:GREGORIAN
PRODID:-//Sunrise Atelier, Inc//EN
BEGIN:VTIMEZONE
TZID:America/New_York
X-LIC-LOCATION:America/New_York
BEGIN:DAYLIGHT
TZOFFSETFROM:-0500
TZOFFSETTO:-0400
TZNAME:EDT
DTSTART:19700308T020000
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU
END:DAYLIGHT
BEGIN:STANDARD
TZOFFSETFROM:-0400
TZOFFSETTO:-0500
TZNAME:EST
DTSTART:19701101T020000
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU
END:STANDARD
END:VTIMEZONE
END:VCALENDAR
```

-----------------------------------------------------------------------------------------

##### timezone.toICSLines()

- **returns** VTIMEZONE definition lines to be used by [`component.toICS()`](./component.md)
