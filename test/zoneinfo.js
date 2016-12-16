'use strict';

var assert = require('assert');
var _ = require('underscore');

var zoneinfo = require('../lib/zoneinfo');

describe('lib/zoneinfo.js', function() {
  it('should load matching ICS definition for zoneinfo object', function() {
    var checkICSDefinition = function(zone) {
      _.each(zone, function(zoneDefinition, zoneName) {
        if (_.isArray(zoneDefinition)) {
          // check definition
          var tzid = _.last(zoneDefinition[1].split(':'));
          assert.equal(zoneName, _.last(tzid.split('/')));
        }
        else {
          checkICSDefinition(zoneDefinition);
        }
      });
    };

    checkICSDefinition(zoneinfo);
  });
});
