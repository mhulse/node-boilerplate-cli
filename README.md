# Node Boilerplate CLI

**A simple boilerplate starting point for Node.js command line projects.**

From the command line, `cd to/an/empty/installation/directory/` and run this repo’s installation script:

```bash
$ bash <(curl -sL https://git.io/vXzDy)
```

Next, creat a globally-installed symbolic link:

```bash
$ npm link
```

Run/test this demo code out of the box:

```bash
$ boilerplate -d path/to/a/directory/
```

## Development

To begin development on your own CLI script, the first thing you want to do is edit [`package.json`](package.json).

Change the `name`:

```json
"name": "node-boilerplate-cli"
```

… and provide your own CLI command name:

```json
"bin": {
  "boilerplate": "app/bridge.js"
}
```

Enter values for all other keys.

## Publishing (optional)

Set your npm author info:

```bash
$ npm set init.author.name 'Your Name'
$ npm set init.author.email 'you@example.com'
$ npm set init.author.url 'http://yourblog.com'
$ npm adduser
```

Next, bump version number in [`package.json`](package.json) and publish on npm:

```
$ npm publish
```

## Documentation

Feel free to use the end-user documentation found [`README-template.md`](README-template.md).

### Placeholder strings

Name | Description
--- | ---
`[NAME]` | Human-readable project name
`[NPM]` | Name of your project on npm
`[COMMAND]` | Your project’s command line name
`[USER]` | GitHub or Bitbucket user name
`[REPO]` | Name of your project’s GitHub or Bitbucket repository

## License

Copyright © 2017 [Michael Hulse](http://mky.io).

Licensed under the Apache License, Version 2.0 (the “License”); you may not use this work except in compliance with the License. You may obtain a copy of the License in the LICENSE file, or at:

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an “AS IS” BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

<img src="https://github.global.ssl.fastly.net/images/icons/emoji/octocat.png">
