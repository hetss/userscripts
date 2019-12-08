// ==UserScript==
// @name        Unlogged Instagram
// @match       *://www.instagram.com/*
// @grant       GM_setValue
// @version     0.2
// @author      You
// @description Fuck instagram
// ==/UserScript==

(function() {
  
  const targetNode = document.body;
  const config = { attributes: true, childList: true, subtree: true };
  const callback = function(mutationsList, observer) {
    for(let mutation of mutationsList) {
      if(mutation.type === 'childList') {
        if(mutation.target == targetNode) {
          mutation.addedNodes.forEach(function(el) {
            if(el.getAttribute('role') == 'presentation') {
              el.parentNode.removeChild(el);
            }
          });
        }
      } else if (mutation.type === 'attributes') {
        if(mutation.target == targetNode) {
          if(mutation.attributeName == 'style') {
            if(document.body.style.overflow != '') {
              document.body.style.overflow = '';
            }
          }
        }
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
