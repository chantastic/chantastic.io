---
layout: post
title: Gulp.js - Getting Started
bg-color: blue
---

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
