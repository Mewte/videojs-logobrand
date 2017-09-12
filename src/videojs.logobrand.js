import videojs from 'video.js';

// define some reasonable defaults
const defaults = {
  image: '',
  destination: '#'
};

// plugin initializer
function logobrand(options) {
  const settings = videojs.mergeOptions(defaults, options),
        player   = this;

  const link = document.createElement('a');

  link.id     = 'vjs-logobrand-image-destination';
  link.href   = settings.destination;
  link.target = '_blank';

  const image = document.createElement('img');

  image.id  = 'vjs-logobrand-image';
  image.src = settings.image;

  link.appendChild(image);
  player.el().appendChild(link);

  this.loadImage = src => {
    document.getElementById('vjs-logobrand-image').src = src;
  };

  this.setDestination = href => {
    document.getElementById('vjs-logobrand-image-destination').href = href;
  };

  return this;
};

// register the plugin with video.js
videojs.registerPlugin('logobrand', logobrand);
