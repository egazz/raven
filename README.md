Raven
=====
[![Latest release](http://img.shields.io/github/release/robotlolita/raven.svg?style=flat)](https://github.com/robotlolita/raven/releases)
[![Dependencies](http://img.shields.io/david/robotlolita/raven.svg?style=flat)](https://david-dm.org/robotlolita/raven)
![Licence](https://img.shields.io/badge/licence-MIT-red.svg?style=flat)

Since the [original Raven](https://github.com/robotlolita/raven), developed by Robotlolita, is in hiatus, I decided to create a fork to see what else it could use.  The same disclaimers apply: still in early stages, may break.  So back up your stuff.

![Raven screenshot](https://raw.githubusercontent.com/robotlolita/raven/master/screenshot.png)

## Getting Started

NOTE: Since I haven't actually made any changes yet, these still go to Robotlolita's builds.

 1. Download the right distribution for your platform:

     *  __Linux__: [32 bit][linux-32] / [64 bit][linux-64]
     *  [__Windows__][win]
     *  [__Mac OS X__][mac]

 2. Unzip it wherever you want the application to be;
 3. Double click the `Raven` / `Raven.exe` / `Raven.app` file;
 4. Select the folder where you want to store your novels;
 5. Create a new novel, and start writing.

[linux-32]: https://github.com/robotlolita/raven/releases/download/v0.2.0-alpha/Raven-linux32.tar.gz
[linux-64]: https://github.com/robotlolita/raven/releases/download/v0.2.0-alpha/Raven-linux64.tar.gz
[mac]: https://github.com/robotlolita/raven/releases/download/v0.2.0-alpha/Raven-osx.zip
[win]: https://github.com/robotlolita/raven/releases/download/v0.2.0-alpha/Raven-win.zip

## Building

You'll need [Node Webkit][], [Node][], `Make` and other *NIX tools (like `cat`)
installed. Once you do, just run the following commands:

```shell
$ git clone git://github.com/robotlolita/raven
$ cd raven
$ npm install
```

To run it under recent Linux distributions (Ubuntu 13.04+, Fedora 18+, Arch,
Gentoo, etc) you'll need the following to run Raven:

```shell
$ make run-linux
```

On all other platforms, you'll need the following to run Raven:

```shell
$ make run
```

[Node Webkit]: https://github.com/rogerwang/node-webkit
[Node]: http://nodejs.org/



- - -
Raven is MIT licensed

