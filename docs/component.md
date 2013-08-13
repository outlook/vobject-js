# VObject.component

This is the base iCalendar object which consists of [`properties`](./property.md) and child `components`.

#### Example:

```
BEGIN:VCALENDAR
  PRODID:-//Google Inc//Google Calendar 70.9054//EN
  VERSION:2.0
  CALSCALE:GREGORIAN
  METHOD:REQUEST
  BEGIN:VEVENT
    ORGANIZER;CN=jeremy@sunrise.im:mailto:jeremy@sunrise.im
    ATTENDEE;CUTYPE=INDIVIDUAL;RSVP=TRUE;CN=Joey Dong;X-NUM-GUESTS=0:mailto:joey@sunrise.am
    SEQUENCE:1
    STATUS:CONFIRMED
    SUMMARY:Night Photowalk
    TRANSP:OPAQUE
  END:VEVENT
END:VCALENDAR
```

`VCALENDAR` is an instance of a `VObject.component`, `PRODID, VERSION, CALSCALE` are properties of the component, and `VEVENT` is a sub-component.

#### var component = VObject.component(name)

- `name` of the component. Ex: `VCALENDAR`, `VEVENT`

#### component.pushProperty(property)

- `property` to push onto the component. Expects a [`property`](./property.md) object

#### component.getProperties(name)

- `name` of the property to retrieve
- **returns** an array of [`property`](./property.md) objects set for `name`, `[]` by default

#### component.setProperty(property)

- `property` to set as a unique property for the component. Expects a [`property`](./property.md) object

#### component.getProperty(name, index=0)

- `name` of the property to retrieve
- `index` of the property in cases of multiple instances of the property
- **returns** the [`property`](./property.md) object at the specified `name` and `index`, `undefined` by default

#### component.pushComponent(childComponent)

- `childComponent` to be pushed onto the component. Expects a `component` object

#### component.toICSLines()
- **returns** rendered iCalendar representation of the component as an array of lines

#### component.toICS()

- **returns** rendered iCalendar string representation of the component
