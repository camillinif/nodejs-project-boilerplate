#!/usr/bin/env node

const os = require('os');
const fs = require('fs-extra');
const R = require('ramda');

const directories = [
    'test',
    '.editorconfig',
    '.eslintrc',
    '.prettierrc',
    '.versionrc',
    'commitlint.config.js',
    'stryker.conf.js'
];

const copyPath = path => {
    console.log(`copying ${path}`);
    fs.copySync(`${__dirname}/../${path}`, `${process.cwd()}/${path}`);
};

const updatePackageJson = packageJsonPath => {
    console.log(`updating package.json`);

    let packageJson = null;

    try {
        packageJson = require(packageJsonPath);
    } catch (e) {
        console.log(packageJson);
        console.log(packageJsonPath);
        console.log(e);
        console.log(`you current work directrory is not a nodejs project`);
        process.exit(1);
    }

    packageJson = R.assocPath(
        ['scripts', 'test'],
        'jest --coverage',
        packageJson
    );

    packageJson = R.assocPath(
        ['scripts', 'check-dep'],
        'npm-check -p',
        packageJson
    );

    packageJson = R.assocPath(
        ['scripts', 'lint'],
        'eslint  --ignore-path .gitignore .',
        packageJson
    );

    packageJson = R.assocPath(
        ['scripts', 'changelog'],
        'standard-version --no-verify',
        packageJson
    );

    packageJson = R.assocPath(
        ['scripts', 'first-release'],
        'standard-version --first-release',
        packageJson
    );

    packageJson = R.assocPath(
        ['scripts', 'coverage'],
        'stryker run',
        packageJson
    );

    packageJson = R.assocPath(
        ['devDependencies', '@commitlint/config-angular'],
        '^8.2.0',
        packageJson
    );

    packageJson = R.assocPath(
        ['devDependencies', 'commitlint'],
        '^8.2.0',
        packageJson
    );

    packageJson = R.assocPath(
        ['devDependencies', 'eslint'],
        '^6.8.0',
        packageJson
    );

    packageJson = R.assocPath(
        ['devDependencies', 'eslint-config-prettier'],
        '^6.9.0',
        packageJson
    );

    packageJson = R.assocPath(
        ['devDependencies', 'eslint-plugin-prettier'],
        '^3.1.2',
        packageJson
    );

    packageJson = R.assocPath(
        ['devDependencies', 'husky'],
        '^3.1.0',
        packageJson
    );

    packageJson = R.assocPath(
        ['devDependencies', 'jest'],
        '^24.9.0',
        packageJson
    );

    packageJson = R.assocPath(
        ['devDependencies', 'npm-check'],
        '^5.9.0',
        packageJson
    );

    packageJson = R.assocPath(
        ['devDependencies', 'prettier'],
        '^1.19.1',
        packageJson
    );

    packageJson = R.assocPath(
        ['devDependencies', 'standard-version'],
        '^7.0.1',
        packageJson
    );

    packageJson = R.assocPath(
        ['devDependencies', '@stryker-mutator/core'],
        '^2.4.0',
        packageJson
    );

    packageJson = R.assocPath(
        ['devDependencies', '@stryker-mutator/javascript-mutator'],
        '^2.4.0',
        packageJson
    );

    packageJson = R.assocPath(
        ['devDependencies', '@stryker-mutator/jest-runner'],
        '^2.4.0',
        packageJson
    );

    packageJson = R.assocPath(
        ['husky', 'hooks', 'pre-commit'],
        'npm run check-dep && npm run lint && npm test',
        packageJson
    );

    packageJson = R.assocPath(
        ['husky', 'hooks', 'commit-msg'],
        'commitlint -E HUSKY_GIT_PARAMS',
        packageJson
    );

    packageJson = R.assocPath(
        ['standard-version', 'skip', 'tag'],
        true,
        packageJson
    );

    console.log(packageJson);
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson));
};

const createGitIgnore = () => {
    console.log('creating .gitignore');
    fs.writeFileSync(
        `${process.cwd()}/.gitignore`,
        `node_modules/${os.EOL}coverage/${os.EOL}`
    );
};

const createNpmIgnore = () => {
    console.log('creating .npmignore');
    fs.writeFileSync(`${process.cwd()}/.npmignore`, `coverage/${os.EOL}`);
};

updatePackageJson(`${process.cwd()}/package.json`);
directories.forEach(copyPath);
createGitIgnore();
createNpmIgnore();
