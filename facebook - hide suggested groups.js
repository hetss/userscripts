// ==UserScript==
// @name        Facebook hide suggested groups
// @match       *://*facebook.com/groups/*
// @version     1.0
// @author      You
// @description Hide suggested groups
// ==/UserScript==
(function() {

  const targetNode = document.body;
  const config = { attributes: true, childList: true, subtree: true };
  const callback = function(mutationsList, observer) {
    for(let mutation of mutationsList) {
      if(mutation.type === 'childList') {
        var el = document.body.querySelector('a[class^="egoGYSJSeeAllLink"]');
        if(el != null) {
          el.closest('.pagelet').remove();
        }
      }
    }
  };
  
  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
})();
