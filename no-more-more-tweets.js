// ==UserScript==
// @name         No more "More Tweets" by adding question mark
// @namespace    https://github.com/tractortoby/no-more-more-tweets
// @version      0.5
// @description  By adding a question mark to the end of the Twitter URL on an individual tweet, you can avoid seeing the "More Tweets" message.
// @author       https://twitter.com/runningtractor
// @icon         https://raw.githubusercontent.com/tractortoby/no-more-more-tweets/main/runningtractor.png
// @grant        none
// @license      MIT
// @run-at       document-idle
// @match        *://twitter.com/*/status/*
// @match        *://mobile.twitter.com/*/status/*
// @exclude      *://twitter.com/settings/*
// @exclude      *://twitter.com/*/status/*/photo/*
// @exclude      *://twitter.com/*/status/*/video/*
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
