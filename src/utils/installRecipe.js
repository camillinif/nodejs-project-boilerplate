const copyPath = require('./copyPath');
const addScript = require('./addScript');
const addDependency = require('./addDependency');
const addCustomEntry = require('./addCustomEntry');

module.exports = packageJson => recipe => {
    recipe.paths.forEach(path => copyPath(path));

    packageJson = recipe.scripts.reduce(
        (packageJson, script) => addScript(packageJson)(script),
        packageJson
    );

    packageJson = recipe.dependencies.reduce(
        (packageJson, dependency) => addDependency(packageJson)(dependency),
        packageJson
    );

    packageJson = recipe.customEntries.reduce(
        (packageJson, customEntry) => addCustomEntry(packageJson)(customEntry),
        packageJson
    );

    return packageJson;
};
