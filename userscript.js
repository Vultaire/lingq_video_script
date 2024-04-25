// ==UserScript==
// @name         LingQ Video resizer
// @namespace    http://vultaire.net/
// @version      2024-04-25
// @match        https://www.lingq.com/en/learn/*/web/reader/*
// ==/UserScript==

(function() {
    'use strict';

    // Edit these as you like.
    var height = 370;
    var width = 600;

    // This will inject the custom style.
    var style = document.createElement('style')
    style.textContent = `
div.video-wrapper {
  height: ${height}px !important;
  width: ${width}px !important;
}

div.modal-content.is-medium {
  max-width: ${width}px !important;
}

div.sentence--video-player > div > div {
  height: ${height}px !important;
  width: ${width}px !important;
}
`
    document.querySelector('head').appendChild(style)
})();
