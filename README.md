[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

#dyson-v5-shop

Dyson V5 shop web application built with Yeoman, AngularJS, Grunt and Bower.

##Getting started

For development purposes, this repository requires the use of [Grunt](http://gruntjs.com/) and [Bower](http://bower.io/) in order to run the application.

Grunt is a JavaScript based task runner, for tasks such as unit testing, compilation, uglifying, livereload, serving web pages and many many more. If you haven't used Grunt before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. 

Bower is a package manager tool (much like [NuGet](http://www.nuget.org/) or [Bundler](http://bundler.io/)) which can manage your third party asset library for you. You can find information on using and installing Bower over at their [github](https://github.com/bower/bower) page.

Furthermore, you will need **npm** for both of these tools to function. You can find a quick and easy installation guide over at the [npm github](https://github.com/npm/npm).

**If you would not like to perform any development and want just the basic template [click here](http://tomdallimore.com/wp-content/uploads/soca.zip)**

##Resolving dependencies

First off, you will need to install the Grunt package dependencies listed in `package.json`:

    npm install

Then you will need to install the Bower asset dependencies, listed in `bower.json`:

    bower install

##Build process

Now we have all our required dependencies, we can start to use the Grunt task runner. To start viewing the application on the Grunt web server, run the following command:

    grunt server

If you would like to create a distribution package of the application, ready for use in your application, run the following command:

    grunt build

This will run through compiling, uglifying, copying the HTML, JavaScript, CSS and Bower dependencies into a folder called `dist` in the root of the application.
