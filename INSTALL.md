#Installation

This document attempts to address the setup of [tern-jasmine](README.md) with
specific editors.

## Prerequisites

Basically any installation requires a recent version of Node and npm. For Linux
users, [nvm][nvm] is a good way to get both (apt repos often have hideously old
Node versions).

## Emacs

Follow [the Tern instructions for Emacs installation][emacs-install]. Wherever
you run `npm install` (step 2), also run `npm install tern-jasmine`.

## Vim

Follow the [tern_for_vim][tern_for_vim] installation instructions. When you run
`npm install` in `bundle/tern-for-vim`, also run `npm install tern-jasmine`.

## Sublime Text

If you are using Marijn Haverbeke's own [tern_for_sublime][tern_for_sublime],
then you can run `npm install tern-jasmine` in the `tern_for_sublime` directory,
where you ran `npm install`.

If you know how to install tern-jasmine with the alternative
[sublime-tern][sublime-tern-alt], let me know!

## Brackets

Yoiu should read http://www.netsi.dk/wordpress/index.php/2015/06/17/my-brackets-just-got-meteor-autosuggest/

## Gedit

If you are using [tern_for_gedit][tern_for_gedit], you need to install
tern-jasmine globally (in addition to installing Tern globally as per the
tern_for_gedit README): `npm install -g tern-jasmine`

## Eclipse

To use tern-jasmine in Eclipse, follow [these
instructions][eclipse-tern-jasmine] for setting up tern-jasmine with
[tern.java][tern-java].

## Atom

See [Atom & Tern](https://github.com/tststs/atom-ternjs)

[eclipse-tern-jasmine]: https://github.com/angelozerr/tern.java/wiki/Tern-&-Jasmine-support
[emacs-install]: http://ternjs.net/doc/manual.html#emacs
[nvm]: https://github.com/creationix/nvm
[sublime-tern-alt]: https://github.com/emmetio/sublime-tern
[tern-java]: https://github.com/angelozerr/tern.java
[tern_for_gedit]: https://github.com/Swatinem/tern_for_gedit
[tern_for_sublime]: https://github.com/marijnh/tern_for_sublime
[tern_for_vim]: https://github.com/marijnh/tern_for_vim
