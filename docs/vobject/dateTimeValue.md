# vobject.dateTimeValue(dateTimeString='') [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.3.5)

This is a DATE-TIME value type to represent a calendar date and time as a value of a [`property`](./property.md). The object methods closely resembles the [`dateValue`](./dateValue.md) object.

- `dateTimeString` is an optional constructor date time string parameter in the format `YYYY-MM-DDTHH:mm:ssZ`. If omitted, the dateTimeValue is defaulted to the current date and time.

Example:

```
20130813T213340Z
```

which translates to August 13th, 2013 - 9:33:40pm UTC

#### dateTimeValue.type = 'dateTimeValue'
Type definition of the value. Useful when used in conjunction with [`properties`](./property.md).

#### dateTimeValue.parseDateTime(dateTimeString)

- `dateTimeString` to parse into year, month, day. Expects the format `YYYY-MM-DDTHH:mm:ssZ`. Ex: 2013-08-13T17:33:40-04:00

#### dateTimeValue.parseTimestamp(timestamp)

- `timestamp` to parse defined as seconds since UNIX epoch. Expects an INTEGER

#### dateTimeValue.toICS()

- **returns** rendered iCalendar string representation of the DATE-TIME value type. Ex: 20130813T213340Z
