// ==UserScript==
// @name        Terraria Wiki Cleaner
// @description Terraria Wiki Cleaner removes the annoying header, sidebar and footer banners from the wiki while also fixing the spacing issues when removing those ads.
// @match       *://terraria.wiki.gg/*
// @author      Spectrox
// @version     0.1
// @license     http://unlicense.org
// @namespace   *://terraria.wiki.gg/*
// @downloadURL https://raw.githubusercontent.com/Spectroxx/scripts/main/userscripts/terraria-wiki-cleaner.js
// @icon        https://external-content.duckduckgo.com/ip3/terraria.wiki.gg.ico
// @require     https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js
// @grant       GM_addStyle
// ==/UserScript==

function waitForKeyElements(selectorTxt, actionFunction, bWaitOnce, iframeSelector) {
    var targetNodes, btargetsFound;

    if (typeof iframeSelector == "undefined") targetNodes = $(selectorTxt);
    else targetNodes = $(iframeSelector).contents().find(selectorTxt);

    if (targetNodes && targetNodes.length > 0) {
        btargetsFound = true;
        targetNodes.each(function () {
            var jThis = $(this);
            var alreadyFound = jThis.data("alreadyFound") || false;

            if (!alreadyFound) {
                var cancelFound = actionFunction(jThis);
                if (cancelFound) btargetsFound = false;
                else jThis.data("alreadyFound", true);
            }
        });
    } else {
        btargetsFound = false;
    }
  
    var controlObj = waitForKeyElements.controlObj || {};
    var controlKey = selectorTxt.replace(/[^\w]/g, "_");
    var timeControl = controlObj[controlKey];

    if (btargetsFound && bWaitOnce && timeControl) {
        clearInterval(timeControl);
        delete controlObj[controlKey];
    } else {
        if (!timeControl) {
            timeControl = setInterval(function () {
                waitForKeyElements(selectorTxt, actionFunction, bWaitOnce, iframeSelector);
            }, 300);
            controlObj[controlKey] = timeControl;
        }
    }
    waitForKeyElements.controlObj = controlObj;
}

waitForKeyElements(".games-showcase-sidebar", killNode);
waitForKeyElements(".header-showcase", killNode);
waitForKeyElements(".games-showcase-footer", killNode);

function killNode(jNode) {
    jNode.remove();
}
