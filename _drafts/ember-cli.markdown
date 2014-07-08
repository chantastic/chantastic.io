---
---

# ember-cli

Ember.js has me fired up the potential of browes-based applications.  One of the things that sets Ember apart from other JavaScript libraries is a focus on high quality tooling.

ember-cli is the latest tool in the ember shed.  It's a command-line utility made to generate, test, and build your application.  It's focus is only Ember apps and it does one helluvah job making you prodective.

This guide will lead you from the initial installation process to deploying to github pages.  Let's get started.

## Installing ember-cli

At the time of writing, ember-cli destributed as a [npm]() command-line tool.  In addition to that, it does not currently work in Windows.  If that knocks you out of the running for ember-cli, checkout [ember-app-kit](https://github.com/stefanpenner/ember-app-kit).  It's a toolkit for building Ember apps atop the Rails build system.

### Node and NPM install

...

### Installing ember-cli

Once you've got your environment setup, installing ember-cli is a one-liner:

```bash
$ npm install -g ember-cli
```

This installs the `ember` command-line tool for use anywhere in your filesystem.  Let's put that to good use by using it to create a new application:

```bash
$ ember new first-app
$ cd first-app
```

The first command tells ember that you would like to create a new application in a dirctory called `first-app`.  This step may take a while.  It prepares you application by creating a barebones ember application and dowloading all the dependencies you will need to dependencies you will need to start developing a web appilation with ember-cli.  The second command tells the terminal that you would like to change directories to `first-app`

Once it's done, let's see what it gets us:

```bash
$ ember server
```

If all goes well, you should see this output in your console:

```
Livereload server on port 31929
Serving on http://0.0.0.0:4200
```

It's saying that there your application is now available for viewing in a browser.  Pretty cool!  Let's check it out by openning a browser and typing that url into the address bar.

`![screenshot of fresh ember app at localhost:4200]()`

Great!

Now, you probably don't want this server running for forever.  You can stop it by typing `ctrl-c` in your terminal, where the server is running.  You'll be spit right back out into your regular shell.

Lets make a couple modifications.

From the root of your application, open the file `app/templates/applictaion.hbs`.  If you are new to command-line tools, it might be easiest to open these files in the finder.  You can open your current command-line position in the finder by typing `open .`.  Do that and navigate to the `application.hbs` template.

[!screenshot of filesystem]()

You may open this file in any application that supports text files.  I'll be using TextWrangler because it is free in the Apple App Store.

First, let's change the title of our new Ember app to 'My First Ember App':

```html
<h2 id='title'>My First Ember App</h2>

{{outlet}}
```

Looking at this template, you'll notice that there is an curious piece of template that is not HTML.  This is Handlebars, the language that powers Embers templates.  HTML that is wrapped in a set of curly braces `{{}}` will be evaluated by Ember when your application is run.

In the case of {{outlet}}, Ember is letting us know that any nested templates will be placed in this posititon.

We'll cover these in more detail.  For now, we're going to cheat by adding a template that will be automatically loaded by ember.

Let's create a new file, right next to our application template, called `index.hbs`

```
<!-- app/templates/index.hbs -->
<p>
  I'm learning about ember-cli at <a href="http://chantastic.io/ember-cli">http://chantastic.io</a>.
</p>
```

Save that.

Let's fire up our server again and see how we did!

```
$ ember serve
```

Your application should now look like this:

[screenshot of app with new text]()


## Git

... intro to git ...

```git init``

Add this file to your repository:

```
file types to ignore in repo
```

`$ git init`

`$ git commit --all --message "New ember app"`

### make github repo

### dist

remove 'dist' dir from .gitignore file

`ember build`

commit build

info on subtree: https://github.com/git/git/blob/master/contrib/subtree/git-subtree.txt

deploy with: `git subtree push --prefix dist origin gh-pages`


## Custom Task
create a task for deploys

http://www.dzone.com/snippets/execute-unix-command-nodejs

## Fix out app for deployment on github pages

we have to change the path 

