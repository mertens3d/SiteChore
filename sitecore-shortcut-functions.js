console.log('shortcut functions loaded');

function test() {
	console.log("etst");

}

test();


var s = document.createElement('script');
// TODO: add "script.js" to web_accessible_resources in manifest.json
s.src = chrome.runtime.getURL('content.vars.js');
console.log(s.src);
s.onload = function () {
	this.remove();
};
(document.head || document.documentElement).appendChild(s);

function clickIfExists(value) {

	alert(value);


	var desktopElement = document.querySelectorAll(targetDesktopTitle);

	if (desktopElement && desktopElement.length > 0) {
		console.log(desktopElement);
		var firstElem = desktopElement[0];
		firstElem.click();
	}

	console.log(document);
	console.log(desktopElement);

}
