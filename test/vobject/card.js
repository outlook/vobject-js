'use strict';

var assert = require('assert');
var vobject = require('../../index');

var card;
beforeEach(function() {
  card = vobject.card();
});

describe('lib/vobject/card.js', function() {
  describe('initialize', function() {
    it('should set name to VCARD', function() {
      assert.equal(card.name, 'VCARD');
    });
  });

  describe('getUID', function() {
    it('should return undefined by default', function() {
      assert.equal(card.getUID(), undefined);
    });

    it('should get UID', function() {
      card.properties['UID'] = [vobject.property('UID', 'value')];
      assert.equal(card.getUID(), 'value');
    });
  });

  describe('getFirstName', function() {
    it('should return undefined by default', function() {
      assert.equal(card.getFirstName(), undefined);
    });

    it('should return undefined on incomplete N structure', function() {
      card.properties['N'] = [vobject.property('N', 'last;first')];
      assert.equal(card.getFirstName(), undefined);
    });

    it('should return second N structure value', function() {
      card.properties['N'] = [vobject.property('N', 'last;first;middle;dr;jr')];
      assert.equal(card.getFirstName(), 'first');
    });
  });

  describe('getLastName', function() {
    it('should return undefined by default', function() {
      assert.equal(card.getLastName(), undefined);
    });

    it('should return undefined on incomplete N structure', function() {
      card.properties['N'] = [vobject.property('N', 'last;first')];
      assert.equal(card.getLastName(), undefined);
    });

    it('should return first N structure value', function() {
      card.properties['N'] = [vobject.property('N', 'last;first;middle;dr;jr')];
      assert.equal(card.getLastName(), 'last');
    });
  });

  describe('getName', function() {
    it('should return undefined by default', function() {
      assert.equal(card.getName(), undefined);
    });

    it('should get FN', function() {
      card.properties['FN'] = [vobject.property('FN', 'name')];
      assert.equal(card.getName(), 'name');
    });
  });

  describe('getEmails', function() {
    it('should return [] by default', function() {
      assert.deepEqual(card.getEmails(), []);
    });

    it('should get EMAIL properties', function() {
      card.properties['EMAIL'] = [
        vobject.property('EMAIL', 'email0'),
        vobject.property('EMAIL', 'email1')
      ];
      assert.equal(card.getEmails()[0].value, 'email0');
      assert.equal(card.getEmails()[1].value, 'email1');
    });
  });

  describe('getTelephoneNumbers', function() {
    it('should return [] by default', function() {
      assert.deepEqual(card.getTelephoneNumbers(), []);
    });

    it('should return TEL properties', function() {
      card.properties['TEL'] = [
        vobject.property('TEL', 'tel0'),
        vobject.property('TEL', 'tel1')
      ];
      assert.equal(card.getTelephoneNumbers()[0].value, 'tel0');
      assert.equal(card.getTelephoneNumbers()[1].value, 'tel1');
    });
  });

  describe('getBirthday', function() {
    it('should return undefined by default', function() {
      assert.equal(card.getBirthday(), undefined);
    });

    it('should get BDAY', function() {
      card.properties['BDAY'] = [vobject.property('BDAY', 'birthday')];
      assert.equal(card.getBirthday(), 'birthday');
    });
  });
});
