# VObject.calendar()

This is a VCALENDAR component which is a subclass of the [`component`](./component.md) object.

Default properties:

`VERSION = 2.0`

`CALSCALE` = `GREGORIAN`

`PRODID` = `-//Sunrise Atelier, Inc//EN`

Example:

```
BEGIN:VCALENDAR
PRODID:-//Sunrise Atelier, Inc//EN
VERSION:2.0
CALSCALE:GREGORIAN
METHOD:REQUEST
END:VCALENDAR
```

#### calendar.setMethod(method)

- `method` associated with this calendar object. Ex: REQUEST

#### calendar.getMethod()

- **returns** the `method` set for this calendar
