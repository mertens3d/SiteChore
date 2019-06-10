console.log("content.vars.js loaded");

//function loadVars() {
console.log("loading vars");
var sitecoreTargets = {
	"targetDesktopTitle": {
		"selector": '[title="Desktop"]',
		"whichkey": 66,
		"whichFriendly": "B",
		"ctrlKey": true
	},
	"targetStartButton": {
		"selector": '[id = "StartButton"]',
		"whichkey": 89,
		"whichFriendly": "Y",
		"ctrlKey": true,
		"altKey": true
	},
	"targetRedButton": {
		"selector": '[title="Manage your content."]',
		"whichkey": 85,
		"whichFriendly": "U",
		"ctrlKey": true,
		"altKey": true,
		"shiftkey": true
	}
}
//}


function testCat() {
	console.log("testCat");
}


document.onkeyup = function (e) {
	var idx;

	for (idx in sitecoreTargets) {
		console.log(idx);
	}



	if (e.which == 77) {
		alert("M key was pressed");
	} else if (e.ctrlKey && e.which == 66) {
		alert("Ctrl + B 2 shortcut combination was pressed - xxx");
	} else if (e.ctrlKey && e.altKey && e.which == 89) {
		alert("Ctrl + Alt + Y shortcut combination was pressed");
	} else if (e.ctrlKey && e.altKey && e.shiftKey && e.which == 85) {
		alert("Ctrl + Alt + Shift + U shortcut combination was pressed");
	}
};


function testDog() {
	console.log("trying");
	//loadVars();
	var btn = document.querySelectorAll('[name="LogInBtn"]');
	if (btn && btn.length > 0) {
		console.log("found " + btn);
		btn[0].click();
	}
}
//testDog();

console.log(sitecoreTargets.targetDesktopTitle);