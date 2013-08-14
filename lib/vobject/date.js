module.exports = function() {
  // http://tools.ietf.org/html/rfc5545#section-3.3.4
  var date = {
    year: 0,
    month: 0,
    day: 0
  };

  date.isDate = function() {
    return true;
  };

  date.isDateTime = function() {
    return false;
  };

  date.setDate = function(year, month, day) {
    date.year = year;
    date.month = month;
    date.day = day;
  };

  date.parseDate = function(dateString) {
    // dateString: 1986-10-18
    date.year = dateString.substring(0, 4);
    date.month = dateString.substring(5, 7);
    date.day = dateString.substring(8, 10);
  };

  date.toICS = function() {
    return [date.year, date.month, date.day].join('');
  };

  return date;
};
