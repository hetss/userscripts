// ==UserScript==
// @name        Twitter hide trends
// @match       *://twitter.com/*
// @version     1.0
// @author      You
// @description Hide trends
// ==/UserScript==
(function() {

  const targetNode = document.body;
  const config = { attributes: true, childList: true, subtree: true };
  const callback = function(mutationsList, observer) {
    for(let mutation of mutationsList) {
      if(mutation.type === 'childList') {
        var el = document.body.querySelector('div[aria-label^="Timeline: Trending"]');
        if(el != null) {
          el.parentNode.parentNode.parentNode.parentNode.remove();
        }
      }
    }
  };
  
  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
})();•
