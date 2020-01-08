# NodeJS Project Boilerplate

Setup for nodejs backend project

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

This setup includes:

-   autoformatting code
-   git hooks
    -   `pre-commit`
        -   check dependencies
        -   code linting
        -   test code
    -   `commit-msg`
        -   linting of commit message [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/)
-   autogenerated changelog
    -   `npm run first-release`: generate changelog based on `conventional commit` type
    -   `npm run changelog`: update changelog based on `conventional commit` type
-   mutation testing
    -   `npm run coverage`: run coverage over mutation testing (`stryker`)

**N.B**: the version of package is not automatically bumped; these settings should be used in conjunction with a `git-flow` (for example [gitflow-avh](https://github.com/petervanderdoes/gitflow-avh)) tool, which will handle release management

## Usage

````sh
npx nodejs-project-boilerplate
```

## Commit message type

The commit message type must follow the `conventional commit` convention based on [angular convention](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)

`type(scope): message`

### Type

Must be one of the following:

-   `build`: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
-   `ci`: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
-   `docs`: Documentation only changes
-   `feat`: A new feature
-   `fix`: A bug fix
-   `perf`: A code change that improves performance
-   `refactor`: A code change that neither fixes a bug nor adds a feature
-   `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
-   `test`: Adding missing tests or correcting existing tests

### Scope

The scope should be the name of the npm package affected (as perceived by the person reading the changelog generated from commit message

## Setup example

-   `git init`
-   `git flow init`
-   `<config git flow>`
-   `git flow feature start init-project`
-   `npx nodejs-project-boilerplate`
-   `git add . && git commit -m 'build: init project'`
-   `git flow feature finish`

## First release

-   `git flow release start 1.0.0` (or another version)
-   `npm run first-release` (for version other than `1.0.0`, use `npm run changelog`)
-   `git flow release finish`

## New release example

-   `git flow feature <feature-name> start`
-   `<develop and commit your new feature>`
-   `git flow feature finish`
-   `git flow release start x.y.x`
-   `npm run changelog`
-   `git flow release finish`
````
