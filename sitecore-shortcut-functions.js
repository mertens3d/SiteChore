console.log('shortcut functions loaded');

function test() {
	console.log("etst");

}

test();
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
