# vobject.card() [`RFC`](https://tools.ietf.org/html/rfc6350)

This is a VCARD component which is a subclass of the [`component`](./component.md) object.

Example:

```
BEGIN:VCARD
UID:865c12dd
N:Dong;Joey;;;
FN:Joey Dong
EMAIL:joey@sunrise.am
TEL:1234567890
BDAY:2014-05-13
END:VCARD
```

-----------------------------------------------------------------------------------------

##### card.getUID() [`RFC`](https://tools.ietf.org/html/rfc6350#section-6.7.6)

- **returns** the UID for the card or `undefined` by default

-----------------------------------------------------------------------------------------

##### card.getFirstName() [`RFC`](https://tools.ietf.org/html/rfc6350#section-6.2.2)

- **returns** the first name (given name) from the `N` name property if available or `undefined` by default

-----------------------------------------------------------------------------------------

##### card.getLastName() [`RFC`](https://tools.ietf.org/html/rfc6350#section-6.2.2)

- **returns** the last name (family name) from the `N` name property if available or `undefined` by default

-----------------------------------------------------------------------------------------

##### card.getName() [`RFC`](https://tools.ietf.org/html/rfc6350#section-6.2.1)

- **returns** the string value of the `FN` property for the card or `undefined` by default

-----------------------------------------------------------------------------------------

##### card.getEmails() [`RFC`](https://tools.ietf.org/html/rfc6350#section-6.4.2)

- **returns** an array of `EMAIL` properties or `[]` by default

-----------------------------------------------------------------------------------------

##### card.getTelephoneNumbers() [`RFC`](https://tools.ietf.org/html/rfc6350#section-6.4.1)

- **returns** an array of `TEL` properties or `[]` by default

-----------------------------------------------------------------------------------------

##### card.getBirthday() [`RFC`](https://tools.ietf.org/html/rfc6350#section-6.2.5)

- **returns** the string value of the `BDAY` property for the card or `undefined` by default
