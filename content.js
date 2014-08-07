chrome.extension.onMessage.addListener(function(message){
	if (document.queryCommandEnabled("insertText")) {
		//Try to use rich text editing command
		document.execCommand("insertText", false, message.passphrase);
	} else {
		document.activeElement.value = message.passphrase;
	}
});
