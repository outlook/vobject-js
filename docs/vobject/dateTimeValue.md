## vobject.dateTimeValue(dateTimeString='') [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.3.5)

This is a DATE-TIME value type to represent a calendar date and time as a value of a [`property`](./property.md). The object methods closely resembles the [`dateValue`](./dateValue.md) object.

- `dateTimeString` is an optional constructor date time string parameter in the format `YYYY-MM-DDTHH:mm:ssZ`. If omitted, the dateTimeValue is defaulted to the current date and time.

Usage:

```js
var dateTimeValue = vobject.dateTimeValue('2013-08-13T17:33:40-04:00');
dateTimeValue.toICS(); // 20130813T213340Z

var dateTimeValue = vobject.dateTimeValue('2013-08-13T17:33:40-04:00');
dateTimeValue.setTZID('America/New_York');
dateTimeValue.toICS(); // 20130813173340
```

which translates to August 13th, 2013 - 9:33:40pm UTC

-----------------------------------------------------------------------------------------

##### dateTimeValue.type = 'dateTimeValue'
Type definition of the value. Useful when used in conjunction with [`properties`](./property.md).

-----------------------------------------------------------------------------------------

##### dateTimeValue.parseDateTime(dateTimeString)

- `dateTimeString` to parse. Expects the format `YYYY-MM-DDTHH:mm:ssZ`. Ex: 2013-08-13T17:33:40-04:00

##### dateTimeValue.toDateTime()

- **returns** rendered date time string representation of the DATE-TIME value type with the UTC offset. Ex: `2013-08-13T21:33:40+00:00`

-----------------------------------------------------------------------------------------

##### dateTimeValue.parseTimestamp(timestamp)

- `timestamp` to parse defined as seconds since UNIX epoch. Expects an INTEGER

-----------------------------------------------------------------------------------------

##### dateTimeValue.setTZID(tzid)

- `tzid` to set for the date time value. Expects a TZID string. Ex: `America/New_York`, `Europe/Paris`

##### dateTimeValue.getTZID()

- **returns** the tzid set for the date time value. Will only work if a time zone name is explicited defined. Date offsets (-04:00) do not have enough information to derive a time zone.

-----------------------------------------------------------------------------------------

##### dateTimeValue.parseICS(ics)

- `ics` string to parse. Expects the format `YYYYMMDDTHHmmssZ`. Ex: `20130823T213340Z`

##### dateTimeValue.toICS()

- **returns** rendered iCalendar string representation of the DATE-TIME value type. If a time zone is set for the value, this will return a floating representation in the format `YYYYMMDDTHHmmss`. Otherwise it will return a UTC representation in the format `YYYYMMDDTHHmmssZ`
