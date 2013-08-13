var moment = require('moment');

module.exports = function() {
  // http://tools.ietf.org/html/rfc5545#section-3.3.5
  var dateTime = {};

  dateTime.isDate = function() {
    return false;
  };

  dateTime.isDateTime = function() {
    return true;
  };

  dateTime.parseDateTime = function(dateTimeString) {
    // dateTimeString: "1986-10-18T13:10:05+02:00"
    dateTime.dateTime = moment(dateTimeString, 'YYYY-MM-DDTHH:mm:ssZ').utc();
  };

  dateTime.toICS = function() {
    // 20130813T173000Z
    return [dateTime.dateTime.utc().format('YYYYMMDDTHHmmss'), 'Z'].join('');
  };

  return dateTime;
};
