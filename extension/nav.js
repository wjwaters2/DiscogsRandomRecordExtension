chrome.tabs.query( { active: true, currentWindow: true }, function( tabs ) {
  chrome.tabs.update( tabs[0].id, { url: "http://67.media.tumblr.com/83b7e579c0dfc2b638c13fde663bf27f/tumblr_o0sc76F10x1v1z098o1_400.gif" } ); 
});
