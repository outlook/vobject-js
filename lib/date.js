module.exports = function() {
  var date = {
    isDate: true
  };

  // set
  date.set = function(year, month, day) {
    date.year = year;
    date.month = month;
    date.day = day;
  };

  // parse
  // dateString: 1986-10-18
  date.parse = function(dateString) {
    date.year = dateString.substring(0, 4);
    date.month = dateString.substring(5, 7);
    date.day = dateString.substring(8, 10);
  };

  // http://tools.ietf.org/html/rfc5545#section-3.3.4
  date.toICS = function() {
    return [date.year, date.month, date.day].join('');
  };

  return date;
};