# vobject.attendee() [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.8.4.1)

This is an ATTENDEE property of a VEVENT which is an instance of a [`person`](./docs/person.md) object. Multiple attendee properties can be added to an event.

Usage:

```js
var attendee = vobject.attendee();
attendee.setRole('REQ-PARTICIPANT');
attendee.setPartStat('NEEDS-ACTION');
attendee.setRSVP('TRUE');
attendee.toICS();
```

Example:

```
ATTENDEE;CUTYPE=INDIVIDUAL;ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;RSVP=TRUE;CN=Joey Dong;X-NUM-GUESTS=0:mailto:joey@sunrise.am
```

-----------------------------------------------------------------------------------------

##### attendee.setCUTYPE(cutype) [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.2.3)

- `cutype` to set for the attendee. Expects a STRING. Ex: `INDIVIDUAL`, `GROUP`, `RESOURCE`, `ROOM`

For the majority of cases, it should be set to `INDIVIDUAL`.

```
"INDIVIDUAL"   ; An individual
"GROUP"        ; A group of individuals
"RESOURCE"     ; A physical resource
"ROOM"         ; A room resource
"UNKNOWN"      ; Otherwise not known
x-name         ; Experimental type
iana-token)    ; Other IANA-registered
               ; type
; Default is INDIVIDUAL
```

##### attendee.getCUTYPE() [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.2.3)

- **returns** the cutype for the attendee

-----------------------------------------------------------------------------------------

##### attendee.setRole(role) [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.2.16)

- `role` to set for the attendee. Expects a STRING. Ex: `REQ-PARTICIPANT`

```
"REQ-PARTICIPANT"   ; Indicates a participant whose
                    ; participation is required
"OPT-PARTICIPANT"   ; Indicates a participant whose
                    ; participation is optional
"NON-PARTICIPANT"   ; Indicates a participant who
                    ; is copied for information
                    ; purposes only
```

##### attendee.getRole() [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.2.16)

- **returns** the role for the attendee

-----------------------------------------------------------------------------------------

##### attendee.setPartStat(partstat) [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.2.12)

- `partstat` to set for the attendee. Expects a STRING. Ex: `NEEDS-ACTION`, `ACCEPTED`, `DECLINED`, `TENTATIVE`

```
"NEEDS-ACTION"    ; Event needs action
"ACCEPTED"        ; Event accepted
"DECLINED"        ; Event declined
"TENTATIVE"       ; Event tentatively accepted
```

##### attendee.getPartStat() [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.2.12)

- **returns** the participation status for the attendee. Ex: `ACCEPTED`

-----------------------------------------------------------------------------------------

##### attendee.setRSVP(rsvp) [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.2.17)

- `rsvp` action for the attendee. Expects a STRING. Ex: `TRUE`, `FALSE`

Usually set to TRUE when an RSVP is requested and omitted otherwise.

##### attendee.getRSVP() [`RFC`](http://tools.ietf.org/html/rfc5545#section-3.2.17)

- **returns** the rsvp action for the attendee
