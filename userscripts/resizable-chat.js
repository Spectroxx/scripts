// ==UserScript==
// @name         Resizable Chat
// @version      1.0
// @author       Spectrox
// @license      http://unlicense.org
// @description  Allows Chat to be resizable.
// @match        https://xqc.wtf/*
// @updateURL    https://raw.githubusercontent.com/Spectroxx/scripts/main/userscripts/resizable-chat.js
// @downloadURL  https://github.com/Spectroxx/scripts/blob/main/userscripts/resizable-chat.js
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
