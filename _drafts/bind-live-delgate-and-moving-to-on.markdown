---
layout: post
title: .bind, .live, .deligate. and moving to .on
bg-color: red
---

If you've worked on a long-lived appliction, chances are you've seen a healthy mixture of bind(), live(), and deligate() in your applications.  This guide give you the skills needed to transition those to on(), as you find them.

jQuery hase a pretty sorted past with event handling.  Fortunately, if you new, jQuery standardized around on() in 1.7.  So, for 3 full versions, and as many years, it has been the event handler of choice for clear, fast, and ajax friendly event handling.  I just want you to know enough that you can confidently start moving old bindings to on().  If you'd like a more in depth report on the obsolete methods, this is a great article [link](http://www.elijahmanor.com/differences-between-jquery-bind-vs-live-vs-delegate-vs-on/)

`bind()`

> If I need more than what Jekyll provides by default, I don’t use Jekyll.

{% highlight javascript %}
var test = function () {
  console.log('hi');
}
{% endhighlight %}

bind() is the oldest and most straight forward handler.  you tell it to watch for on event on a node.  it watches for events on that node.  So let's say your a young polition, just starting out.

live()

stand by the door and bind people as they walk in.  problem is people have to come back to you whin they want to talk with you. this is not very hospitible.

.bind(), .live(), ande .deligate() are all one line pass throughs to on().  click the links, if you don't believe me.

delegate()

our politition gets smart and realizes that the best way to entertain his guestes, while ensureng that he greats everyone is delegation.

all is well.

so, if delegate deos the job, why do we use on() instead of delegate()? delegate() is perfect but it has one fatal flaw, the syntax.  It complected event handlers becaus, at minimum, you needed to bind events to a parent node and listen events that happened on a child node.  what if you have no child?  you're forced to use bind().  that's fine but wouldn't it be better to have a single event handling syntax?

on()

enter on().  this is the smartest method in the bunch.  on() is bind and deligate() wrapped in one.
