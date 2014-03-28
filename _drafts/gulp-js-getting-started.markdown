---
layout: post
title: Finding Gulp
bg-color: fireball
---
![big gulps, eh?](/images/finding_gulp/finding_gulp.jpg)

Remember your first Big Gulp&reg;?

You were probably like 10, just starting to discover the world, skipping Fridays lunch so you and your hoodlum friends might have the $1.29 needed to buy 42 ounces of crackling, syrupy bliss.

I was homeschooled.  So I spent most of my time locked in a tower of social isolation.  And at the prudent age of 18, I was released to the pleasures of cigarettes, giving naked ladies dollar, and crashing rental cars.  None the less, the Big Gulp&reg; was a very exciting revelation.

12 years and 40 pounds later, in the good company of New York City, I no longer drink Big Gulps&reg;.

## So what is BigGulps&reg;.js? {#what-is-it}

Well first, we don't call it that.  It's just gulp.js.

> Gulp.js helps you make the internets by automating shit-work like building, compiling, and renaming.

It's like a made-to-order Asset Pipline but in Node; so you can still be an asshole about *speed* and *webscale* while waiving a middle finger at security.

---

## Let's Start

If you dont have Node.js and NPM, [Go get them](http://thechangelog.com/install-node-js-with-homebrew-on-os-x/).

Let's try runnig the `gulp` command in and see what happens:

{% highlight bash %}
$ gulp

> zsh: command not found: gulp
{% endhighlight %}

Error?  Perfect, you're doing fine.

## Installing Gulp

{% highlight bash %}
  $ npm install gulp

  > ...buzzing and whiring happens...
{% endhighlight %}

NPM is a command line tool.  The acronym stands for Node Package Manager.  "Package management" means a lot of things but for our immediate purposes, think of it like this: NPM is like a Chpendales stage.  You point at a package, it comes to you, you [pay it a dollar]().  Pretty simple.  Nade packages are clumps of code used to do things


Thats great for now.  You deserve sandwich.

Take a nap and move onto a lesson where we do anything worth doing.


## Error driven configuration

Gulp has really teriffic errors.

We're going to use them to build up a gulpfile from scratch.

### Step 1 - Find Gulp

Gulp is an NPM package—a fancy word for a clump of code with a name that does something resembling the name. So, we have packages. NPM is like Santas workshop (or a Chipndales stage), you ask for the one you want, he gives it to you [you give him a dollar](#).

You've been meaning to write more CoffeeScript or finally start converting your stylesheets from plain old CSS to Sass, Less, Stylus or whatever new hotness is out.  The trouble is that it's hard to configure up a development enviroment that lets you develop in those languages.  Historically, you've could use CodeKit or  ...

I find that I talk a lot about the joys of CoffeeScript and Sass.  But unless you're a Rails developer, you might not have many chances to use them.  If you want to play around, or start a new project, it's even harder.

Finally, build tools for front-end developers are becoming less about configuration and more about intention.  You don't need third-party interfaces or ..., just your terminal and a (very small) amount of elbow grease.

Gulp is ...  I love it because it reads like code, not configuration and it has very few conventions to learn.

## 1. Install gulp.js.
This is a one liner:
`$ npm install gulp`
some buzzing and whiring will commence, you'll see `npm http GET` flash by a bunch and then you'll have a fresh copy of gulp.

now, all this happens only if you have node.js and npm installed.  if things don't look right and your not sure why, you're going to want to make sure you fall these steps.  [instructions from joyent on installing node and npm]() 
---
# 2. Running gulp
Gulp is easy to run.  In your terminal you just type `gulp`

One of my favorite things about gulp is that it isn't magic.  Unlike other build tools, based on configuration, gulp allows you to write your tasks in code.  Consiquently it gives us very helpful errers to work with.

Let's start by creating a new folder for our project:

```
$ mkdir ~/gulp_fun
$ cd ~/gulp_fun
```

Now let's run gulp, with no arguments, and see what what we get:

```
$ gulp

[gulp] No gulpfile found
```

When we run gulp, it starts by looking for a file named `gulpfile.js` in the current directory.  We don't have one.  So it says exactly that.  Let's make one and run gulp again:

```
$ touch gulpfile.js
$ gulp
```

It found our file!  This is the first convention we come across.  This file must be named `gruntfile.js` to be found.  Mistype it or add the wrong extension and nothing is going to happen.  Now that gulp is able to find our gulpfile, we get our next helpful error:

`[gulp] Task 'default' was not defined in your gulpfile but you tried to run it.`

For the heck of it, let's try adding it.  Add this to your gruntile:

`gulp.task('defualt', function () {});`

Run `gulp` again.

Now we have a nasty looking error.  Gulp didn't even run.  We're getting a `gulp is undefined` error.  This is great because it means that gulp isn't doing any magic for us bedind the seens.  So, what we need to do is start by requiring the gulp library itself.  Open `gulpfile.js` this line to the top:

`var gulp = require('gulp');`

Your gruntfile should now look like this:

...

We start by requiring the gulp library.  We then use gulp's `task` method to register a `default` task, required by any gulpfile.

Now run your `gulp` command.

Hurray great success.  With just two lines you have gulp running in your new project.  But it doesn't do anything but tell that it run.

Let's fix that by gulping some coffeescript.

---

# Add a task

You can run the gulp task again but you wont see any change.  That's becaus every gulp 






---
Congratulations.  You're doing great.  What we have leaves a lot to be desired.  We aren't handling errors or watching for changes.  We're gonna get to that soon.
