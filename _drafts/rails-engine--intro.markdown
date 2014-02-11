Let's talk about Rails Engines.

Rails Engines are shit work.  The fact that you are hear, reading articles about them tells me something I like about you:  you have a hatred for dupliction and the duplication you seek to overcome is not only in one app but is crossing over into many apps.  You're goal is noble.

Sadly, your nability will not be met favoribly in the world of Rails Engines.  Pitfalls and hostility await.  But you're following me.  Someone who has fallen into most of the traps.

# Generating a Rails Engine

We're going to start easy: generating testing a completely uselesss engine.  Here goes:

Let's start with a clean project directory:

> $ cd ~/engines/

(you can puth this wherever you want.  just know that we're going to access in later)

As you might expect, Rails has a nice help for building an Engine:

> rails plugin new total_bullshit --mountable

We haven't even pressed enter and we already have a problems.

### Naming things
I started by using a naamespaced project name MYCO-project.  Don't do this.  Use a one-word, no accronym name and enjoy the time you save.  It was *impossible* to now all of the iterations this name would take.  Here are a few samples that got generatet myco_project, MycoProject, MycoProject, Myco::Project.  Navigating this storm merits only one instruction: go back, pick another route.  If that route has one word and, you're good to go.

Let's try again:

rails plugin bullshit --mountable.

Great!  Now we have a mountable bullshit plugin.


This article wouldn't be possible without the leadership of [Kevin Thompson](http://kevinthompson.info).  He's worlds smarter than me.

---
[egdeguides to engines](http://edgeguides.rubyonrails.org/engines.html)
[requiring gems into host app](http://stackoverflow.com/questions/5159607/rails-engine-gems-dependencies-how-to-load-them-into-the-application#answer-5850503)
