var moment = require('moment');

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

  dateTimeValue.toICS = function() {
    // 20130813T173000Z
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
