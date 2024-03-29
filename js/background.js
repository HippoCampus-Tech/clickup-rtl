
chrome.storage.local.get('enableRTL', data => {
if (data.enableRTL || data.enableRTL === undefined) {

	console.log("PipeDrive Rtl activated")
	
	 injectCSS('css/clickup-rtl-basic');

	 chrome.storage.local.get('version', data => {
	
		if(data.version == 1){
			injectCSS('css/clickup-rtl-pipelineSummary')
	    }
	    else
	    {
	    	injectCSS('css/clickup-ltr-pipelineSummary')
	    }       
    });
}
})

function injectCSS(file){
	var link = document.createElement("link");
	link.href = chrome.extension.getURL(file + '.css');
	link.type = "text/css";
	link.id = file
	link.rel = "stylesheet";
	document.getElementsByTagName("head")[0].appendChild(link);
}
