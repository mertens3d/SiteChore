
console.log("background.js loaded");

function loadFunctions() {



}





chrome.commands.onCommand.addListener(function (command) {
	//loadFunctions();
	console.log('onCommand event received for message 666: ', command);

	//chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
	//	chrome.tabs.executeScript(
	//		tabs[0].id, [
	//			{ file: "sitecore-shortcut-functions.js" },
	//			{ code: "clickIfExists('id=StartButton]')" }
	//		]
	//	);

	//});

});

chrome.browserAction.onClicked.addListener(function (tab) {
	// for the current tab, inject the "inject.js" file & execute it

	console.log("here");

	chrome.tabs.executeScript(tab.ib, {
		file: 'sitecore-shortcut-functions.js'
	});

});

chrome.storage.sync.get('color', function (data) {
	//changeColor.style.backgroundColor = data.color;
	//changeColor.setAttribute('value', data.color);


})


chrome.runtime.onInstalled.addListener(function () {

	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.executeScript(
			tabs[0].id,
			{ file: "sitecore-shortcut-functions.js" }
		);

	});

	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.executeScript(
			tabs[0].id,
			{ file: "sitecore-short-cuts.js" }
		);

	});




	chrome.storage.sync.set({ color: '#3aa757' }, function () {
		console.log('The color is green.');
	});


	chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
		chrome.declarativeContent.onPageChanged.addRules([{
			conditions: [new chrome.declarativeContent.PageStateMatcher({
				pageUrl: { pathContains: '/' },
			})
			],
			actions: [new chrome.declarativeContent.ShowPageAction()]
		}]);
	});


});


//sitecore / shell