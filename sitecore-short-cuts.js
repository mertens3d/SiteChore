var targetDesktopTitle = '[title="Desktop"]';
var targetStartButton = '[id = "StartButton"]';
var targetRedButton = '[title="Manage your content."]';

console.log("sitecore-short-cuts loaded");



//document.querySelectorAll(targetStartButton)[0].click()
//document.querySelectorAll(targetRedButton)[0].click()

clickIfExists(targetStartButton);
clickIfExists(targetRedButton);




document.getElementById("theButton").addEventListener("click",
	function () {
		window.postMessage({ type: "FROM_PAGE", text: "Hello from the webpage!" }, "*");
	}, false);


var port = chrome.runtime.connect();

window.addEventListener("message", function (event) {
	// We only accept messages from ourselves
	if (event.source != window)
		return;

	if (event.data.type && (event.data.type == "FROM_PAGE")) {
		console.log("Content script received: " + event.data.text);
		port.postMessage(event.data.text);
	}
}, false);
