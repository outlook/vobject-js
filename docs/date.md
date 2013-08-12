# Dates

VObject-JS includes a convenient way to handle Date and DateTime.

Date:

```js
var date = VObject.date();
date.set(1986, 10, 18);
// or
date.parse('1986-10-18');
```

DateTime:

```js
var dateTime = VObject.dateTime();
dateTime.set(1986, 10, 18, 13, 05, 00, 120); // last parameter is offset in minutes
// or
dateTime.parseISO8601('1986-10-18T13:00:00+02:00'); // ISO 8601 (with TimeZone support)
```

Then attach `date` or `dateTime` to an event:

```js
event.setDTStart(date)
event.setDTStart(dateTime)
```
