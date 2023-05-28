// ==UserScript==
// @name         Resizable Chat
// @version      1.1.1
// @author       Spectrox
// @license      http://unlicense.org
// @description  Allows Chat to be resizable.
// @match        https://xqc.wtf/*
// @icon         https://xqc.wtf/favicon.ico
// @updateURL    https://raw.githubusercontent.com/Spectroxx/scripts/main/userscripts/resizable-chat.js
// @downloadURL  https://github.com/Spectroxx/scripts/blob/main/userscripts/resizable-chat.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const styleElement = document.createElement('style');
    styleElement.type = 'text/css';

    const cssCode = `
        div.eMhMyt {
            overflow: auto;
            resize: horizontal;
            direction: rtl;
        }
        div.dbPVel {
           direction: ltr;
        }
        div.FHmcA {
           min-width: 0;
        }
    `;

    styleElement.appendChild(document.createTextNode(cssCode));
    document.head.appendChild(styleElement);
})();
