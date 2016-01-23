# tern-jasmine

[![Build Status](https://secure.travis-ci.org/angelozerr/tern-jasmine.png)](http://travis-ci.org/angelozerr/tern-jasmine)
[![NPM version](https://img.shields.io/npm/v/tern-jasmine.svg)](https://www.npmjs.org/package/tern-jasmine)

[tern-jasmine](https://github.com/angelozerr/tern-jasmine) is a plugin which adds support for [Jasmine](http://jasmine.github.io/) to the JavaScript code intelligence system [Tern](http://ternjs.net/).

## <a name="installation"></a> Installation

tern-jasmine works with the NodeJS [Tern Server](http://ternjs.net/doc/manual.html#server), and within a browser.

### Short version

After installing Tern according the setup instructions of your desired [editor
plugin](http://ternjs.net/doc/manual.html#editor), go to the place where the [Tern package](https://www.npmjs.org/package/tern) was
installed (or the [Tern repo](https://github.com/marijnh/tern) was cloned) and run

```
$ npm install tern-jasmine
```
Or, if you're not sure where Tern was installed, you can try
```
$ npm install -g tern-jasmine
```

### Long version

See [INSTALL.md](INSTALL.md) for instructions tailored to each editor.

## <a name="configuration"></a> Configuration

In order for Tern to load the tern-jasmine plugin once it is installed, you must
include `jasmine` in the `plugins` section of your [Tern configuration
file](http://ternjs.net/doc/manual.html#configuration). The configuration file can be either a file named
`.tern-project` in your project's root directory, or `.tern-config` in your home
directory.

Here is a minimal example `.tern-project` configuration file:

```json
{
  "ecmaVersion": 5,
  "libs": ["browser"],
  "plugins": {
    "jasmine": {}
  }
}
```

<a name="project-dir"></a>
#### "Project directory" and `.tern-project` vs `.tern-config`

Tern looks for `.tern-project` first, walking up the directory tree, and uses
its location as the "project directory". If no `.tern-project` is found, your
`.tern-config` is loaded instead, and *the working directory of the Tern server
process is used as the "project directory"*.

## Related projects

 * See [Protractor support with tern](https://github.com/angelozerr/tern-protractor)
 * See [Jasmine Matchers support with tern](https://github.com/ik9999/tern-jasminematchers)
 
## Structure

The basic structure of the project is given in the following way:

* `jasmine.js` the tern plugin.
* `demos/` demos with jasmine tern plugin which use CodeMirror.
* `test` test of the tern plugin.