# [NAME]

**Description of project goes here.**

## Installation

First, if you have not done so already, install [Homebrew](http://brew.sh/):

```bash
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Next, install [Node.js](https://nodejs.org/en/):

```bash
$ brew install node
# Tip! Run this on a regular basis:
$ brew doctor && brew update && brew upgrade && brew cleanup && brew prune && brew doctor
```

Once the above steps are complete, and your system is happy …

### Install [NAME] via npm

```bash
$ npm i [NPM] -g
```

<mark>Alternative installation options; putting here as reminders, feel free to remove the ones you are not using:</mark>

### GitHub, public repo

```bash
$ npm i [USER]/[REPO] -g
```

### GitHub, private repo

```bash
$ npm i git+https://token:x-oauth-basic@github.com/[USER]/[REPO].git#master -g
# … or:
$ npm i git+ssh://git@github.com/[USER]/[REPO].git#master -g
```

### Bitbucket, public repo

```bash
$ npm i git+ssh://git@bitbucket.org/[USER]/[REPO].git#master -g
```

### Bitbucket, private repo

```bash
$ npm i git+https://username:password@bitbucket.org/[USER]/[REPO].git#master -g
# … or:
$ npm i git+ssh://git@bitbucket.org/[USER]/[REPO].git#master -g
```

## Usage

Activate in current directory:

```bash
$ cd to/a/directory/
$ [COMMAND] -d .
```

… or, specify path to a directory:

```bash
$ [COMMAND] -d to/a/directory/
```

Get help:

```bash
$ [COMMAND] -h
```
