module.exports = function() {
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

  dateValue.setDate = function(year, month, day) {
    dateValue.year = year;
    dateValue.month = month;
    dateValue.day = day;
  };

  dateValue.parseDate = function(dateString) {
    // dateString: 1986-10-18
    dateValue.year = dateString.substring(0, 4);
    dateValue.month = dateString.substring(5, 7);
    dateValue.day = dateString.substring(8, 10);
  };

  dateValue.toICS = function() {
    return [dateValue.year, dateValue.month, dateValue.day].join('');
  };

  return dateValue;
};
