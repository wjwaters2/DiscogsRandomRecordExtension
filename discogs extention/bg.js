//'id' needs to be the value of the Chrome Extention ID so it can be 'reloaded' onclick
var id = "jhghdiobedfbmficngikanbkbgeicbpf";
function reloadExtension(id) {
    chrome.management.setEnabled(id, false, function() {
        chrome.management.setEnabled(id, true);
    });
}
chrome.browserAction.onClicked.addListener(function(tab) {
    reloadExtension(id);
});
