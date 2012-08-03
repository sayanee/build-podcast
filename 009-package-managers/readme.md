#Build Podcast Ep 9 - Package Managers

[Screencast link ](http://build-podcast.com/package-managers/)

Package manager is a collection of tools for installing, upgrading, configuring and removing software packages in a computer. We will explore some commonly used ones such as [rubygems](http://rubygems.org/) for ruby, [pip](http://pypi.python.org/pypi/pip/) for python, [composer](http://getcomposer.org/) for php and [npm](http://npmjs.org/) for node.js.


##Tools used:

1. [npm](http://npmjs.org/) for node.js with example [nide text editor](http://coreh.github.com/nide/)
1. [rubygems](http://rubygems.org/) for ruby
1. [pip](http://pypi.python.org/pypi/pip/) for python with example [markdown for python](http://packages.python.org/Markdown/install.html)
1. [composer](http://getcomposer.org/) for php with example [mustache for php](https://github.com/bobthecow/mustache.php)
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
		<td><code>composer show</code></td>
		<td><code>pip freeze</code></td>
		<td><code>gem list</code></td>
	</tr>
	<tr>
		<td>Info about a package</td>
		<td><code>npm show [package-name]</code></td>
		<td><code>composer show [package-name]</code></td>
		<td><code></code></td>
		<td><code></code></td>
		<td><code></code></td>
	</tr>
	<tr>
		<td>Install a package</td>
		<td><code>npm install <br>[package-name] -g</code></td>
		<td><a href="http://getcomposer.org/doc/00-intro.md#declaring-dependencies">create composer.json</a>,<br>run <code>composer install</code></td>
		<td><code>pip install<br>[package-name]</code></td>
		<td><code></code></td>
	</tr>
	<tr>
		<td>Uninstall a package</td>
		<td><code>npm uninstall <br>[package-name] -g</code></td>
		<td>edit composer.json and run <code>composer update</code></td>
		<td><code>pip uninstall<br>[package-name]</code></td>
		<td><code></code></td>
	</tr>
	<tr>
		<td>Outdated packages</td>
		<td><code>npm -g outdated</code></td>
		<td><code></code></td>
		<td><code></code></td>
		<td><code></code></td>
	</tr>
	<tr>
		<td>Updated packages</td>
		<td><code>npm -g update <br>[package-name]</code></td>
		<td>edit composer.json and run <code>composer update</code></td>
		<td><code>pip install<br>--upgrade [package-name]</code></td>
		<td><code></code></td>
	</tr>
	<tr>
		<td>Help</td>
		<td><code>npm help</td>
		<td><code>composer help</code></td>
		<td><code>pip help</code></td>
		<td><code></code></td>
	</tr>
</table>

##Resources on Package Managers

- what is a [package manager](http://en.wikipedia.org/wiki/Package_manager)
- [list of software pckage management systems](http://en.wikipedia.org/wiki/List_of_software_package_management_systems)

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
		<td>install <a href="https://github.com/composer/composer#global-installation-of-composer-manual">globally</a> for php. edit the <a href="http://stackoverflow.com/questions/9343151/where-is-php-ini-in-mac-os-x-lion-thought-it-was-in-usr-local-php5-lib">php.ini</a> file if needed</td>
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
		<td><a href="http://packagist.org/packages/">composer</a></td>
		<td><a href="http://pypi.python.org/pypi?%3Aaction=index">pip</a></td>
		<td><a href="http://rubygems.org/gems">rubygems</a></td>
	</tr>
	<tr>
		<td>Other links</td>
		<td><a href="http://tobyho.com/2012/02/09/tour-of-npm/">tour of npm</a></td>
		<td><a href="http://net.tutsplus.com/tutorials/php/easy-package-management-with-composer/">easy package management with composer</a></td>
		<td></td>
		<td></td>
	</tr>
</table>


##Build Link of this Episode

[Nettuts+](#)