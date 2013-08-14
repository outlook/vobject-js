var moment = require('moment');

module.exports = function(dateString) {
  // http://tools.ietf.org/html/rfc5545#section-3.3.4
  var dateValue = {
    year: 0,
    month: 0,
    day: 0
  };

  dateValue.isDate = function() {
    return true;
  };

  dateValue.isDateTime = function() {
    return false;
  };

  dateValue.parseDate = function(dateString) {
    // dateString: 1986-10-18
    dateValue.year = parseInt(dateString.substring(0, 4), 10);
    dateValue.month = parseInt(dateString.substring(5, 7), 10);
    dateValue.day = parseInt(dateString.substring(8, 10), 10);
  };

  dateValue.toICS = function() {
    return [dateValue.year, dateValue.month, dateValue.day].join('');
  };

  if (dateString) {
    dateValue.parseDate(dateString);
  }
  else {
    var now = moment();
    dateValue.year = now.year();
    dateValue.month = now.month();
    dateValue.day = now.day();
  }

  return dateValue;
};
