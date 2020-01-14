#!/usr/bin/env node

const fs = require('fs-extra').promises;
const npm = require('npm');
const installRecipe = require('./utils/installRecipe');
const recipes = require('./recipes');
const packageJsonPath = `${process.cwd()}/package.json`;

const readPackageJson = packageJsonPath =>
    Promise.resolve(
        fs
            .readFile(packageJsonPath)
            .then(buffer => JSON.parse(buffer.toString()))
    );
const installRecipes = packageJson =>
    recipes.reduce(
        (packageJson, recipe) => installRecipe(packageJson)(recipe),
        packageJson
    );

const writePackageJson = packageJson =>
    fs.writeFile(packageJsonPath, JSON.stringify(packageJson));
const installDependencies = npm.load(() => {
    npm.commands.install([], () => {});
});

readPackageJson(packageJsonPath)
    .then(installRecipes)
    .then(writePackageJson)
    .then(installDependencies)
    .catch(e => {
        console.log(e);
        process.exit(1);
    });
