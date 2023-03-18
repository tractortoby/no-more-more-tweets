// ==UserScript==
// @name         No more "More Tweets" by adding question mark
// @namespace    https://twitter.com/runningtractor
// @version      0.2
// @description  By adding a question mark to the end of a Twitter URL, you can avoid seeing the "More Tweets" message.
// @author       https://twitter.com/runningtractor
// @icon         https://www.google.com/s2/favicons?sz=64&domain=greasyfork.org
// @grant        none
// @license      MIT
// @match        *://twitter.com/*
// ==/UserScript==

const regex = /\/status\/\d+$/;
if (regex.test(window.location.href)) {
  if (window.location.href.slice(-1) !== '?') {
    window.location.href += '?';
  }
}
