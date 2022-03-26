// ==UserScript==
// @name        Terraria Wiki Cleaner
// @match       *://terraria.wiki.gg/*
// @author      Spectrox
// @version     0.1
// @license     http://unlicense.org
// @namespace   *://terraria.wiki.gg/*
// @downloadURL https://raw.githubusercontent.com/Spectroxx/scripts/main/userscripts/terraria-wiki-cleaner.js
// @icon        https://external-content.duckduckgo.com/ip3/terraria.wiki.gg.ico
// @require     https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js
// @require     https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant       GM_addStyle
// ==/UserScript==

waitForKeyElements (".games-showcase-sidebar", killNode);
waitForKeyElements (".header-showcase", killNode);
waitForKeyElements (".games-showcase-footer", killNode);

function killNode (jNode) {
    jNode.remove ();
}