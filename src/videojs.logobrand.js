/*
 * Video.js logobrand
 * https://github.com/Mewte/videojs-logobrand
 *
 * Copyright (c) 2014 Mewte @ InstaSynch
 * Licensed under the MIT license
 */

import videojs from 'videojs';

// define some reasonable defaults
const defaults = {
  image: '',
  destination: '#'
};
// plugin initializer
let logobrand = function(options) {
  let settings = videojs.mergeOptions(defaults, options);
  let player = this;

  let link = document.createElement("a");
    link.id = "vjs-logobrand-image-destination";
    link.href = settings.destination;
    link.target = "_blank";

  let image = document.createElement('img');
    image.id = 'vjs-logobrand-image';
    //image.style.height = settings.height;
    //image.style.width = settings.width;
    image.src = settings.image;

  link.appendChild(image);
  player.el().appendChild(link);

  this.loadImage = function(src){
    document.getElementById("vjs-logobrand-image").src = src;
  };
  this.setDestination = function(href){
    document.getElementById("vjs-logobrand-image-destination").href = href;
  };
  return this;
};
// register the plugin with video.js
videojs.plugin('logobrand', logobrand);

export default logobrand;
