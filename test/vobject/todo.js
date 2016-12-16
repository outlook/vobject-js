'use strict';

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

  describe('setDue', function() {
    it('should handle dateTimeValue', function() {
      todo.setDue(vobject.dateTimeValue('1986-10-18T13:00:00+02:00'));
      assert.equal(todo.properties['DUE'][0].getParameter('VALUE'), undefined);
      assert.equal(todo.properties['DUE'][0].getParameter('TZID'), undefined);
      assert.equal(todo.properties['DUE'][0].value, '19861018T110000Z');
    });

    it('should handle floating dateTimeValue', function() {
      var dateTime = vobject.dateTimeValue('2013-08-16T17:00:00-04:00');
      dateTime.setTZID('America/New_York');
      todo.setDue(dateTime);
      assert.equal(todo.properties['DUE'][0].getParameter('VALUE'), undefined);
      assert.equal(todo.properties['DUE'][0].getParameter('TZID'), 'America/New_York');
      assert.equal(todo.properties['DUE'][0].value, '20130816T170000');
    });

    it('should handle dateValue', function() {
      todo.setDue(vobject.dateValue('1986-10-18'));
      assert.equal(todo.properties['DUE'][0].getParameter('VALUE'), 'DATE');
      assert.equal(todo.properties['DUE'][0].getParameter('TZID'), undefined);
      assert.equal(todo.properties['DUE'][0].value, '19861018');
    });

    it('should return reference to itself', function() {
      var dateTime = vobject.dateTimeValue('2013-08-16T17:00:00-04:00');
      dateTime.setTZID('America/New_York');
      var that = todo.setDue(dateTime);
      assert.equal(that, todo);
    });
  });

  describe('getDue', function() {
    it('should be undefined by default', function() {
      assert.equal(todo.getDue(), undefined);
    });

    it('should get DUE dateValue', function() {
      var property = vobject.property('DUE', '20130826');
      property.setParameter('VALUE', 'DATE');
      todo.properties['DUE'] = [property];
      assert.equal(todo.getDue().type, 'dateValue');
      assert.equal(todo.getDue().toICS(), '20130826');
    });

    it('should get DUE dateTimeValue in absolute time', function() {
      todo.properties['DUE'] = [vobject.property('DUE', '20130813T173000Z')];
      assert.equal(todo.getDue().type, 'dateTimeValue');
      assert.equal(todo.getDue().toDateTime(), '2013-08-13T17:30:00+00:00');
    });

    it('should get DUE dateTimeValue in floating time', function() {
      var property = vobject.property('DUE', '20130813T173000');
      property.setParameter('TZID', 'America/New_York');
      todo.properties['DUE'] = [property];
      assert.equal(todo.getDue().type, 'dateTimeValue');
      assert.equal(todo.getDue().getTZID(), 'America/New_York');
      assert.equal(todo.getDue().toDateTime(), '2013-08-13T21:30:00+00:00');
    });
  });

  describe('setCompleted', function() {
    it('should set COMPLETED', function() {
      var dateTime = vobject.dateTimeValue();
      dateTime.parseDateTime('1986-10-18T13:00:00+02:00');
      todo.setCompleted(dateTime);
      assert.equal(todo.getCompleted(), '19861018T110000Z');
    });

    it('should return reference to itself', function() {
      var dateTime = vobject.dateTimeValue();
      dateTime.parseDateTime('1986-10-18T13:00:00+02:00');
      var that = todo.setCompleted(dateTime);
      assert.equal(that, todo);
    });
  });

  describe('getCompleted', function() {
    it('should be undefined by default', function() {
      assert.equal(todo.getCompleted(), undefined);
    });

    it('should get COMPLETED', function() {
      var dateTime = vobject.dateTimeValue();
      dateTime.parseDateTime('1986-10-18T13:00:00+02:00');
      todo.setCompleted(dateTime);
      assert.equal(todo.getCompleted(), '19861018T110000Z');
    });
  });
});
