// ==UserScript==
// @name         No more "More Tweets" by adding question mark
// @namespace    https://twitter.com/runningtractor
// @version      0.3
// @description  By adding a question mark to the end of a Twitter URL, you can avoid seeing the "More Tweets" message.
// @author       https://twitter.com/runningtractor
// @icon         https://www.google.com/s2/favicons?sz=64&domain=greasyfork.org
// @grant        none
// @license      MIT
// @match        *://twitter.com/*
// ==/UserScript==

const questionMarkIndex = window.location.href.indexOf('?');

if (window.location.href.length > questionMarkIndex + 1) {
  // Remove all the URL parameters after the "?"
  window.location.href = window.location.href.slice(0, questionMarkIndex + 1);
}

const regex = /\/status\/\d+$/;

if (regex.test(window.location.href)) {
  if (window.location.href.slice(-1) !== '?') {
    window.location.href += '?';
  }
}
