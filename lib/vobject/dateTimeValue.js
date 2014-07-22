var moment = require('moment-timezone');
var tz = require('timezone')(require('timezone/zones'));
var tzlinks = require('../tz-links');

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
    if (tzid) {
      // Floating Time, convert to UTC
      // tz(tz('2013-08-13T17:33:40', 'America/Los_Angeles'), '%Y%m%dT%H%M%S') => 20130814T21:33:40
      dateTimeValue.tzid = tzid;

      var localDateTimeString = [ics.substring(0, 4),ics.substring(4, 6),ics.substring(6, 8)].join('-') + 'T' + [ics.substring(9, 11), ics.substring(11, 13), ics.substring(13, 15)].join(':');
      var localDateTime = tz(localDateTimeString, tzlinks(tzid));
      dateTimeValue.dateTime = moment(tz(localDateTime, '%Y%m%dT%H%M%S') + 'Z', 'YYYYMMDDTHHmmssZ').utc();
    }
    else {
      // Absolute Time: 20130813T173000Z or Wall Clock Time: 20130813T173000
      dateTimeValue.floatingTime = (ics.indexOf('Z') !== ics.length - 1) ? true : false;

      var iso8601Date = [ics.substring(0, 4), ics.substring(4, 6), ics.substring(6, 8)].join('-') + 'T' + [ics.substring(9, 11), ics.substring(11, 13), ics.substring(13, 15)].join(':') + 'Z';
      dateTimeValue.dateTime = moment(new Date(iso8601Date)).utc();
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
