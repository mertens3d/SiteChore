
console.log("contentscript.js - loaded b");


//var s = document.createElement('script');
//s.src = chrome.extension.getURL('script.js');
//(document.head || document.documentElement).appendChild(s);
//s.onload = function () {
//	s.parentNode.removeChild(s);
//};

document.onkeyup = function (e) {
	if (e.which == 77) {
		alert("M key was pressed");
	} else if (e.ctrlKey && e.which == 66) {
		alert("Ctrl + B shortcut combination was pressed");
	} else if (e.ctrlKey && e.altKey && e.which == 89) {
		alert("Ctrl + Alt + Y shortcut combination was pressed");
	} else if (e.ctrlKey && e.altKey && e.shiftKey && e.which == 85) {
		alert("Ctrl + Alt + Shift + U shortcut combination was pressed");
	}
};


function testDog() {
	console.log("trying");
	var btn = document.querySelectorAll('[name="LogInBtn"]');
	if (btn && btn.length > 0) {
		console.log("found " + btn);
		btn[0].click();
	}
}
testDog();