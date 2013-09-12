var assert = require('assert');
var vobject = require('../../index');

var todo;
beforeEach(function() {
  todo = vobject.todo();
});

describe('lib/vobject/todo.js', function() {
  describe('initialize', function() {
    it('should set name to VTODO', function() {
      assert.equal(todo.name, 'VTODO');
    });
  });
});
