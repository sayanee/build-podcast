---
title: 009 Package Managers
title_lowercase: 009 package managers
layout: post
tags: tutorial, screencast, technology, development, programming, coding, package, managers, dependencies, npm, nodes, pip, python, rubygems, ruby, composer, php
description: Package manager is a collection of tools for installing, upgrading, configuring and removing software packages in a computer. We will explore some commonly used ones such as RubyGems for ruby, Pip for python, Composer for php and NPM for NodeJS.
permalink: /package-managers/
enclosure: http://video.build-podcast.com/009-package-managers.mp4
length: 114993689
---

<div id="video"><iframe src="//player.vimeo.com/video/46877604" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>

Package manager is a collection of tools for installing, upgrading, configuring and removing software packages in a computer. We will explore some commonly used ones such as [RubyGems](http://rubygems.org/) for ruby, [Pip](http://pypi.python.org/pypi/pip/) for python, [Composer](http://getcomposer.org/) for php and [NPM](http://npmjs.org/) for node.js.


**Download video**: [mp4](http://video.build-podcast.com/009-package-managers.mp4)

**Sample code**: [Github](https://github.com/sayanee/build-podcast/tree/master/009-package-managers)

##Tools used:

1. [npm](http://npmjs.org/) for node.js with example package [nide text editor](http://coreh.github.com/nide/)
1. [rubygems](http://rubygems.org/) for ruby with example package [sass css preprocessor](http://sass-lang.com/)
1. [pip](http://pypi.python.org/pypi/pip/) for python with example package [markdown for python](http://packages.python.org/Markdown/install.html)
1. [composer](http://getcomposer.org/) for php with example package [mustache for php](https://github.com/bobthecow/mustache.php)
2. Command line with [Terminal](http://en.wikipedia.org/wiki/Terminal_(OS_X)

##Commands for Packager managers

Run these command in the command line.

<table>
  <tr>
    <th></th>
    <th>npm</th>
    <th>composer</th>
    <th>pip</th>
    <th>rubygem</th>
  </tr>
  <tr>
    <td>Language</td>
    <td><code>node -v</code></td>
    <td><code>php --version</code></td>
    <td><code>python --version</code></td>
    <td><code>ruby -v</code></td>
  </tr>
  <tr>
    <td>Version</td>
    <td><code>npm --version</code></td>
    <td><code>composer --version</code></td>
    <td><code>pip --version</code></td>
    <td><code>gem -v</code></td>
  </tr>
  <tr>
    <td>Location of the program file</td>
    <td><code>which npm</code></td>
    <td><code>which composer</code></td>
    <td><code>which pip</code></td>
    <td><code>which gem</code></td>
  </tr>
  <tr>
    <td>List of all packages installed globally</td>
    <td><code>npm ls -g</code></td>
    <td><code>composer show <br>--installed</code> (locally)</td>
    <td><code>pip freeze</code></td>
    <td><code>gem list</code></td>
  </tr>
  <tr>
    <td>Info about a package</td>
    <td><code>npm show <br>[package-name]</code></td>
    <td><code>composer show <br>[package-name]</code></td>
    <td><code></code></td>
    <td><code>gem list <br>[package-name]</code></td>
  </tr>
  <tr>
    <td>Install a package</td>
    <td><code>npm install <br>[package-name] -g</code></td>
    <td><code>composer require <br>[package-name]</code> <br>and run <code>composer install</code></td>
    <td><code>pip install<br>[package-name]</code></td>
    <td><code>gem install <br>[package-name]</code></td>
  </tr>
  <tr>
    <td>Uninstall a package</td>
    <td><code>npm uninstall <br>[package-name] -g</code></td>
    <td>edit composer.json <br>and run <code>composer update</code></td>
    <td><code>pip uninstall<br>[package-name]</code></td>
    <td><code>gem uninstall<br>[package-name]</code></td>
  </tr>
  <tr>
    <td>Outdated packages</td>
    <td><code>npm -g outdated</code></td>
    <td><code>composer update --dry-run</code></td>
    <td><code></code></td>
    <td><code>gem outdated</code></td>
  </tr>
  <tr>
    <td>Updated packages</td>
    <td><code>npm -g update <br>[package-name]</code></td>
    <td><code>composer update</code></td>
    <td><code>pip install<br>--upgrade [package-name]</code></td>
    <td><code>gem update <br>[package-name]</code></td>
  </tr>
  <tr>
    <td>Help</td>
    <td><code>npm help</td>
    <td><code>composer help</code></td>
    <td><code>pip help</code></td>
    <td><code>gem help</code></td>
  </tr>
</table>

##Resources on Package Managers

- what is a [package manager](http://en.wikipedia.org/wiki/Package_manager)
- [list of software package management systems](http://en.wikipedia.org/wiki/List_of_software_package_management_systems)

<table>
  <tr>
    <th></th>
    <th>npm</th>
    <th>composer</th>
    <th>pip</th>
    <th>rubygem</th>
  </tr>
  <tr>
    <td>Download & Install</td>
    <td>install <a href="http://nodejs.org/#download">node.js and npm</a> for node</td>
    <td>install <a href="https://github.com/composer/composer#global-installation-of-composer-manual">globally</a> for php. <br>edit the <a href="http://stackoverflow.com/questions/9343151/where-is-php-ini-in-mac-os-x-lion-thought-it-was-in-usr-local-php5-lib">php.ini</a> file if needed</td>
    <td>install <a href="http://pypi.python.org/pypi/pip/#downloads">pip</a> for python</td>
    <td>install <a href="http://rubygems.org/pages/download/">rubygems</a> for ruby</td>
  </tr>
  <tr>
    <td>Documentation</td>
    <td><a href="https://npmjs.org/doc/">doc</a></td>
    <td><a href="http://getcomposer.org/doc/">doc</a></td>
    <td><a href="http://pypi.python.org/pypi/pip/">doc</a></td>
    <td><a href="http://guides.rubygems.org/">guides</a></td>
  </tr>
  <tr>
    <td>Browse for packages</td>
    <td><a href="http://nodejs.org/api/">npm</a></td>
    <td><a href="http://packagist.org/packages/">packagist</a></td>
    <td><a href="http://pypi.python.org/pypi?%3Aaction=index">pip</a></td>
    <td><a href="http://rubygems.org/gems">rubygems</a></td>
  </tr>
  <tr>
    <td>Other links</td>
    <td><a href="http://tobyho.com/2012/02/09/tour-of-npm/">tour of npm</a></td>
    <td><a href="http://net.tutsplus.com/tutorials/php/easy-package-management-with-composer/">package management</a></td>
    <td></td>
    <td></td>
  </tr>
</table>


##Build Link of this Episode

[Nettuts+](http://net.tutsplus.com/) is a site aimed at providing tutorials for web development and design with editor [Jeffrey Way](jeffrey_way) and [many other talented people](http://net.tutsplus.com/meet-the-staff/).

##Credits

Thanks to [Uzyn](http://twitter.com/uzyn) and [Mic](http://twitter.com/coderkungfu) for advise on php package managers
