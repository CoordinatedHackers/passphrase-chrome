if (!window.loaded) {
	window.loaded = true;

	chrome.extension.onMessage.addListener(function(message){
		// https://bugs.chromium.org/p/chromium/issues/detail?id=39507
		if (document.queryCommandEnabled("insertText")) {
			//Try to use rich text editing command
			document.execCommand("insertText", false, message.passphrase);
		} else {
			document.activeElement.value = message.passphrase;
		}
	});
}
