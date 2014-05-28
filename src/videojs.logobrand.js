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
		
	};
	// plugin initializer
	var logobrand = function() {
				var player = this;
				this.initialize = function(options){
					var link = document.createElement("a");
						link.id = "vjs-logobrand-image-destination";
						link.href = options.destination;
						link.target = "_blank";
					var image = document.createElement('img');
						image.id = 'vjs-logobrand-image';
						//image.style.height = options.height;
						//image.style.width = options.width;
						image.style.position = "absolute";
						image.style.top = "4px";
						image.style.right = "4px";
						image.src = options.image;
					link.appendChild(image);
					player.el().appendChild(link);
						
					var useractive = true;
					player.on('useractive', function(){
						useractive = true;
						image.style.display = "";
					});
					player.on('userinactive', function(){
						useractive = false;
						if (!player.paused()){ //do not hide if player is paused
							image.style.display = "none";
						}
					});
					player.on('pause', function(){
						image.style.display = "";
					});
					player.on('play', function(){
						if (!useractive) //Don't hide image while user is active i.e. right when play is clicked
							image.style.display = "none";
					});
				};
				this.loadImage = function(src){
					document.getElementById("vjs-logobrand-image").src=src;
				};
				this.setDestination = function(href){
					document.getElementById("vjs-logobrand-image-destination").href = href;
				};
				function loadOptions(defaults, options){
					
				}
				return this;
	};	
	// register the plugin with video.js
	vjs.plugin('logobrand', logobrand);

}(window.videojs));
