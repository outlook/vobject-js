var assert = require('assert');
var VObject = require('../../index');

describe('lib/person.js', function() {
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
  });

  describe('getCUType', function() {
    it('should get CUTYPE', function() {
      var person = VObject.person();
      person.setCUType('value');
      assert.equal(person.getCUType(), 'value');
    });
  });

  describe('setCN', function() {
    it('should set CN', function(done) {
      var person = VObject.person();
      person.setParameter = function(name, value) {
        assert.equal(name, 'CN');
        assert.equal(value, 'value');
        done();
      };
      person.setCN('value');
    });
  });

  describe('getCN', function() {
    it('should get CN', function() {
      var person = VObject.person();
      person.setCN('value');
      assert.equal(person.getCN(), 'value');
    });
  });

  describe('setMail', function() {
    it('should set VALUE to mailto:MAIL', function() {
      var person = VObject.person();
      person.setMail('user@domain.com');
      assert.equal(person.getValue(), 'mailto:user@domain.com');
    });
  });

  describe('getMail', function() {
    it('should parse VALUE', function() {
      var person = VObject.person();
      person.setValue('mailto:user@domain.com');
      assert.equal(person.getMail(), 'user@domain.com');
    });
  });
});
