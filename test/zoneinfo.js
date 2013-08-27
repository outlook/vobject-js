var assert = require('assert');
var _ = require('underscore');

var zoneinfo = require('../lib/zoneinfo');

describe('lib/zoneinfo.js', function() {
  it('should load 10 continents', function() {
    assert.ok(zoneinfo['Africa']);
    assert.ok(zoneinfo['America']);
    assert.ok(zoneinfo['Antarctica']);
    assert.ok(zoneinfo['Arctic']);
    assert.ok(zoneinfo['Asia']);
    assert.ok(zoneinfo['Atlantic']);
    assert.ok(zoneinfo['Australia']);
    assert.ok(zoneinfo['Europe']);
    assert.ok(zoneinfo['Indian']);
    assert.ok(zoneinfo['Pacific']);
  });

  it('should load matching ICS for zones', function() {
    var checkICS = function(zone) {
      _.each(zone, function(zoneICS, zoneName) {
        if (zoneName !== '.DS_Store') {
          if (_.isArray(zoneICS)) {
            // ics lines
            assert.equal(zoneName, _.last(zoneICS[1].split('/')));
          }
          else {
            // folder
            checkICS(zoneICS);
          }
        }
      });
    };
    checkICS(zoneinfo);
  });
});
