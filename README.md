videojs-logobrand
=================

Add a custom image logo that appears & disappears with the user controls. Perfect for branding the media source. 
This could also be useful for learning how to make Video.JS plugins. I put this together in only a few hours of learning Video.JS so I'm not sure how awful it is.

It's a barebones basic for what I needed, there are possibly some more options that would be nice. Feel free to customize how you need. You can edit the videojs.logobrand.js file to edit the exact values.
TODO: Add more custom parameters

###Initialize logobrand
```JavaScript
			video = document.querySelector('video');
			player = videojs(video);
			player.logobrand({
				image: "http://www.videojs.com/img/logo.png", //image to use
				destination: "http://www.videojs.com/" //destination when clicked
			});
```
###Change image after initializing
```JavaScript
  player.logobrand().loadImage("http://example.com/img.jpg");
```
###Change destination after initializing
```JavaScript
  player.logobrand().setDestination("http://example.com/");
```

Feel free to fork and make any changes you want.
The way it is now works perfect for what I need but I do not mind editing it for others needs as well so don't hesitate to do a pull request.
