// ==UserScript==
// @name         colorguess-solver
// @namespace    http://tampermonkey.net/
// @version      2024-02-05
// @description  haha lol werdl been beten
// @author       You
// @match        https://werdl.github.io/colorguess/
// @match        http://werdl.github.io/colorguess/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.io
// @grant        none
// ==/UserScript==
function simulateClick(e){var t,n=document.getElementById(e);document.createEvent&&(t=document.createEvent("MouseEvents")).initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),t?n.dispatchEvent(t):n.click&&n.click()}function rgbToHex(e,t,n){return"#"+(16777216+(e<<16)+(t<<8)+n).toString(16).slice(1)}const parseCssRgbString=e=>{let t=e.replace(/rgba?\(([^)]+)\)/,"$1").split(/[,\s/]+/).filter(Boolean);if(t.length<3)return;let n=(e,t)=>(e=e.trim()).endsWith("%")?Math.min(Number.parseFloat(e)*t/100,t):Math.min(Number.parseFloat(e),t),l=n(t[0],255),r=n(t[1],255),i=n(t[2],255),s;return 4===t.length&&(s=n(t[3],1)),[l,r,i,s]};setInterval(()=>{var e,t=parseCssRgbString(document.body.style.backgroundColor);document.getElementById("inp-el").value=`${t[0]},${t[1]},${t[2]}`,simulateClick("mark")},1);
