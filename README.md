## Installation

```script
yarn
```

Note. On Linux you may have to install `autoconf` package to have a successful
installation. On Ubuntu it should be enough to run
`sudo apt-get install autoconf` command to install the package.

## Local development

```script
yarn start
```

This command starts a local development server and open up a browser window.
Most changes are reflected live without having to restart the server.

## Build for production

```script
yarn build
```

This command generates static content into the `build` directory and can be
served using any static contents hosting service. For that purpose, you can also
use:

```script
yarn serve
```

# Contributing

Feel free to contribute to the project by forking the repository and submitting
pull requests.

## Guidelines

Consult the
[guidelines](https://github.com/esx-framework//blob/master/docs/__guidelines/markdown.md).

## Lexicon

Consult the
[lexicon](https://github.com/esx-framework//blob/master/docs/__guidelines/lexicon.md)
for terminology we commonly use

## Commits

The commit messages must follow the
[Conventional Commits](https://conventionalcommits.org/) spec.

# Code Quality

## 1. Linting

The coding style rules are defined by [Prettier](https://prettier.io/) and
enforced by [Eslint](https://eslint.org)

On top of this, we follow the rules set by the
[JavaScript Standard Style](https://standardjs.com/rules.html).

You do not need to run the linting task manually, Webpack will take care of that
for you.

## 2. Git Hooks

We use [Husky](https://github.com/typicode/husky) to automatically deploy git
hooks.

On every `git commit` we check that images added to `static/img/*` do not exceed
10MB.
