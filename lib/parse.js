var _ = require('underscore');
var Property = require('./vobject/property');
var Component = require('./vobject/component');

module.exports = (function() {
  var self = {};

  /**
   * Split ICS text by CRLF and merge folded lines
   *
   * CRLF (Carriage Return Line Feed) is defined as the sequence `\r\n`
   * Folded lines are defined as a CLRF followed by whitespace character
   *
   * @param  {String} ics text to be split into lines
   * @return {Array}  lines parsed from the ics
   */
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

  /**
   * Unescapes strings according to iCal spec
   *
   * Characters to be unescaped are `;` (semicolon), `:` (colon), and `,` (comma)
   *
   * @param  {String} str to be unescaped
   * @return {String} unescaped string
   *
   * @ref http://tools.ietf.org/html/rfc5545#section-3.3.11
   */
  self.unescape = function(str) {
    return str.replace(/\\\;/g, ';').replace(/\\\:/g, ':').replace(/\\\,/g, ',');
  };

  /**
   * Parse component string into vobject component
   * @param  {String} componentStr to be parsed
   * @return {Object} vobject representation of the parsed string
   */
  self.parseComponent = function(componentStr) {
    var componentName = componentStr.split(':')[1];

    switch (componentName) {
    default:
      var component = new Component(componentName);
      return component;
    }
  };

  /**
   * Parse property string into vobject property
   * @param  {String} propertyStr to be parsed
   * @return {Object} vobject representation of the parsed string
   */
  self.parseProperty = function(propertyStr) {
    var propertyName = propertyStr.split(':')[0].split(';')[0].toUpperCase();

    switch (propertyName) {
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
      var property = new Property();
      property.parseICS(propertyStr);
      return property;
    }
  };

  /**
   * Parses ICS text into vobject components and properties
   * @param  {String} ics text to be parsed
   * @return {Object} base vobject component parsed from ics
   */
  self.parseICS = function(ics) {
    var lines = self.splitICS(ics);

    var component = null;

    _.each(lines, function(line) {
      var key = line.split(':')[0];

      if (key === 'BEGIN') {
        // BEGIN Component
        if (component === null) {
          // Base Component
          var baseComponent = self.parseComponent(line);
          baseComponent._parent = baseComponent;

          component = baseComponent;
        }
        else {
          // Attach Sub-Component
          var subComponent = self.parseComponent(line);
          subComponent._parent = component;

          component.pushComponent(subComponent);
          component = subComponent;
        }
      }
      else if (key === 'END') {
        // END Component
        var parent = component._parent;

        // Delete Parent Reference to maintain non-circular structure
        delete component._parent;

        component = parent;
      }
      else {
        // Property
        var property = self.parseProperty(line);

        if (property.isMultiProperty === true) {
          component.pushProperty(property);
        }
        else {
          component.setProperty(property);
        }
      }
    });

    return component;
  };

  return self;
}());
