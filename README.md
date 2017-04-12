# Our mission :airplane:

Welcome! We're going to build a landing page, so basically what we did last week but better and we'll do it in only **30 minutes**. Thanks, Materialize!

We've given you an HTML file that's adapted from one of Materialize's starter template. It's complete with nice-looking navigation and footer (you've already seen how frameworks make it easy to create those, from the last workshop). We also have a nicely formatted section in the middle for you.

🚀 What do you need to add? Better title styles, images, and button effects! Plus, a modal **(OR SOMETHING ELSE IDK)**

Also, while we go through the tutorial, you might find it helpful to have <a href="http://materializecss.com/">Materialize</a> open so you can check out cool features, classes, and effects yourself. There's plenty of cool stuff that we won't cover that will make YOUR website much cooler.

## Basics

🚀 Add in some lines to the `head`:

```
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link href="css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection"/>
  <link href="css/style.css" type="text/css" rel="stylesheet" media="screen,projection"/>
```

🚀 Let's make "Hi CS52" and the text under that stand out.

Find the "Hi CS52!" text. We want `h1` to include `class="header center orange-text"`.

Let's also change the text under that. Give `h5` some classes. Let's do `class="header col s12 light"`, or some other combination of classes. Up to you!


## Fix up the logo (somebody do this)

🚀 Grab an image from the internet to replace the text that says "Logo". We're going to make your image into a circle!

**(do tutorial on how to add the code in)**

code


## Stylize the icons (Ke got this)

🚀 Add some style to the buttons!

For Button 1: replace `<button>Button 1</button>` with `<a class="btn">Button 1</a>`. This is a standard button. Notice it already looks good and has a cool hover effect.

Let's add a cool click effect. Instead of just `class="btn"`, make it `class="btn waves-effect waves-light"`. Click the button, it's so cool!

* Overview of what will be attempted
* Any necessary setup steps
* Step by step instructions
* Explanations of the what **and** the why behind each step. Try to include:
  * higher level concepts
  * best practices
  
End the tutorial with a "what you should have at this point" section which includes a **short** listing of features. This is the minimal set of things you think they should accomplished/learned during the course of the tutorial and will be used in grading. Format this as a checklist:

- [x] created navbar
- [ ] styled body
- [ ] clickable buttons

For Button 2, replace the old button with a round button. Do the same thing as Button 1, but instead of `btn`, use the class `btn-floating`. You can change the color by adding a class, like `cyan`. Let's try out Materialize's icon package too. Between `<a>` and `</a>`, add in `<i class="material-icons">add</i>`. 

By the end of this, button 2 should look like:
```
<a class="btn-floating waves-effect waves-light cyan"><i class="material-icons">add</i></a>
```

For Button 3, replace the old button with `<a class="btn btn-floating pulse"><i class="material-icons">cloud</i></a>`. Check out the cool effect!

## Modal

🚀 Let's work on a modal. If you notice now, when you click on the modal button nothing happens. Let's fix that!

First, make sure you've replaced Button 3 with the anchor tag above.

Now let's set the target for the anchor. Add the ID of the modal to the href of the modal anchor, so it reads ```#getStartedModal```

Once that's done, we can start actually constructing the modal. Surround ```<h4>``` and ```<p>``` with a new div with the class name ```'modal-content'``` - this will tell Materialize where the content of the modal lives

Then, to add some buttons to the bottom, add a footer for the modal. Add a new div with the class ```'modal-footer'``` and then within the modal-footer div, add an anchor (```<a>```) with the href '#!' and the text 'I'm ready!'

Finally, add some classes to the anchor! You must add ```'modal-action'``` and ```'modal-close'``` for the button to work, but the others are up to you - some ideas are ```'waves-effect'``` and ```'btn-flat'``` - feel free to use some of the styling you learned above!

Now, when you click the modal button you'll notice it's not working yet... why not?!

As it turns out, Materialize makes you initialize their Javascript components. That's easy enough - at the bottom of your ```body``` section, add the following code:

```
<script>
  // code from:http://materializecss.com/modals.html#!
  // additional help from: http://stackoverflow.com/questions/41626343/materialized-modal-not-displaying
  // this initializes all modals so they can be triggered
  $(document).ready(function() {
    $('.modal').modal();
  });
</script>
```

This will initialize all modals on the page and let them run.

## Parallax

🚀 Time to add parallax effects! With Materialize this is super easy.

To add parallax, all you have to do is add two parallax containers, one right after ```nav``` and before the ```section-white``` div, and the other right after the ```section-white``` div and before the ```footer```. That's it! Use the following parallax containers, in order:

```
  <!-- parallax code from: http://materializecss.com/parallax.html -->
  <div class="parallax-container">
    <div class='parallax'><img src='img/p1.jpg'></div>
  </div>
```

```
  <!-- parallax code from: http://materializecss.com/parallax.html -->
  <div class="parallax-container">
    <div class='parallax'><img src='img/p2.jpg'></div>
  </div>
```

It's not working!!! Why?! It's beacause we still have to initialize - add the following code right after your modal initialization in the document ready function:
```
  // parallax code from: http://materializecss.com/parallax.html
  $('.parallax').parallax();
```

## And You Are Done!

At this point, you should have a decent looking webpage that includes some really interesting features that would be difficult to implement from scratch. Here's a checklist for what you should have:
- [ ] added references to Materialize styling
- [ ] found and added logo to top of page
- [ ] styled some buttons
- [ ] added a modal popover to the modal button
- [ ] added simple parallax sections


## Credits

Utilized extensively for tutorial code and for the base template: http://materializecss.com/

Photos from: https://unsplash.com
