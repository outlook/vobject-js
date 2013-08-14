var _ = require('underscore');

module.exports = (function() {
  var self = {};

  // Split ICS File by CRLF and Merge Folded Lines
  self.splitICS = function(ics) {
    var unfoldedLines = [];

    _.each(ics.split(/\r\n/), function(line) {
      if (line.length > 0) {
        if (/[ \t]/.test(line[0])) {
          // Line Began with a Space or Tab, Fold with Previous Line
          unfoldedLines[unfoldedLines.length - 1] = unfoldedLines[unfoldedLines.length - 1] + line.slice(1);
        }
        else {
          // Save Line
          unfoldedLines.push(line);
        }
      }
    });

    return unfoldedLines;
  };

  // Escape Characters >  :;,  <
  self.unescape = function(str) {
    return str.replace(/\\\:/g, ':').replace(/\\\;/g, ';').replace(/\\\,/g, ',');
  };

  // Attempts to Parse into Object
  self.parseObject = function(key, val) {
    var kind = key.split(';')[0];

    switch (kind) {
/*
    case 'SUMMARY':
      return {
        key: 'summary',
        val: self.unescape(val)
      };

    case 'DTSTART':
      return self.vobjects.dt.parseDTSTART(key, val);

    case 'DTEND':
      return self.vobjects.dt.parseDTEND(key, val);

    case 'ATTENDEE':
      return self.vobjects.attendee.parseATTENDEE(key, val);

    case 'LOCATION':
      return {
        key: 'location',
        val: self.unescape(val)
      };

    case 'RECURRENCE-ID':
      return self.vobjects.rrule.parseRECURRENCEID(key, val);

    case 'EXDATE':
      return self.vobjects.rrule.parseEXDATE(key, val);

    case 'TRIGGER':
      return self.vobjects.alarm.parseTRIGGER(key, val);

    case 'ORGANIZER':
      return self.vobjects.attendee.parseORGANIZER(key, val);
*/
    default:
      return {
        key: key,
        val: val
      };
    }
  };

  // Convert ICS File into Tree Structure
  self.treeICS = function(ics) {
    var lines = self.splitICS(ics);

    var tree = {};
    var branch = tree;

    _.each(lines, function(line) {
      var colon = line.indexOf(':');
      var key = line.substring(0, colon);
      var val = line.substring(colon + 1, line.length);

      if (key === 'BEGIN') {
        // New Branch
        if (branch[val]) {
          if (_.isArray(branch[val])) {
            // Append BEGIN
            branch[val].push({
              _parent: branch
            });
            branch = branch[val][branch[val].length - 1];
          }
          else {
            // Create BEGIN Array
            branch[val] = [branch[val], {
              _parent: branch
            }];
            branch = branch[val][1];
          }
        }
        else {
          branch[val] = {
            _parent: branch
          };
          branch = branch[val];
        }
      }
      else if (key === 'END') {
        // End Branch
        var parent = branch._parent;

        if (branch && branch._parent) {
          // Delete Parent Reference to maintain non-circular structure
          delete branch._parent;
        }

        branch = parent;
      }
      else {
        var obj = self.parseObject(key, val);

        // Merge Duplicate Keys into Array
        if (branch[obj.key]) {
          if (_.isArray(branch[obj.key])) {
            if (_.isArray(obj.val)) {
              // Merge Arrays
              branch[obj.key].push(obj.val[0]);
            }
            else {
              // Append to Array
              branch[obj.key].push(obj.val);
            }
          }
          else {
            // Create Array
            branch[obj.key] = [branch[obj.key], obj.val];
          }
        }
        else {
          branch[obj.key] = obj.val;
        }
      }
    });

    return tree;
  };

  // Parse ICS into Tree Object
  self.parseICS = function(ics) {
    var tree = self.treeICS(ics);
    return tree;
  };

  return self;
}());
