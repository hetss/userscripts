// ==UserScript==
// @name 4chan highlight highres images
// @version      0.3
// @description  Highlights large images.
// @author       You
// @icon         
// @match        *://boards.4chan.org/*/thread/*
// @grant        GM_setValue
// ==/UserScript==

(function() {
  const lowres_lim = 1000;
  const regular_lim = 999; // limit for regular boards
  const high_lim = 1499; // limit for /hr/
  const happy_lim = 1999; // :)
  const extreme_lim = 2999; // wow
  const yowsa_lim = 4999;
  function highlight_all() {
    const title_regex = /\/hr\//i;
    const regex = /\d+\s[km]b,\s(\d+)\x(\d+)/i;
    const name_regex = /^sample.+/i;
    const gif_regex = /\.gif/i;
    var lim = regular_lim;
    if(title_regex.test(document.title)) {
      lim = high_lim;
    }
    let m;
    var el = document.body.querySelectorAll(".file-info");
    el.forEach(function(item) {
      if ((m = name_regex.exec(item.innerText)) !== null || (m = gif_regex.exec(item.innerText)) !== null ) {
        item.style.color = "red";
        item.style.textDecoration = "line-through";
      } else {
        if ((m = regex.exec(item.innerText)) !== null) {
          x = parseInt(m[1]);
          y = parseInt(m[2]);
          if(x > lim && y > lim) {
            item.style.color = "green";
          }
          if(x > happy_lim && y > happy_lim) {
            item.style.fontWeight = "bold";
          }
          if(x > extreme_lim && y > extreme_lim) {
            if(x > yowsa_lim && y > yowsa_lim) {
              item.style.backgroundColor = "yellow";
            } else {
              item.style.backgroundColor = "lightgreen";
            }

          }
          if(x < lowres_lim && y < lowres_lim) {
            item.style.color = "gray";
            item.style.textDecoration = "line-through";
          }
        }
      }
    });
  }
  for(var i=0, max=10; i < max; i++) {
    setTimeout(highlight_all,500+(500*i));
  }
  setInterval(highlight_all,10000);
})();
