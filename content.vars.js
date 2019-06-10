console.log("content.vars.js loaded");

var sitecoreTargets = {
	"Desktop": '[title="Desktop"]',
	"StartButton": '[id = "StartButton"]',
	"ContentEditor": '[title="Manage your content."]',
	"Navigate": '[title=" (Alt+N)"]',
	"ShowFavorites": '[title="Manage favorite items."]',
	"Publish": '[title=" (Alt+P)"]',
	"PublishSite": '[id="B414550BADAF4542C9ADF44BED5FA6CB3E_menu_F7178B759AA648EAA70B97D59C54B033"]',
	"NextButton": '[id="NextButton"]',
	"PublishDlgIframe": '[id="scContentIframeId0"]'

}

//function loadVars() {
console.log("loading vars");
var sitecoreKeys = {
	"targetDesktopTitle": {
		"selector": [sitecoreTargets.Desktop, sitecoreTargets.StartButton, sitecoreTargets.ContentEditor ],
		"whichkey": 66,
		"whichFriendly": "B",
		"ctrlKey": true
	},
	"favorites": {
		"selector": [sitecoreTargets.Navigate, sitecoreTargets.ShowFavorites ],
		"whichkey": 89,
		"whichFriendly": "Y",
		"ctrlKey": true,
	},
	"targetRedButton": {
		"selector": [sitecoreTargets.ContentEditor],
		"whichkey": 85,
		"whichFriendly": "U",
		"ctrlKey": true,
		"altKey": true,
		"shiftkey": true
	},
	"publishSite": {
		"selector": [sitecoreTargets.Publish, sitecoreTargets.PublishSite, sitecoreTargets.NextButton],
		"whichkey": 80,
		"whichFriendly": "P",
		"ctrlKey": true,
		"altKey": true,
		"shiftkey": false
	}
}
//}
function clickIfExists(value) {

	//alert(value);
	var desktopElement = document.querySelectorAll(value);

	if (desktopElement && desktopElement.length > 0) {
		console.log(desktopElement);
		var firstElem = desktopElement[0];
		firstElem.click();
	}

	console.log(document);
	console.log(desktopElement);

}
function setKeyEvent() {

	console.log("setKeyEvent");
	document.onkeyup = function (e) {
		var idx;
		var matchFound = false;
		console.log("triggered: " + e.which + " ctrl:" + e.ctrlKey + " alt: " + e.altKey + " shift: " + e.shiftKey);

		for (idx in sitecoreKeys) {
			var candidate = sitecoreKeys[idx];
			if (typeof (candidate.ctrlKey) === "undefined") {
				candidate.ctrlKey = false;
			}
			if (typeof (candidate.altKey) === "undefined") {
				candidate.altKey = false;
			}
			if (typeof (candidate.shiftKey) === "undefined") {
				candidate.shiftKey = false;
			}
			//console.log(candidate);
			//console.log(candidate + " " + candidate.whichkey);
			if (candidate.whichkey && candidate.whichkey === e.which) {
				console.log('which match');
				if (e.ctrlKey !== candidate.ctrlKey) {
					console.log("ctrl mismatch");
					break;
				}

				if (e.altKey !== candidate.altKey) {
					console.log("alt mismatch");
					break;
				}

				if (e.shiftKey !== candidate.shiftKey) {
					console.log("shift mismatch");
					break;
				}
				console.log('all match' + candidate.selector);

				for (var jdx = 0; jdx < candidate.selector.length; jdx++) {
					var oneSelector = candidate.selector[jdx];
					console.log("doing: " + oneSelector);
					clickIfExists(oneSelector);
				}


				//alert(candidate + " " + candidate.whichFriendly);
			}
		}

		//if (e.which == 77) {
		//	alert("M key was pressed");
		//} else if (e.ctrlKey && e.which == 66) {
		//	alert("Ctrl + B 2 shortcut combination was pressed - xxx");
		//} else if (e.ctrlKey && e.altKey && e.which == 89) {
		//	alert("Ctrl + Alt + Y shortcut combination was pressed");
		//} else if (e.ctrlKey && e.altKey && e.shiftKey && e.which == 85) {
		//	alert("Ctrl + Alt + Shift + U shortcut combination was pressed");
		//}
	};
}

setKeyEvent();