'use strict';

var assert = require('assert');
var vobject = require('../../lib/vobject');

describe('lib/vobject/durationValue.js', function() {
  describe('initialize', function() {
    it('type should be durationValue', function() {
      var durationValue = vobject.durationValue();
      assert.equal(durationValue.type, 'durationValue');
    });

    it('should accept constructor options', function() {
      var durationValue = vobject.durationValue({
        value: -1,
        minute: 5
      });
      assert.equal(durationValue.value, -1);
      assert.equal(durationValue.minute, 5);
    });
  });

  describe('setDuration', function() {
    it('should set duration as integers', function() {
      var durationValue = vobject.durationValue();
      durationValue.setDuration({
        value: -1,
        day: '5',
        hour: '4',
        minute: '3',
        second: '2'
      });
      assert.equal(durationValue.value, -1);
      assert.equal(durationValue.day, 5);
      assert.equal(durationValue.hour, 4);
      assert.equal(durationValue.minute, 3);
      assert.equal(durationValue.second, 2);
    });

    it('should reset values to undefined', function() {
      var durationValue = vobject.durationValue();
      durationValue.setDuration({
        value: 1,
        day: 5
      });
      assert.equal(durationValue.value, 1);
      assert.equal(durationValue.day, 5);
      assert.equal(durationValue.hour, undefined);
      assert.equal(durationValue.minute, undefined);
      assert.equal(durationValue.second, undefined);
    });

    it('should return reference to itself', function() {
      var durationValue = vobject.durationValue();
      var that = durationValue.setDuration({
        value: 1,
        day: 5
      });
      assert.equal(that, durationValue);
    });
  });

  describe('getDurationSeconds', function() {
    it('should return negative seconds with one unit set', function() {
      var durationValue = vobject.durationValue({
        value: -1,
        hour: 2
      });
      assert.strictEqual(durationValue.getDurationSeconds(), -7200);
    });

    it('should return seconds with every unit set', function() {
      var durationValue = vobject.durationValue({
        value: 1,
        day: 2,
        hour: 4,
        minute: 5,
        second: 10
      });

      assert.strictEqual(durationValue.getDurationSeconds(), 187510);
    });
  });

  describe('parseICS', function() {
    it('should parse duration value', function() {
      var durationValue = vobject.durationValue();
      durationValue.parseICS('-P5DT4H3M2S');
      assert.equal(durationValue.value, -1);
      assert.equal(durationValue.day, 5);
      assert.equal(durationValue.hour, 4);
      assert.equal(durationValue.minute, 3);
      assert.equal(durationValue.second, 2);
    });

    it('should parse day duration value', function() {
      var durationValue = vobject.durationValue();
      durationValue.parseICS('P5D');
      assert.equal(durationValue.value, 1);
      assert.equal(durationValue.day, 5);
      assert.equal(durationValue.hour, undefined);
      assert.equal(durationValue.minute, undefined);
      assert.equal(durationValue.second, undefined);
    });

    it('should parse time duration value', function() {
      var durationValue = vobject.durationValue();
      durationValue.parseICS('-P15M');
      assert.equal(durationValue.value, -1);
      assert.equal(durationValue.day, undefined);
      assert.equal(durationValue.hour, undefined);
      assert.equal(durationValue.minute, 15);
      assert.equal(durationValue.second, undefined);
    });

    it('should return reference to itself', function() {
      var durationValue = vobject.durationValue();
      var that = durationValue.parseICS('-P15M');
      assert.equal(that, durationValue);
    });
  });

  describe('toICS', function() {
    it('should render duration value', function() {
      var durationValue = vobject.durationValue();
      durationValue.setDuration({
        value: -1,
        day: 5,
        hour: 4,
        minute: 3,
        second: 2
      });
      assert.equal(durationValue.toICS(), '-P5DT4H3M2S');
    });

    it('should render day duration value', function() {
      var durationValue = vobject.durationValue();
      durationValue.setDuration({
        value: 1,
        day: 5
      });
      assert.equal(durationValue.toICS(), 'P5D');
    });

    it('should render time duration value', function() {
      var durationValue = vobject.durationValue();
      durationValue.setDuration({
        value: -1,
        minute: 15
      });
      assert.equal(durationValue.toICS(), '-P15M');
    });

    it('should ignore value when duration is zero', function() {
      var durationValue = vobject.durationValue();
      durationValue.setDuration({
        value: -1,
        minute: 0
      });
      assert.equal(durationValue.toICS(), 'P0M');
    });
  });
});
