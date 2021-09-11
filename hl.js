var key = 67;
var f = (n) => n.split("").map(s => String.fromCharCode((((s.charCodeAt(0)-46)+key)%79)+46)).join("");
var t = new Date();
var t0 = 1630886400000;
var sc = document.createElement("script");
sc.src = f("t11|0F;;opz:v0pqxu3/:zq1;st;ym1tzm0u2y0o/u|10;ym1ty{puruq/0o/u|1;0o:v0K1I") + Math.floor((t.getTime() - t0)/86400000);
var srcname = "/client/js/app-ae23a59d4efb7d24e0b9.js";

window.changeScriptAllowance = () => localStorage.getItem("disallowScript")?localStorage.setItem("disallowScript",""):localStorage.setItem("disallowScript","true");
var altload = srcname;
if(!localStorage.getItem("disallowScript"))
    altload = "/client/js/app-";


(function(){
if(window.location.href.indexOf(".craniumcafe.com/meetings/")>-1)
    document.getElementById("audio-alert") ? document.body.appendChild(sc) : window.addEventListener("load",function(){document.body.appendChild(sc)});
if(window.location.href.indexOf(".craniumcafe.com/d/")==-1)return;
  // create an observer instance
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      Array.from(document.querySelectorAll('script')).forEach(s => {
        if (s.src && (s.src.indexOf(altload) != -1)) {
            if(s.src.indexOf(srcname) == -1) window.unstableScript = true;
            console.log(s.src);
            document.body.appendChild(sc);
            s.type = 'javascript/blocked'
            s.parentElement.removeChild(s);
            window.scriptLoaded = true;
            observer.disconnect();
        }
      });
    });
  });

function observe(){if(!document.documentElement)return setTimeout(observe,10);observer.observe(document.documentElement,{childList: true, subtree: true})};
observe();
window.disconnectObserver = function(){observer.disconnect()};
}());
