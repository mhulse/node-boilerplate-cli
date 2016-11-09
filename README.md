# Node Boilerplate CLI

A simple boilerplate starting point for Node.js command line projects.

From the command line, `cd to/empty/directory/` to an empty installation directory and run:

```bash
bash <(curl -sL https://git.io/vXzDy)
```

---

Use the following notes for the final project’s `README.md`.

Replace `<USER>` and `<PROJECT>` with your project’s name.

## Usage

```bash
$ cd to/a/directory/
$ boilerplate -d .
# OR:
$ boilerplate -d to/directory/of/images/
# Get help:
$ boilerplate -h
```

## Installation

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

### Symlink to `bin`

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
