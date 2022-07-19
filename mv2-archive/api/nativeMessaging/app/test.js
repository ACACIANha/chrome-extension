// import {sendNativeMessage} from './background.js'

function appendMessage(text) {
    document.getElementById('response').innerHTML += "<p>" + text + "</p>";
}

function sendNativeMessageEnter(event) {
    if (event.keyCode != 13) {
        return;
    }
    sendNativeMessage();
}

// function onNativeMessage(message) {
//     appendMessage("Received message test: <b>" + JSON.stringify(message) + "</b>");
// }

// function onDisconnected() {
//     appendMessage("Failed to connect: " + chrome.runtime.lastError.message);
//     port = null;
// }

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('send-message-button').addEventListener(
        'click', connectAndSendNativeMessage);
    document.getElementById('input-text').addEventListener(
        'keydown', sendNativeMessageEnter);
});
