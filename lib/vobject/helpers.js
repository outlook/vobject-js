'use strict';

exports.escape = function(str) {
  str = str || '';
  return str.replace(/[\\\n;,]/g, function(match) {
    return '\\' + (match === '\n' ? 'n' : match);
  });
};

exports.unescape = function(str) {
  return str.replace(/\\[\\nN;,]/g, function(match) {
    return (match === '\\n' || match === '\\N') ? '\n' : match.substr(1);
  });
};
