(function(w,d){function bindOnReady(handler){var called=false,doc=d.documentElement;function ready(){if(called)return;called=true;handler();}
function tryScroll(){if(called)return;try{doc.doScroll("left");ready();}
catch(e){setTimeout(tryScroll,10);}}
if(d.addEventListener){d.addEventListener("DOMContentLoaded",ready,false);}
else if(d.attachEvent){try{var isFrame=w.frameElement!=null;}
catch(e){}
if(doc.doScroll&&!isFrame){tryScroll();}
d.attachEvent("onreadystatechange",function(){if(d.readyState==="complete"){ready();}})}
else if(w.addEventListener){w.addEventListener('load',ready,false);}
else if(w.attachEvent){w.attachEvent('onload',ready);}
else{var fn=w.onload;w.onload=function(){fn&&fn();ready();}}}
function sapeRTonReady(){sapeRtHandler_1416={sapeRTDrawPixel:function(pixel_id){var parent=document.body;var pixel_urls=[];for(var i=0;i<pixel_urls.length;i++){this.sapeRTInsertJsPixel(parent,pixel_urls[i]);}
this.sapeRTInsertSspPixel(parent,pixel_id);},sapeRTInsertSspPixel:function(p,pixel_id){if(typeof pixel_id==='undefined'){return false;}
var i=document.createElement("img");i.src="//www.acint.net/pxl/rtrg?dp=16&id="+pixel_id;i.setAttribute('style','display:none');p.appendChild(i);return true;},sapeRTInsertJsPixel:function(p,pixel_url){if(typeof pixel_url==='undefined'){return false;}
var e=document.createElement("script");e.type="text/javascript";e.async=true;e.src=pixel_url;p.appendChild(e);return true;}};sapeRtHandler_1416.sapeRTDrawPixel(1416);}
if(d.readyState=='interactive'||d.readyState=='complete'){sapeRTonReady();}
else{bindOnReady(sapeRTonReady);}})(window,document);var dfwjbfVbvgUFIUopho=window;if(!Object.prototype.hasOwnProperty.call(dfwjbfVbvgUFIUopho,'_acic')||typeof window._acic!=='object'){var _acic={dataProvider:16,allowDspTrack:true};(function(){var e=document.createElement("script");e.type="text/javascript";e.async=true;e.src="//www.acint.net/aci.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)})()}