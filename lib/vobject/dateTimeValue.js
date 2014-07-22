var moment = require('moment-timezone');

module.exports = function(dateTimeString) {
  // http://tools.ietf.org/html/rfc5545#section-3.3.5
  var dateTimeValue = {
    type: 'dateTimeValue',
    floatingTime: false
  };

  dateTimeValue.parseDateTime = function(dateTimeString) {
    // dateTimeString: "1986-10-18T13:10:05+02:00"
    dateTimeValue.dateTime = moment(dateTimeString, 'YYYY-MM-DDTHH:mm:ssZ').utc();
  };

  dateTimeValue.toDateTime = function() {
    return dateTimeValue.dateTime.utc().format('YYYY-MM-DDTHH:mm:ssZ');
  };

  dateTimeValue.parseTimestamp = function(timestamp) {
    // timestamp: 1346711343
    dateTimeValue.dateTime = moment.unix(timestamp).utc();
  };

  dateTimeValue.toTimestamp = function() {
    return dateTimeValue.dateTime.utc().unix().toString();
  };

  dateTimeValue.setTZID = function(tzid) {
    // TZID=America/New_York
    if (moment.tz.zone(tzid)) {
      dateTimeValue.tzid = tzid;
    }
  };

  dateTimeValue.getTZID = function() {
    return dateTimeValue.tzid;
  };

  dateTimeValue.parseICS = function(ics, tzid) {
    if (tzid && moment.tz.zone(tzid)) {
      // DateTime with TZID, Convert to UTC
      dateTimeValue.tzid = tzid;
      dateTimeValue.dateTime = moment.tz(ics, 'YYYYMMDDTHHmmss', tzid).utc();
    }
    else {
      // Absolute DateTime (20130813T173000Z) or Floating DateTime (20130813T173000)
      dateTimeValue.floatingTime = (ics.indexOf('Z') !== ics.length - 1) ? true : false;
      dateTimeValue.dateTime = moment(ics, 'YYYYMMDDTHHmmssZ').utc();
    }
  };

  dateTimeValue.toICS = function() {
    if (dateTimeValue.tzid && moment.tz.zone(dateTimeValue.tzid)) {
      // Floating Time: 20130822T110000
      return dateTimeValue.dateTime.tz(dateTimeValue.tzid).format('YYYYMMDDTHHmmss');
    }

    // Absolute Time: 20130813T173000Z
    return [dateTimeValue.dateTime.utc().format('YYYYMMDDTHHmmss'), 'Z'].join('');
  };

  // Constructor
  if (dateTimeString) {
    dateTimeValue.parseDateTime(dateTimeString);
  }
  else {
    dateTimeValue.dateTime = moment().utc();
  }

  return dateTimeValue;
};
