# NodeJS Project Boilerplate

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

-   autoformatting code
-   git hooks
    -   `pre-commit`
        -   check dependencies
        -   code linting
    -   `commit-msg`
        -   linting of commit message [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/)
-   autogenerated changelog
    -   `npm run first-release`: generate changelog based on `conventional commit` type
    -   `npm run changelog`: update changelog based on `conventional commit` type

**N.B**: the version of package is not automatically bumped; these settings should be used in conjunction with a `git-flow` (for example [gitflow-avh](https://github.com/petervanderdoes/gitflow-avh)) tool, which will handle release management

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
-   `npm init -y && echo node_modules/ >> .gitignore`
-   `git add . && git commit -m 'build: init package.json'`
-   `<copy all settings from boilerplate>`
-   `git add . && git commit -m 'build: add project build settings'`
-   `git flow feature finish`
-   `git flow release start 1.0.0` (or another version)
-   `npm run first-release` (for version other than `1.0.0`, use `npm run changelog`)
-   `git flow release finish`
