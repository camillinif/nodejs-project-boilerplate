const R = require('ramda');

module.exports = packageJson => dependency =>
    R.assocPath(
        ['devDependencies', dependency.library],
        dependency.version,
        packageJson
    );
