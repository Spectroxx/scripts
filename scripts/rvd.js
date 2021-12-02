// ==UserScript==
// @name         RVD
// @namespace    https://github.com/Spectroxx/tampermonkey-scripts/edit/main/scripts/rvd.js
// @version      0.1
// @description  Downloads Reddit videos
// @author       Spectrox
// @license      WTFPL (http://www.wtfpl.net/about)
// @grant        none
// @match        *://*.reddit.com/*
// ==/UserScript==
"use strict";
(function () {
   var btnStyles = {
      background: "#fff",
      color: "black",
      border: "1px solid #555555",
      padding: "0.4em 0.6em",
      "text-align": "center",
      "font-size": "0.8em",
      margin: "0.2em",
      "transition-duration": "0.4s",
      cursor: "pointer",
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
