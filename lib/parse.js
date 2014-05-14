var _ = require('underscore');

module.exports = (function() {
  var self = {};

  self.vobject = require('./vobject');

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

    _.each(ics.split(/[\r\n]{1,2}/), function(line) {
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
   * Parse component string into vobject component
   * @param  {String} componentStr to be parsed
   * @return {Object} vobject representation of the parsed string
   */
  self.parseComponent = function(componentStr) {
    var componentName = componentStr.split(':')[1];

    switch (componentName) {
    case 'VCALENDAR':
      var calendarComponent = self.vobject.calendar();
      return calendarComponent;

    case 'VEVENT':
      var eventComponent = self.vobject.event();
      return eventComponent;

    case 'VTODO':
      var todoComponent = self.vobject.todo();
      return todoComponent;

    case 'VALARM':
      var alarmComponent = self.vobject.alarm();
      return alarmComponent;

    case 'VCARD':
      var cardComponent = self.vobject.card();
      return cardComponent;

    default:
      var component = self.vobject.component(componentName);
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
    case 'ATTENDEE':
      var attendeeProperty = self.vobject.attendee();
      attendeeProperty.parseICS(propertyStr);
      return attendeeProperty;

    case 'ORGANIZER':
      var organizerProperty = self.vobject.organizer();
      organizerProperty.parseICS(propertyStr);
      return organizerProperty;

    default:
      var property = self.vobject.property();
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
        component.pushProperty(property);
      }
    });

    return component;
  };

  return self;
}());
