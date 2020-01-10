const R = require('ramda');

module.exports = packageJson => customEntry =>
    R.assocPath(customEntry.path, customEntry.value, packageJson);
