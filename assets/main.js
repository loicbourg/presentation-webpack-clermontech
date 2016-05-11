var element = document.getElementById('slides');
element.innerHTML = require('slides.js');

require('reveal.js/css/reveal.css');
require('reveal.js/css/theme/solarized.css');

var reveal = require('reveal.js/js/reveal.js');

reveal.initialize();