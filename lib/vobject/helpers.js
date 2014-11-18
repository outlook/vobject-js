
exports.escape = function(str) {
  str = str || '';
  return str.replace(/\n/g, '\\n').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/"/g, '\\"');
};

exports.unescape = function(str) {
  return str.replace(/\\n/g, '\n').replace(/\\;/g, ';').replace(/\\,/g, ',').replace(/\\"/g, '"');
};
