# vobject.property(name, value, parameters)

This is the base structure for an iCalendar vobject.

- `name` of the property. Ex: `CALSCALE`, `ORGANIZER`, `ATTENDEE`
- `value` of the property. Ex: `mailto:jeremy@sunrise.im`
- `parameters` additional parameters listed after the `name` and before the `value`. Ex: `CN=Joey Dong`, `ROLE=REQ-PARTICIPANT`, `CUTYPE=INDIVIDUAL`

Usage:

```js
var property = vobject.property('CALSCALE', 'GREGORIAN');
property.toICS(); // CALSCALE:GREGORIAN

var property = vobject.property('ATTENDEE', 'mailto:joey@sunrise.am');
property.setParameter('CUTYPE', 'INDIVIDUAL');
property.toICS(); // ATTENDEE;CUTYPE=INDIVIDUAL:mailto:joeydong@whitepixel.us
```

Examples:

```
CALSCALE:GREGORIAN

ORGANIZER;CN=jeremy@sunrise.im:mailto:jeremy@sunrise.im

ATTENDEE;CUTYPE=INDIVIDUAL;ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;RSVP=TRUE;CN=Joey Dong;X-NUM
```

-----------------------------------------------------------------------------------------

##### property.setParameter(name, value)

- `name` of the parameter. Ex: `CUTYPE`, `ROLE`, `PARTSTAT`
- `value` to set for the parameter `name`. Ex: `INDIVIDUAL`, `REQ-PARTICIPANT`, `NEEDS-ACTION`

##### property.getParameter(name)

- `name` of the parameter. Ex: `CUTYPE`, `ROLE`, `PARTSTAT`
- **returns** `value` of the parameter set with `name`, `undefined` by default

-----------------------------------------------------------------------------------------

##### property.setValue(value)

- `value` to set for the property. Ex: `mailto:jeremy@sunrise.im`

##### property.getValue()

- **returns** the value set for the property, `undefined` by default

-----------------------------------------------------------------------------------------

##### property.toICS()

- **returns** rendered iCalendar string representation of the property, `''` by default
