// ==UserScript==
// @name         LiveStream Video Controls
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Auto Enables Video Controls on SportsHD.live
// @author       Spectrox
// @match        https://live.cdnz.one/*
// @icon         https://www.google.com/s2/favicons?domain=cdnz.one
// @grant        none
// ==/UserScript==

window.addEventListener("load", function(event) {
    cbut();
    console.log("Enabled Stream Controls.");
});