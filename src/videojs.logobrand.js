/*
 * Video.js logobrand
 * https://github.com/Mewte/videojs-logobrand
 *
 * Copyright (c) 2014 Mewte @ InstaSynch
 * Licensed under the MIT license
 */

(function(vjs) {

	// define some reasonable defaults
	var defaults = {
		image: '',
		destination: '#'
	};
	// plugin initializer
	var logobrand = function(options) {
		var settings = videojs.util.mergeOptions(defaults, options), player = this;
		var link = document.createElement("a");
			link.id = "vjs-logobrand-image-destination";
			link.href = settings.destination;
			link.target = "_blank";
		var image = document.createElement('img');
			image.id = 'vjs-logobrand-image';
			//image.style.height = settings.height;
			//image.style.width = settings.width;
			image.src = settings.image;
		link.appendChild(image);
		player.el().appendChild(link);
		
		this.loadImage = function(src){
			document.getElementById("vjs-logobrand-image").src=src;
		};
		this.setDestination = function(href){
			document.getElementById("vjs-logobrand-image-destination").href = href;
		};
		return this;
	};	
	// register the plugin with video.js
	vjs.plugin('logobrand', logobrand);

}(window.videojs));
