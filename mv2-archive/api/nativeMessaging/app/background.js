var port = null;

function sendNativeMessage() {
    message = {"text": document.getElementById('input-text').value};
    // message = {"text": "name"};
    console.log('sendNativeMessage');
    console.log(message);
    port.postMessage(message);
}

function onNativeMessage(message) {
    alert(JSON.stringify(message));
    console.log(message);
    port.disconnect();
    // port.onDisconnect.onMessage();
    // port.onDisconnect.call();
    // port.dispatchEvent(new Event("disconnect"))
    // port.dispatchEvent(new Event("onDisconnect"))
    // port.fireevent
}

function onDisconnected() {
    alert('onDisconnected2');
    console.log('onDisconnected');
    port = null;
}

function connect() {
    var hostName = "com.google.chrome.example.echo";
    port = chrome.runtime.connectNative(hostName);
    port.onMessage.addListener(onNativeMessage);
    port.onDisconnect.addListener(onDisconnected);
    console.log('connect');
    // console.log('connect' + port.value());
}

function connectAndSendNativeMessage() {
    connect();
    sendNativeMessage();
}

