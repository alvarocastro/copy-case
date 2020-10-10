# Copy Case

[![NPM](https://img.shields.io/npm/v/copy-case)](https://www.npmjs.com/package/copy-case)
[![Build status](https://img.shields.io/github/workflow/status/alvarocastro/copy-case/build)](https://github.com/alvarocastro/copy-case/actions?query=workflow%3Abuild)
[![Maintainability status](https://img.shields.io/codeclimate/maintainability/alvarocastro/copy-case)](https://codeclimate.com/github/alvarocastro/copy-case/maintainability)
[![Coverage status](https://img.shields.io/coveralls/github/alvarocastro/copy-case)](https://coveralls.io/github/alvarocastro/copy-case?branch=master)
[![Bundle size](https://img.shields.io/bundlephobia/min/copy-case)](https://bundlephobia.com/result?p=copy-case)
[![Code style: XO](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![Release: Semantic](https://img.shields.io/badge/%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Copy the case from one string into another.

- [Install](#install)
- [Usage](#usage)
- [Contributing](#contributing)
- [Support](#support)

## Install

```bash
npm install copy-case
```

## Usage

```js
const copyCase = require('copy-case');

copyCase('something', 'AnYThinG');
// => 'SoMEthiNg'
```

### copyCase(target, source)

Returns `target` string copying `source` string case.

#### target

Type: `String`

String to change the case.

#### source

Type: `String`

String to copy the case form.

## Contributing

Contributions are always welcome! Please run `npm test` beforehand to ensure everything is ok.

## Support

If you use this package please consider starring it :)
