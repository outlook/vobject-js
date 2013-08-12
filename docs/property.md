# VObject.property
This is the base structure for an iCalendar vobject.

#### Examples:

- `CALSCALE:GREGORIAN`
- `ORGANIZER;CN=jeremy@sunrise.im:mailto:jeremy@sunrise.im`
- `ATTENDEE;CUTYPE=INDIVIDUAL;ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;RSVP=TRUE;CN=Joey Dong;X-NUM`

#### var property = VObject.property(name, value, parameters)

- `name` of the property. Ex: `CALSCALE`, `ORGANIZER`, `ATTENDEE`
- `value` of the property. Ex: `mailto:jeremy@sunrise.im`
- `parameters` additional parameters listed after the `name` and before the `value`. Ex: `CN=Joey Dong`, `ROLE=REQ-PARTICIPANT`, `CUTYPE=INDIVIDUAL`

#### property.getParameter(name)

- `name` of the parameter. Ex: `CUTYPE`, `ROLE`, `PARTSTAT`
- **returns** `value` of the parameter set with `name`, `undefined` by default

#### property.setParameter(name, value)

- `name` of the parameter. Ex: `CUTYPE`, `ROLE`, `PARTSTAT`
- `value` to set for the parameter `name`. Ex: `INDIVIDUAL`, `REQ-PARTICIPANT`, `NEEDS-ACTION`

#### property.getValue()

- **returns** the value set for the property, `undefined` by default

#### property.setValue(value)

- `value` to set for the property. Ex: `mailto:jeremy@sunrise.im`

#### property.toICS()

- **returns** rendered iCalendar string representation of the property, `''` by default
