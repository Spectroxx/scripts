// ==UserScript==
// @name        Fanshawe Tweaks
// @match       *://www.fanshaweonline.ca/*
// @grant       none
// @version     1.0
// @author      Spectrox
// @description
// ==/UserScript==

(function() {
    'use strict';

    var observer = new MutationObserver(function() {
        var elements = document.querySelectorAll('.d2l-twopanelselector-side.d2l-twopanelselector-side-sep, .d2l-twopanelselector-side-bg.d2l-twopanelselector-side-sep');
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.background = 'none';
        }
    });

    observer.observe(document, { childList: true, subtree: true });
})();