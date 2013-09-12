var vEvent = require('./event');

module.exports = function() {
  var todo = vEvent();
  todo.name = 'VTODO';

  return todo;
};
