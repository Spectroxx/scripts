// ==UserScript==
// @name         LiveStream Video Controls
// @namespace    http://tampermonkey.net/
// @version      1.01
// @description  Auto Enables Video Controls on SportsHD.live
// @author       Spectrox
// @match        https://live.cdnz.one/*
// @icon         https://www.google.com/s2/favicons?domain=cdnz.one
// @grant        none
// @homepageURL  https://github.com/Spectroxx/tampermonkey-scripts/tree/main/scripts
// @downloadURL  https://raw.githubusercontent.com/Spectroxx/tampermonkey-scripts/main/scripts/tampermonkey-sportshd-controls.js
// ==/UserScript==

window.addEventListener("load", function(event) {
    cbut();
    console.log("Enabled Video Controls.");
});
