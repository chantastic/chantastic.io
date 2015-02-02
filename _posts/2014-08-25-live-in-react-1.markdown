---
layout: html_wrapper
title: Reluctant Praise of ReactJS
---

# A Reluctant Revew of React

There is an uninteresting story where I lose a code-off spend 10 weeks writing React and come oute the other side really liking it. It's uninteresting because I'm not the hero of that story. Others in the office may have a **very interesting** story about how I came to like React but don't indulge them.

## What React is

React is this hot-stuff JavaScript framework from Facebook/Instagram. If you've never seen it, here's the "Hello World".

    /** @jsx React.DOM */
    var HelloWorld = React.createClass({
      render: function () {
        return <div>Hello World</div>;
      }
    });

    React.renderComponent(<HelloWorld />, document.body)

If that looks really weird to you, you have discerning taste. Things get even weirder. Here's what it looks like to give pass the component a name:

    /** @jsx React.DOM */
    var HelloWorld = React.createClass({
      render: function () {
        return <div>Hello {@props.name}</div>;
      }
    });

    React.renderComponent(<HelloWorld name="Michael" />, document.body)

React isn't just strange, it's offensive. The deeper you go, the more it's apparent distain for the web comes out. You write components that have no respemblence to the emerginig Web Component spec. You use a synthetic event system that borrows only the names of the JS event system you know. The markup you right is nothing more than a React implementation of the HTML you've been writing for years. It is an afront to the web.

Without hesitation, this is the most convoluted way that I could think to write a Hello World app in JavaScript.

## So, why?

It's a good question, one that was unclear to me 10 weeks ago.

And all these glaring mistakes giving you one advantage: clear state management.

The Ruby/Rails world creates tools that [optimize developre happiness](https://gettingreal.37signals.com/ch10_Optimize_for_Happiness.php). Rails has the benefit of not being concerned with real-time. You make a request, you get a page. Want other data? Load another page.

The few years people have been trying chasing that same "happiness" in JavaScript and chasing it in the same way. "MVC was the answer for Rails. It's the answer for the web." But the web is challenging. In browser apps, you don't get the benefit of being able to just reload the entire DOM when the user interacts with something, or when you get fresh data from the Server. You have to know what's on the page, and how to update it. It's very proceedural.

Backbone gives you some tools organizing the complexity. And frameworks like Ember abstract you several levels from the need to manually manage DOM. But they are trying to get as close to the browser as possible. React goes the other way, trying to get as far away from the browser as possible. Let's dive into that.

## Closeness to the browser

What I love about technologies like CoffeeScript and Ember is that they were working with standards bodies to improve the technology and bring a better future. To that end, React feel like a dead-end. The way you do things in React will never be the way the web does it. With popularity, they may borrow some ideas. But The React Way will never be the web way. And [as far as i can tell]( code winds podcast with pete hunt ), that isn't the goal. They see the browser as just one of the platforms that React can write apps to.

## React focuses on debugging happiness

React is a pain to write. It requires a way of thinking that isn't the norm today. 

---

> WHENEVER TWO GOOD PEOPLE ARGUE OVER PRINCIPLES, THEY ARE BOTH RIGHT.
> MARIE VON EBNER-ESCHENBACH

Gary Bernhardt Boundaries talk
