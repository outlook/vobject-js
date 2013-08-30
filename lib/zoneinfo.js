var _ = require('underscore');
var fs = require('fs');

module.exports = (function() {
  var zoneinfo = function(path) {
    if (path.indexOf('.ics') > 0) {
      // is ICS file
      var ics = fs.readFileSync(path, 'utf8').split('\r\n');

      // remove BEGIN:VCALENDAR, VERSION, CALSCALE, PRODID
      ics.splice(0, 4);

      // remove END:VCALENDAR
      ics.splice(ics.length - 2, 2);

      return ics;
    }
    else if (fs.statSync(path).isDirectory()) {
      // is directory, recurse deeper
      var zones = {};

      _.each(fs.readdirSync(path), function(file) {
        var subpath = path + '/' + file;
        var zoneName = (file.indexOf('.ics') > 0) ? file.substring(0, file.length - 4) : file;
        zones[zoneName] = zoneinfo(subpath);
      });

      return zones;
    }
  };

  return zoneinfo(__dirname + '/zoneinfo');
}());
