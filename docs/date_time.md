# VObject.dateTime [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.3.5)

This is a DATE-TIME value type to represent a calendar date and time. The object methods closely resembles the [`date`](./date.md) object.

Example:

```
20130813T213340Z
```

which translates to August 13th, 2013 - 9:33:40pm UTC

##### date.isDate()

- **returns** false because this object contains time data

##### date.isDateTime()

- **returns** true because this object contains both date and time data

##### date.parseDateTime(dateTimeString)

- `dateTimeString` to parse into year, month, day. Expects the format YYYY-MM-DDTHH:mm:ssZ. Ex: 2013-08-13T17:33:40-04:00

##### date.toICS()

- **returns** rendered iCalendar string representation of the DATE-TIME value type. Ex: 20130813T213340Z
