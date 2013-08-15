# vobject.alarm() [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.6.6)

This is a VALARM component which is a subclass of the [`component`](./component.md) object.

#### alarm.setAction(action)

- `action` of the alarm. Expects a STRING. Ex: DISPLAY, AUDIO, EMAIL

#### alarm.getAction()

- **returns** the action of the alarm. Ex: DISPLAY, AUDIO, EMAIL

#### alarm.setDescription(description)

- `description` of the alarm. Expects a STRING. Ex: This is an event reminder

#### alarm.getDescription()

- **returns** the description of the alarm. Ex: This is an event reminder

#### alarm.setTrigger(trigger)

- `trigger` to set for the alarm. Expects either a [`durationValue`](./durationValue.md) or [`dateTimeValue`](./dateTimeValue.md) object.

#### alarm.getTrigger(trigger)

- **returns** the [`property`](./property.md) set as the trigger for the alarm.
