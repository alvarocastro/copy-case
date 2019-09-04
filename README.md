# Copy Case
[![NPM](https://img.shields.io/npm/v/copy-case.svg)](https://www.npmjs.com/package/copy-case)
[![Build Status](https://travis-ci.com/alvarocastro/copy-case.svg?branch=master)](https://travis-ci.com/alvarocastro/copy-case)
[![codebeat badge](https://codebeat.co/badges/d0ba69e6-1570-4b28-b470-d36cfb74022a)](https://codebeat.co/projects/github-com-alvarocastro-copy-case-master)
[![Coverage Status](https://coveralls.io/repos/github/alvarocastro/copy-case/badge.svg?branch=master)](https://coveralls.io/github/alvarocastro/copy-case?branch=master)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

Copy the case from one string into another.

- [Install](#install)
- [Usage](#usage)

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
