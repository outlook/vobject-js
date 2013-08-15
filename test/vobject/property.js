var assert = require('assert');
var VObject = require('../../index');

describe('lib/vobject/property.js', function() {
  describe('initialize', function() {
    it('should set defaults for name, parameters, value', function() {
      var property = VObject.property();
      assert.equal(property.name, '');
      assert.deepEqual(property.parameters, {});
      assert.deepEqual(property.value, undefined);
    });

    it('should set .name UPPERCASE', function() {
      var property = VObject.property('calscale');
      assert.equal(property.name, 'CALSCALE');
    });

    it('should set .value', function() {
      var property = VObject.property(null, 'value');
      assert.equal(property.value, 'value');
    });

    it('should set .parameters', function() {
      var property = VObject.property(null, null, 'parameters');
      assert.equal(property.parameters, 'parameters');
    });
  });

  describe('setParameter', function() {
    it('should set .parameters[name]', function() {
      var property = VObject.property();
      property.setParameter('name', 'value');
      assert.equal(property.parameters['NAME'],  'value');
    });
  });

  describe('getParameter', function() {
    it('should get .parameters[name]', function() {
      var property = VObject.property();
      property.parameters['NAME'] = 'value';
      assert.equal(property.getParameter('name'),  'value');
    });

    it('should return undefined by default', function() {
      var property = VObject.property();
      assert.equal(property.getParameter('name'), undefined);
    });
  });

  describe('setValue', function() {
    it('should set .value', function() {
      var property = VObject.property();
      property.setValue('value');
      assert.equal(property.value, 'value');
    });
  });

  describe('getValue', function() {
    it('should get .value', function() {
      var property = VObject.property();
      property.value = 'value';
      assert.equal(property.getValue(), 'value');
    });

    it('should return undefined by default', function() {
      var property = VObject.property();
      assert.equal(property.getValue(), undefined);
    });
  });

  describe('toICS', function() {
    it('should return empty string by default', function() {
      var property = VObject.property();
      assert.equal(property.toICS(), '');
    });

    it('should format w/o parameters', function() {
      var property = VObject.property('calscale', 'GREGORIAN');
      assert.equal(property.toICS(), 'CALSCALE:GREGORIAN');
    });

    it('should format w/ parameters', function() {
      var property = VObject.property('ATTENDEE', 'mailto:pierre@valade.info');
      property.setParameter('PARTSTAT', 'NEEDS-ACTION');
      assert.equal(property.toICS(), 'ATTENDEE;PARTSTAT=NEEDS-ACTION:mailto:pierre@valade.info');
    });

    it('should format w/ multiple parameters', function() {
      var property = VObject.property('ATTENDEE', 'mailto:pierre@valade.info');
      property.setParameter('PARTSTAT', 'NEEDS-ACTION');
      property.setParameter('CN', 'Pierre Valade');
      assert.equal(property.toICS(), 'ATTENDEE;PARTSTAT=NEEDS-ACTION;CN=Pierre Valade:mailto:pierre@valade.info');
    });

    it('should format with undefined value', function() {
      var property = VObject.property('DESCRIPTION');
      assert.equal(property.toICS(), 'DESCRIPTION:');
    });

    it('should fold at 75 characters', function() {
      var property = VObject.property('DESCRIPTION', 'Interactive Telecommunications Program\\nTisch School of the Arts\\nNew York University\\n721 Broadway\\, 4th Floor\\, South Elevators\\nNew York NY 10003\\n\\nTake the left elevators to the 4th Floor\\nThis event is free and open to the public\\nNo need to RSVP');
      assert.equal(property.toICS(), 'DESCRIPTION:Interactive Telecommunications Program\\nTisch School of the Art\r\n s\\nNew York University\\n721 Broadway\\, 4th Floor\\, South Elevators\\nNew Yor\r\n k NY 10003\\n\\nTake the left elevators to the 4th Floor\\nThis event is free \r\n and open to the public\\nNo need to RSVP');
    });
  });
});
