# Javapic
_"You're beautiful" is our slogan, and our website reflects that. Help get our Javascript there._

Students have been 'hired' to add functionality to the Javapic website (no, it doesn't pay). The photo gallery site has a landing page that needs a rotating background image in the jumbotron. If users want to see the images in the gallery, they need to join the site via the sign-up form. Once they've signed up, they can see the photo gallery, and select click a photo to see a larger version of it.

## Required Functionality
- _index.html_
  - have the background image of the jumbotron change to another image in the folder every 10 seconds
- _join.html_
  - add form validation that works in all major browsers (you'll need to deactivate browser validate to check this)
  - form validation should have all fields marked "required" required, and all email fields should require and check for proper email syntax.
  - any validation errors should be presented clearly to the user so that they may correct them
  - on completion of the form, navigate the user to the gallery, passing their name to the page
- _gallery.html_
  - update the slogan to add a ", user_name", with the user's name
  - loop through the image folder and display each image in the folder
  - add the functionality so that if a user clicks on an image, the lightbox appears with that image loaded in
  - when the lightbox is up, is the user clicks anywhere not on the image, the lightbox closes

## Additional Notes:
- Students are **not** allowed to directly modify the HTML or CSS at all, with the exception of adding their script tags.
- Students are allowed, and will have to, modify parts of the HTML via the DOM.
- Students may not use ANY frameworks, open source code, or code from anyone but themselves.

## Project Files
- index.html
- join.html
- gallery.html
- css/style.css
- images/(pdxcg_01.jpg - pdxcg_60.jpg)
- js/ (<---this is where your JS files go)
