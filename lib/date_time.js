var Moment = require('moment');

module.exports = function() {
  var dateTime = {
    isDate: false
  };

  // getYear
  dateTime.getYear = function() {
    return dateTime.year;
  };

  // getMonth
  dateTime.getMonth = function() {
    var month = dateTime.month;
    if (month < 10) {
      month = [0, month].join('');
    }
    return month;
  };

  // getDay
  dateTime.getDay = function() {
    var day = dateTime.day;
    if (day < 10) {
      day = [0, day].join('');
    }
    return day;
  };

  // getHours
  dateTime.getHours = function() {
    var hours = dateTime.hours;
    if (hours < 10) {
      hours = [0, hours].join('');
    }
    return hours;
  };

  // getMinutes
  dateTime.getMinutes = function() {
    var minutes = dateTime.minutes;
    if (minutes < 10) {
      minutes = [0, minutes].join('');
    }
    return minutes;
  };

  // getSeconds
  dateTime.getSeconds = function() {
    var seconds = dateTime.seconds;
    if (seconds < 10) {
      seconds = [0, seconds].join('');
    }
    return seconds;
  };

  // parseOffset
  // set .offset from a 'string'
  // accept: "+02:00"
  dateTime.parseOffset = function(offsetString) {
    var offsetHours = parseInt(offsetString.substring(0, 3));
    var offsetMinutes = parseInt(offsetString.substring(4, 6));

    dateTime.setOffsetInMinutes(offsetHours * 60 + offsetMinutes);
  };

  dateTime.setOffsetInMinutes = function(offsetInMinutes) {
    dateTime.offset = offsetInMinutes;
  };

  // parseISO8601
  // set dateTime from a 'string'
  // accept: "1986-10-18T13:10:05+02:00"
  dateTime.parseISO8601 = function(dateTimeString) {
    dateTime.year = parseInt(dateTimeString.substring(0, 4));
    dateTime.month = parseInt(dateTimeString.substring(5, 7));
    dateTime.day = parseInt(dateTimeString.substring(8, 10));
    dateTime.hours = parseInt(dateTimeString.substring(11, 13));
    dateTime.minutes = parseInt(dateTimeString.substring(14, 16));
    dateTime.seconds = parseInt(dateTimeString.substring(17, 19));

    // offset
    dateTime.parseOffset(dateTimeString.substring(20,25));
  };

  // set(year, month, day, hours, minutes, seconds, offset)
  // offset in minutes!
  dateTime.set = function(year, month, day, hours, minutes, seconds, offset) {
    dateTime.year = year;
    dateTime.month = month;
    dateTime.day = day;

    dateTime.hours = hours;
    dateTime.minutes = minutes;
    dateTime.seconds = seconds;

    dateTime.offset = offset;
  };

  // offsetToISO8601
  // return: "+HOURS:MINUTES";
  dateTime.offsetToISO8601 = function() {
    var sign = (dateTime.offset >= 0) ? '+' : '-';

    var hours = Math.floor(Math.abs(dateTime.offset) / 60);
    // Add 0 to format like 07 (instead of 7)
    if (hours < 10) {
      hours = '0' + hours;
    }

    var minutes = Math.abs(dateTime.offset % 60);
    // Add 0 to format like 07 (instead of 7)
    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    return [sign, hours, ':', minutes].join('');
  };

  // toISO8601
  dateTime.toISO8601 = function() {
    return [
      dateTime.year, '-', dateTime.getMonth(), '-', dateTime.getDay(),
      'T', dateTime.getHours(), ':', dateTime.getMinutes(), ':', dateTime.getSeconds(),
      dateTime.offsetToISO8601()
    ].join('');
  };

  // toICS
  // returns: 19980119T070000Z
  dateTime.toICS = function() {
    // Convert dateTime to UTC
    /*
      http://tools.ietf.org/html/rfc5545#section-3.3.5
      The date with UTC time, or absolute time, is identified by a LATIN
      CAPITAL LETTER Z suffix character, the UTC designator, appended to
      the time value.  For example, the following represents January 19,
      1998, at 0700 UTC:

       19980119T070000Z

      The "TZID" property parameter MUST NOT be applied to DATE-TIME
      properties whose time values are specified in UTC.
    */
    var moment = Moment(dateTime.toISO8601());
    return [moment.utc().format('YYYYMMDDTHHmmss'), 'Z'].join('');
  };

  return dateTime;
};