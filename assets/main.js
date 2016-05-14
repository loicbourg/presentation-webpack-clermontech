var element = document.getElementById('slides');
element.innerHTML = require('slides.js');

require('reveal.js/css/reveal.css');
require('reveal.js/css/theme/blood.css');

require('script!reveal.js/lib/js/head.min.js');
require('script!reveal.js/lib/js/classList.js');
require('script!reveal.js/js/reveal.js');

require('script!reveal.js/plugin/notes/notes.js');
require('script!reveal.js/plugin/highlight/highlight.js');

window.hljs.initHighlightingOnLoad();

window.Reveal.initialize({
    history: true,
    dependencies: [
        {
            src: 'notes.js', async: true
        }
    ]
});