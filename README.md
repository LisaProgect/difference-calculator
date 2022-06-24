# Difference calculator

[![Maintainability](https://api.codeclimate.com/v1/badges/3ecd8120ab0dd5a1e047/maintainability)](https://codeclimate.com/github/LisaProgect/difference-calculator/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/3ecd8120ab0dd5a1e047/test_coverage)](https://codeclimate.com/github/LisaProgect/difference-calculator/test_coverage)

-   [Installation](#installation)
-   [How to use](#how_to_use)

## Description

Welcome to this pet project. This program for comparing two configuration files and showing the difference between them.There are five console games.

## <a name="installation"></a>Installation

This project is not published to the npm registry. First you need to clone this repository and then install it.

```console
gh repo clone LisaProgect/difference-calculator
npm install
npm link
```

or instead `npm` you can use `make`

```console
gh repo clone LisaProgect/difference-calculator
make install
make link
```

## <a name="how_to_use"></a>How to use

Run on console command `diff` and then enters the paths to the files to compare.
You can use flag `-f, --format [type]`, this is output format. The default output format is 'ast'.

```console
diff /path/to/file-before.json /path/to/file-after.json -f plain
```
