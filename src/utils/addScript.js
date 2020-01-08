const R = require('ramda');

module.exports = packageJson => script =>
    R.assocPath(['scripts', script.name], script.command, packageJson);
