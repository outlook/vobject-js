'use strict';

var assert = require('assert');
var VObject = require('../../index');

describe('lib/vobject/person.js', function() {
  describe('setCUType', function() {
    it('should set CUTYPE', function(done) {
      var person = VObject.person();
      person.setParameter = function(name, value) {
        assert.equal(name, 'CUTYPE');
        assert.equal(value, 'value');
        done();
      };
      person.setCUType('value');
    });

    it('should return reference to itself', function() {
      var person = VObject.person();
      var that = person.setCUType('value');
      assert.equal(that, person);
    });
  });

  describe('getCUType', function() {
    it('should get CUTYPE', function() {
      var person = VObject.person();
      person.setCUType('value');
      assert.equal(person.getCUType(), 'value');
    });
  });

  describe('setCN', function() {
    it('should set CN (escaped)', function(done) {
      var person = VObject.person();
      person.setParameter = function(name, value) {
        assert.equal(name, 'CN');
        assert.equal(value, 'value\\n\\;\\,');
        done();
      };
      person.setCN('value\n;,');
    });

    it('should return reference to itself', function() {
      var person = VObject.person();
      var that = person.setCN('value');
      assert.equal(that, person);
    });
  });

  describe('getCN', function() {
    it('should default to undefined', function() {
      var person = VObject.person();
      assert.equal(person.getCN(), undefined);
    });

    it('should get CN (unescaped)', function() {
      var person = VObject.person();
      person.parameters['CN'] = 'value\\n\\;\\,';
      assert.equal(person.getCN(), 'value\n;,');
    });
  });

  describe('setMail', function() {
    it('should set VALUE to mailto:MAIL', function() {
      var person = VObject.person();
      person.setMail('user@domain.com');
      assert.equal(person.getValue(), 'mailto:user@domain.com');
    });

    it('should return reference to itself', function() {
      var person = VObject.person();
      var that = person.setMail('user@domain.com');
      assert.equal(that, person);
    });
  });

  describe('getMail', function() {
    it('should parse VALUE', function() {
      var person = VObject.person();
      person.setValue('mailto:user@domain.com');
      assert.equal(person.getMail(), 'user@domain.com');
    });

    it('should parse VALUE with capitalized MAILTO', function() {
      var person = VObject.person();
      person.setValue('MAILTO:user@domain.com');
      assert.equal(person.getMail(), 'user@domain.com');
    });
  });
});
