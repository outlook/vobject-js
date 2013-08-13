# VObject.person

This is a base structure of a person object. Person should only be instantiated by one of it's subclasses: [`attendee`](./attendee.md) or [`organizer`](./organizer.md)

##### person.setCUType(type) [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.2.3)

- `type` to set for the person. Ex: INDIVIDUAL

##### person.getCUType() [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.2.3)

- **returns** the CUTYPE parameter of the person

##### person.setCN(cn) [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.2.2)

- `cn` to set for the person. Ex: Joey Dong

##### person.getCN() [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.2.2)

- **returns** the CN parameter of the person

##### person.setMail(mail)
The contact email address for the person.

- `mail` to set for the person. Ex: joey@sunrise.am

##### person.getMail()
The contact email address for the person.

- **returns** the mail value of the person
