chrome.tabs.query( { active: true, currentWindow: true }, function( tabs ) {
  chrome.tabs.update( tabs[0].id, { url: "http://www.dirtydiscoradio.com/wp-content/uploads/2014/10/tumblr_mqe93br8Er1r5nowgo1_1280.jpg" } ); 
});
