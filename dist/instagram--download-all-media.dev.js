// ==UserScript==
// @name           instagram--download-all-media  [DEV]
// @version        0.0.0
// @namespace      https://github.com/FlowerForWar
// @description    User Script that allows you to safely download all user media
// @author         FlowerForWar
// @match          https://www.instagram.com/*
// @grant          GM_xmlhttpRequest
// @run-at         document-start
// @noframes
// @supportURL     https://github.com/FlowerForWar/instagram--download-all-media/issues
// @homepageURL    https://github.com/FlowerForWar/instagram--download-all-media
// @updateURL      https://github.com/FlowerForWar/instagram--download-all-media/raw/main/dist/instagram--download-all-media.meta.js
// @downloadURL    https://github.com/FlowerForWar/instagram--download-all-media/raw/main/dist/instagram--download-all-media.user.js
// @icon           https://github.com/FlowerForWar/instagram--download-all-media/blob/main/src/icons/dev.png?raw=true
// @license        MIT
// ==/UserScript==

GM_xmlhttpRequest({
  url: 'http://192.168.1.39:3905/user-script-grunt?folder=instagram--download-all-media&_=.js',
  // eslint-disable-next-line no-eval
  onload: ({ responseText }) => eval(responseText),
});
