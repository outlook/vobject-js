var _ = require('underscore');
var fs = require('fs');

module.exports = (function() {
  var loadZones = function(path) {
    if (path.indexOf('.DS_Store') > 0) {
      return undefined;
    }

    if (path.indexOf('.ics') > 0) {
      // is ICS file
      var ics = fs.readFileSync(path, 'utf8').split('\n');

      // remove vcalendar
      ics.splice(0, 3);
      ics.splice(ics.length - 2, 2);

      // remove citadel.org from TZID
      ics[1] = 'TZID:' + _.rest(ics[1].split('/'), 3).join('/');

      return ics;
    }
    else {
      // is directory, recurse deeper
      var zones = {};

      _.each(fs.readdirSync(path), function(file) {
        var zoneName = (file.indexOf('.ics') > 0) ? file.substring(0, file.length - 4) : file;
        var subpath = path + '/' + file;

        zones[zoneName] = loadZones(subpath);
      });

      return zones;
    }
  };

  return loadZones(__dirname + '/zoneinfo');
}());
