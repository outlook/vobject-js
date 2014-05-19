# vobject.todo() [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.6.2)

This is a VTODO component which is a subclass of the ['vEvent'](./event.md) object.

-----------------------------------------------------------------------------------------

##### todo.setDue(date) [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.2.3)

- `date` to set as the due date. Expects either a [`dateValue`](./dateValue.md) or [`dateTimeValue`](./dateTimeValue.md) object. If a TZID is specified for the dateTimeValue, the property will be set with a floating date format. See [`dateTimeValue.toICS()`](./dateTimeValue.md#datetimevaluetoics) for more information

##### todo.getDue() [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.2.3)

- **returns** the [`dateValue`](./dateValue.md) or [`dateTimeValue`](./dateTimeValue.md) set as the due date for the todo, otherwise `undefined` by default
