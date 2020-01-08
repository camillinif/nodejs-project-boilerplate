#!/usr/bin/env node

const fs = require('fs-extra');
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
} catch (e) {
    console.log(e);
    process.exit(1);
}
