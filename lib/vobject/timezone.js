var zoneinfo = require('../zoneinfo');
var Component = require('./component');

module.exports = function(tzid) {
  // http://tools.ietf.org/html/rfc5545#section-3.6.5
  var timezone = new Component('VTIMEZONE');
  timezone.tzid = tzid;

  timezone.toICSLines = function() {
    var zonepath = timezone.tzid.split('/');

    var ics = zoneinfo;
    for (var i = 0; i < zonepath.length; i++) {
      ics = ics[zonepath[i]];
    }

    return ics;
  };

  return timezone;
};
