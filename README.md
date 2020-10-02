<div align="center">
  <h1>babel-plugin-bin-shebang</h1>
  <a href="https://npmjs.com/package/babel-plugin-bin-shebang">
    <img alt="NPM" src="https://img.shields.io/npm/v/babel-plugin-bin-shebang.svg">
  </a>
  <a href="https://github.com/bconnorwhite/babel-plugin-bin-shebang">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/babel-plugin-bin-shebang.svg">
  </a>
  <a href='https://coveralls.io/github/bconnorwhite/babel-plugin-bin-shebang?branch=master'>
    <img alt="Coverage Status" src="https://img.shields.io/coveralls/github/bconnorwhite/babel-plugin-bin-shebang.svg?branch=master">
  </a>
  <a href="https://github.com/bconnorwhite/babel-plugin-bin-shebang">
    <img alt="GitHub Stars" src="https://img.shields.io/github/stars/bconnorwhite/babel-plugin-bin-shebang?label=Stars%20Appreciated%21&style=social">
  </a>
  <a href="https://twitter.com/bconnorwhite">
    <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/bconnorwhite.svg?label=%40bconnorwhite&style=social">
  </a>
</div>

<br />

> Prepend node shebang to bin files.

This shebang will be added to each file listed in the `bin` field of your project's package.json:
```sh
#!/usr/bin/env node
```

## Installation

```sh
yarn add babel-plugin-bin-shebang
```

```sh
npm install babel-plugin-bin-shebang
```

## Usage
In babel.config.json:
```json
{
  "plugins": [
    "babel-plugin-bin-shebang"
  ]
}
```

<br />

<h2>Dependencies<img align="right" alt="dependencies" src="https://img.shields.io/david/bconnorwhite/babel-plugin-bin-shebang.svg"></h2>

- [@bconnorwhite/package](https://www.npmjs.com/package/@bconnorwhite/package): A utility for reading package.json of a project, and forming paths relative to it.

<br />

<h2>Dev Dependencies<img align="right" alt="David" src="https://img.shields.io/david/dev/bconnorwhite/babel-plugin-bin-shebang.svg"></h2>

- [@babel/core](https://www.npmjs.com/package/@babel/core): Babel compiler core.
- [@babel/types](https://www.npmjs.com/package/@babel/types): Babel Types is a Lodash-esque utility library for AST nodes
- [@bconnorwhite/bob](https://www.npmjs.com/package/@bconnorwhite/bob): Bob is a toolkit for TypeScript projects
- [@types/node](https://www.npmjs.com/package/@types/node): TypeScript definitions for Node.js

<br />

<h2>License <img align="right" alt="license" src="https://img.shields.io/npm/l/babel-plugin-bin-shebang.svg"></h2>

[MIT](https://opensource.org/licenses/MIT)
