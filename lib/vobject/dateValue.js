module.exports = function(dateString) {
  // http://tools.ietf.org/html/rfc5545#section-3.3.4
  var dateValue = {
    type: 'dateValue'
  };

  dateValue.parseDate = function(dateString) {
    // dateString: 1986-10-18
    dateValue.year = parseInt(dateString.substring(0, 4), 10);
    dateValue.month = parseInt(dateString.substring(5, 7), 10);
    dateValue.day = parseInt(dateString.substring(8, 10), 10);    
    return this;
  };

  dateValue.toDate = function() {
    return [
      dateValue.year,
      (dateValue.month < 10) ? '0' + dateValue.month : dateValue.month,
      (dateValue.day < 10) ? '0' + dateValue.day : dateValue.day
    ].join('-');
  };

  dateValue.parseICS = function(ics) {
    // 20130826
    dateValue.year = parseInt(ics.substring(0, 4), 10);
    dateValue.month = parseInt(ics.substring(4, 6), 10);
    dateValue.day = parseInt(ics.substring(6, 8), 10);
    return this;
  };

  dateValue.toICS = function() {
    return [
      dateValue.year,
      (dateValue.month < 10) ? '0' + dateValue.month : dateValue.month,
      (dateValue.day < 10) ? '0' + dateValue.day : dateValue.day
    ].join('');
  };

  if (dateString) {
    dateValue.parseDate(dateString);
  }

  return dateValue;
};
