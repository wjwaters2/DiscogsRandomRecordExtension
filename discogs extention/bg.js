var id = "jhghdiobedfbmficngikanbkbgeicbpf";
function reloadExtension(id) {
    chrome.management.setEnabled(id, false, function() {
        chrome.management.setEnabled(id, true);
    });
}
chrome.browserAction.onClicked.addListener(function(tab) {
    reloadExtension(id);
});
