# Node Boilerplate CLI

A simple boilerplate starting point for Node.js command line projects.

From the command line, `cd to/empty/directory/` to an empty installation directory and run:

```bash
bash <(curl -sL https://git.io/vXzDy)
```

Once installed, start hacking away at the code.

Use the following notes for the final project’s `README.md`.

Replace `<USER>` and `<PROJECT>` with your project’s name.

---

## Usage

As a globally installed command line script:

```bash
$ cd to/a/directory/
$ boilerplate -d .
# OR:
$ boilerplate -d to/a/directory/
# Get help:
$ boilerplate -h
```

## Installation

First, install [Homebrew](http://brew.sh/) and then [Node.js](https://nodejs.org/en/):

```bash
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
$ brew install node
# Run this on a regular basis:
$ brew doctor && brew update && brew upgrade && brew cleanup && brew prune && brew doctor
```

… now you can install this package using [npm](https://www.npmjs.com/): 

```bash
# If on Bitbucket:
$ npm install git+ssh://git@bitbucket.org/<USER>/<PROJECT>.git#master -g
# If on GitHub:
$ npm install <USER>/<PROJECT>.git#master -g
# if you published as npm package:
$ npm install <PROJECT> -g
```

## Development Notes

Publishing as an npm package:

```bash
# If not already, login:
$ npm adduser
# Bump version number in `package.json` …
# … and publish on npm:
$ npm publish
```

### Symlink to `/usr/local/bin/`

During development it’s convenient to make the symlink on our path point to the entry point for the app:

```bash
$ npm link
# When done, remove link:
$ npm unlink
```

### BitBucket and GitHub

These are the various ways you can install code directly from Bitbucket using npm:

```bash
# Public:
$ npm install git+ssh://git@bitbucket.org/<repo-owner>/<repo>.git[#<branch>]

# Private:
$ npm install git+https://<username>:<password>@bitbucket.org/<repo-owner>/<repo>.git[#<branch>]
$ npm install git+ssh://git@bitbucket.org/<repo-owner>/<repo>.git[#<branch>]
```

Using GitHub:

```bash
# Public:
$ npm install <PROJECT>[#<branch>] -g

# Private:
$ npm install git+https://<github_token>:x-oauth-basic@github.com/<repo-owner>/<repo>.git[#<branch>]
$ npm install git+ssh://git@github.com/<repo-owner>/<repo>.git[#<branch>]
```

### Links

* [Building command line tools with Node.js](https://developer.atlassian.com/blog/2015/11/scripting-with-node/)
* [Tim Pettersen / bitbucket-snippet](https://bitbucket.org/tpettersen/bitbucket-snippet)
