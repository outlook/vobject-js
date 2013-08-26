var _ = require('underscore');

module.exports = function(options) {
  // http://tools.ietf.org/html/rfc5545#section-3.3.6
  var durationValue = {
    type: 'durationValue'
  };

  durationValue.setDuration = function(options) {
    durationValue.value = (options.value === -1) ? -1 : 1;
    durationValue.day = (options.day >= 0) ? parseInt(options.day.toString(), 10) : undefined;
    durationValue.hour = (options.hour >= 0) ? parseInt(options.hour.toString(), 10) : undefined;
    durationValue.minute = (options.minute >= 0) ? parseInt(options.minute.toString(), 10) : undefined;
    durationValue.second = (options.second >= 0) ? parseInt(options.second.toString(), 10) : undefined;
  };

  durationValue.getDurationSeconds = function() {
    var seconds = 0;

    if (durationValue.day >= 0) {
      seconds += durationValue.day * 24 * 60 * 60;
    }

    if (durationValue.hour >= 0) {
      seconds += durationValue.hour * 60 * 60;
    }

    if (durationValue.minute >= 0) {
      seconds += durationValue.minute * 60;
    }

    if (durationValue.second >= 0) {
      seconds += durationValue.second;
    }

    seconds = seconds * durationValue.value;

    return seconds;
  };

  durationValue.parseICS = function(ics) {
    durationValue.value = (ics[0] === '-') ? -1 : 1;

    _.each(ics.split('P')[1].match(/[0-9]+[DHMS]/g), function(scalar) {
      var magnitude = scalar.substring(0, scalar.length - 1);
      var unit = scalar[scalar.length - 1];

      switch (unit) {
      case 'D':
        durationValue.day = parseInt(magnitude, 10);
        break;
      case 'H':
        durationValue.hour = parseInt(magnitude, 10);
        break;
      case 'M':
        durationValue.minute = parseInt(magnitude, 10);
        break;
      case 'S':
        durationValue.second = parseInt(magnitude, 10);
        break;
      }
    });
  };

  durationValue.toICS = function() {
    var ics = '';

    if (durationValue.value === -1 && (durationValue.day > 0 || durationValue.hour > 0 || durationValue.minute > 0 || durationValue.second > 0)) {
      ics += '-';
    }

    ics += 'P';

    if (durationValue.day >= 0) {
      ics += durationValue.day + 'D';
    }

    if (durationValue.day >= 0 && (durationValue.hour >= 0 || durationValue.minute >= 0 || durationValue.second >= 0)) {
      ics += 'T';
    }

    if (durationValue.hour >= 0) {
      ics += durationValue.hour + 'H';
    }

    if (durationValue.minute >= 0) {
      ics += durationValue.minute + 'M';
    }

    if (durationValue.second >= 0) {
      ics += durationValue.second + 'S';
    }

    return ics;
  };

  if (options) {
    durationValue.setDuration(options);
  }

  return durationValue;
};
