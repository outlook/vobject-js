# vobject.durationValue(options = {}) [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.3.6)

This is a DURATION value type to represent a duration of time as a value of a [`property`](./property.md).

- `options` optional parameter which defines the duration to be initalized with. See [`durationValue.setDuration(options)`](./durationValue.md#durationvaluesetdurationoptions) for the list of valid options.

Usage:

```js
var durationValue = vobject.durationValue({
  value: -1,
  minute: 5
});
durationValue.toICS();    // -P5M
```

Examples:

`P0D` 0 Days AFTER

`-P0DT0H5M0S` 0 Days, 0 Hours, 5 Minutes, 0 Seconds BEFORE

`-P15M` 15 minutes BEFORE

-----------------------------------------------------------------------------------------

##### durationValue.type = `durationValue`
Type definition of the value. Useful when used in conjunction with [`properties`](./property.md).

-----------------------------------------------------------------------------------------

##### durationValue.setDuration(options)
Set the duration of the value. Valid options are:

- `value` which can be `-1`, `1`, or `undefined`
- `day` which can be `0`, a positive integer, or `undefined`
- `hour` which can be `0`, a positive integer, or `undefined`
- `minute` which can be `0`, a positive integer, or `undefined`
- `second` which can be `0`, a positive integer, or `undefined`

##### durationValue.getDurationSeconds()

- **returns** Integer seconds representation of the duration value

-----------------------------------------------------------------------------------------

##### durationValue.parseICS()

- `ics` to be parsed. See [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.3.6) for accepted formats

##### durationValue.toICS()

- **returns** rendered iCalendar string representation of the DURATION value type. Ex: `-P5M`
