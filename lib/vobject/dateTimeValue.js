var moment = require('moment-timezone');

module.exports = function(dateTimeString) {
  // http://tools.ietf.org/html/rfc5545#section-3.3.5
  var dateTimeValue = {
    type: 'dateTimeValue'
  };

  dateTimeValue.parseDateTime = function(dateTimeString) {
    // dateTimeString: "1986-10-18T13:10:05+02:00"
    dateTimeValue.dateTime = moment(dateTimeString, 'YYYY-MM-DDTHH:mm:ssZ').utc();
  };

  dateTimeValue.parseTimestamp = function(timestamp) {
    // timestamp: 1346711343
    dateTimeValue.dateTime = moment.unix(timestamp).utc();
  };

  dateTimeValue.setTZID = function(tzid) {
    // TZID=America/New_York
    dateTimeValue.tzid = tzid;
  };

  dateTimeValue.getTZID = function() {
    return dateTimeValue.tzid;
  };

  dateTimeValue.toICS = function() {
    if (dateTimeValue.tzid) {
      // Floating Time: 20130822T110000
      if (dateTimeValue.tzid === 'Etc/GMT') {
        // workaround until moment-timezone is updated with https://github.com/moment/moment-timezone/commit/584212ebcfea749738300e59352284e20448f605
        return dateTimeValue.dateTime.utc().format('YYYYMMDDTHHmmss');
      }

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
