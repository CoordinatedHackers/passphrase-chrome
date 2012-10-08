chrome.extension.onMessage.addListener(function(message){
	document.activeElement.value = message.passphrase;
});
