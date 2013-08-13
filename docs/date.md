# VObject.date [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.3.4)

This is a DATE value type to represent a calendar date. The object methods closely resembles the [`date time`](./date_time.md) object.

Example:

```
20130714
```

which translates to July 14th, 2013

##### date.isDate()

- **returns** true because this object has no time data

##### date.isDateTime()

- **returns** false because this object has no time data

##### date.setDate(year, month, day)

- `year` to set for the date. Ex: 2013
- `month` to set for the date. Ex: 7
- `day` to set for the date. Ex: 14

##### date.parseDate(dateString)

- `dateString` to parse into year, month, day. Expects the format YYYY-MM-DD. Ex: 2013-07-14

##### date.toICS()

- **returns** rendered iCalendar string representation of the DATE value type. Ex: 20130714
