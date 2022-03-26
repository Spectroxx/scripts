// ==UserScript==
// @name     Terraria Wiki Add Remover
// @match    *://terraria.wiki.gg/*
// @require  https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant    GM_addStyle

// ==/UserScript==

waitForKeyElements (".games-showcase-sidebar", killNode);
waitForKeyElements (".header-showcase", killNode);
waitForKeyElements (".games-showcase-footer", killNode);

function killNode (jNode) {
    jNode.remove ();
}