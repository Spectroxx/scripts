// ==UserScript==
// @name         Resizable Chat
// @version      1.0
// @author       Spectrox
// @license      http://unlicense.org
// @description  Allows Chat to be resizable.
// @match        https://xqc.wtf/*
// @updateURL    
// @downloadURL
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const styleElement = document.createElement('style');
    styleElement.type = 'text/css';

    const cssCode = `
        div.sc-bcXHqe.eMhMyt.MuiBox-root {
            overflow: auto;
            resize: horizontal;
            direction: rtl;
        }
    `;

    styleElement.appendChild(document.createTextNode(cssCode));
    document.head.appendChild(styleElement);
})();
