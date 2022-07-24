// ==UserScript==
// @name           instagram--download-all-media
// @version        0.0.1
// @namespace      https://github.com/FlowerForWar
// @description    User Script that allows you to safely download all user media
// @author         FlowerForWar
// @match          https://www.instagram.com/*
// @run-at         document-start
// @noframes
// @supportURL     https://github.com/FlowerForWar/instagram--download-all-media/issues
// @homepageURL    https://github.com/FlowerForWar/instagram--download-all-media
// @updateURL      https://github.com/FlowerForWar/instagram--download-all-media/raw/main/dist/instagram--download-all-media.meta.js
// @downloadURL    https://github.com/FlowerForWar/instagram--download-all-media/raw/main/dist/instagram--download-all-media.user.js
// @icon           https://github.com/FlowerForWar/instagram--download-all-media/blob/main/src/icons/user.png?raw=true
// @license        MIT
// ==/UserScript==

/**
 * Source files are available at https://github.com/FlowerForWar/instagram--download-all-media/tree/main/src
 */

function addStyle(styleText, id) {
  const head = document.getElementsByTagName('head')[0] || document.documentElement;
  const style = document.createElement('style');
  style.setAttribute('type', 'text/css');
  style.textContent = styleText;
  if (id) {
    style.setAttribute('id', id);
  }
  head.appendChild(style);
  return style;
}

addStyle(
  `
include: another.css
`
);

addStyle('include: main.min.css');

document.body.insertAdjacentHTML('beforeend', 'include: element.html');

console.log('userscript-modules-template');
