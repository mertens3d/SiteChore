console.log("contentscript.js - loaded b");


//var s = document.createElement('script');
//s.src = chrome.extension.getURL('script.js');
//(document.head || document.documentElement).appendChild(s);
//s.onload = function () {
//	s.parentNode.removeChild(s);
//};



var s = document.createElement('script');
// TODO: add "script.js" to web_accessible_resources in manifest.json
s.src = chrome.runtime.getURL('content.vars.js');
console.log(s.src);
s.onload = function () {
	this.remove();
};
(document.head || document.documentElement).appendChild(s);



//s = document.createElement('script');
//// TODO: add "script.js" to web_accessible_resources in manifest.json
//s.src = chrome.runtime.getURL('contentscript.js');
//console.log(s.src);
//s.onload = function () {
//	this.remove();
//};
//(document.head || document.documentElement).appendChild(s);

