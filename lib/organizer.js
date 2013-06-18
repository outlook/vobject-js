var Person = require('./person');

module.exports = function() {
  var organizer = Person('ORGANIZER');
  return organizer;
};