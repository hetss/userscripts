// ==UserScript==
// @name 4chan-X custom hotkey(s)
// @version      0.2
// @description  Adds custom hotkeys for 4chan-X
// @author       You
// @icon         
// @match        *://boards.4chan.org/*/thread/*
// @match        *://boards.4channel.org/*/thread/*
// @grant        GM_setValue
// ==/UserScript==

(function() {
  'use strict';
  var hidden = false;
  console.log('custom hotkeys loaded');
  function toggle_prefetch(e) {
    //console.log(e.keyCode);
    var aE = document.activeElement;
    var inputs = ['input', 'select', 'button', 'textarea'];
    if (aE && inputs.indexOf(aE.tagName.toLowerCase()) !== -1) {
        return false;
    }
    if (e.keyCode == 80) { // 80 = p
      document.querySelector('a[title="Prefetch Images"]').click();
      console.log('Prefetch toggled.');
    }
    if (e.keyCode == 72) { // 72 = h
      var el = document.body.querySelectorAll(".postMessage");
      el.forEach(function(item) {
        if(hidden == false) {
          item.style.display = 'none';
        } else {
          item.style.display = '';
        }
      });
      hidden = !hidden;
    }
  }
  document.addEventListener('keyup', toggle_prefetch, false);
})();
