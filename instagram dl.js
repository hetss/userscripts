// ==UserScript==
// @name        Instagram DL
// @match       *://www.instagram.com/*
// @grant       GM_setValue
// @version     0.2
// @author      You
// ==/UserScript==

(function() {
  
  const targetNode = document.body;
  const config = { attributes: true, childList: true, subtree: true };
  const callback = function(mutationsList, observer) {
    for(let mutation of mutationsList) {
      if (mutation.type === 'attributes') {
        if(mutation.target.nodeName = 'IMG') {
          if(mutation.attributeName == 'src') {
            el = mutation.target;
            if(el.getAttribute('linked') != 'linked') {
              var u = el.src
              el.insertAdjacentHTML('afterend', '<a href="'+u+'" target="_blank" style="position: absolute; bottom: 30px; left: 30px; z-index: 100000; font-size: 30px;">❤️</a>');
              el.setAttribute('linked', 'linked');
            }
          }
        }
      }
    }
  };
  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
})();
