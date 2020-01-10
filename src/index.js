#!/usr/bin/env node

const fs = require('fs-extra');
const npm = require('npm');
const installRecipe = require('./utils/installRecipe');
const recipes = require('./recipes');
const packageJsonPath = `${process.cwd()}/package.json`;
let packageJson = null;

try {
    packageJson = require(packageJsonPath);
    packageJson = recipes.reduce((packageJson, recipe) =>
        installRecipe(packageJson)(recipe)
    );
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson));
    npm.load(() => {
        npm.commands.install([], () => {});
    });
} catch (e) {
    console.log(e);
    process.exit(1);
}
