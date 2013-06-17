var assert = require('assert');
var VObject = require('../index');

describe('initialize', function() {
  it('should set .name UPPERCASE', function() {
    var property = VObject.property('calscale');
    assert.equal(property.name, 'CALSCALE');
  });
});

describe('toICS', function() {
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
});

describe('getParameter', function() {
  it('should get .parameters[name]', function() {
    var property = VObject.property();
    property.setParameter('name', 'value');
    assert.equal(property.getParameter('name'),  'value');
  });
});

describe('setParameter', function() {
  it('should set .parameters[name]', function() {
    var property = VObject.property();
    property.setParameter('name', 'value');
    assert.equal(property.parameters['name'],  'value');
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
});