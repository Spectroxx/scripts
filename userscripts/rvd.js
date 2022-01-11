// ==UserScript==
// @name         RVD
// @namespace    https://github.com/Spectroxx/userscripts/edit/main/scripts/rvd.js
// @version      1.05
// @description  Downloads Reddit videos
// @author       Spectrox
// @license      http://unlicense.org
// @downloadURL  https://raw.githubusercontent.com/Spectroxx/scripts/main/userscripts/rvd.js
// @match        *://*.reddit.com/*
// @icon         https://external-content.duckduckgo.com/ip3/www.reddit.com.ico
// ==/UserScript==
"use strict";
(function () {
   var btnStyles = {
      top: "-2.85em",
      left: "33em",
      position: "relative",
      background: "#1A1A1B",
      color: "#818384",
      border: "1px solid #818384",
      padding: "0.4em 0.6em",
      "font-size": "0.8em",
      "border-radius": "0.35em",
      "border-width": "0.1em"
   };
   var addLinks = (mutated, observer) => {
      var videoElem = document.querySelector("[data-test-id='post-content'] video");
      if (!videoElem) return;
      if (videoElem.getAttribute("vlinked")) return observer && observer.disconnect();
      videoElem.setAttribute("vlinked", 1);
      var req = new XMLHttpRequest();
      req.onreadystatechange = () => {
         if (req.readyState == XMLHttpRequest.DONE && req.status == 200) {
            let json, postData, vidData;
            try {
               json = JSON.parse(req.responseText);
               postData = json[0].data.children[0].data;
               vidData = postData.secure_media.reddit_video;
            } catch (e) {}
            if (!vidData) return console.log(postData || json || req.responseText);
            console.log(vidData);
            let parElem = videoElem.closest("[data-test-id='post-content']");
            let a = document.createElement("a"),
               btn = document.createElement("button");
            a.append(btn);
            let audiofallback_url = vidData.fallback_url.replace(/([A-Z])\w+/g, "DASH_audio");
            let videofallback_url = vidData.fallback_url;
            let post_url = window.location.href;
            let reddit_save = "https://sd.redditsave.com/download.php";
            let newfallback_url = reddit_save + "?permalink=" + post_url + "&video_url=" + videofallback_url + "&audio_url=" + audiofallback_url;
            a.href = newfallback_url;
            a.target = "_self";
            btn.innerHTML = "Download";
            btn.style["margin-top"] = "0.4em";
            parElem.append(a);
            for (let key in btnStyles) {
               btn.style[key] = btnStyles[key];
            }
            if (observer) observer.disconnect();
         }
      };
      req.open("GET", window.location.href.split("?")[0].replace(/\/$/, "") + ".json");
      req.send();
   };
   addLinks();
   var obs = new MutationObserver(addLinks);
   obs.observe(document.body, { childList: true, subtree: true });
})();
