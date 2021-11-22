'use strict';


document.addEventListener('DOMContentLoaded', function () {


var enableRTL = true; //disabled by default (beta)
var toggleBtn = document.getElementById('toggle');

toggleBtn.onclick = () => {
    enableRTL = !enableRTL;
    toggleBtn.textContent = enableRTL ? 'Disable' : 'Enable';
    chrome.storage.local.set({enableRTL:enableRTL});

    var code = 'window.location.reload();';
    chrome.tabs.executeScript({code: code});

    window.close();
};


chrome.storage.local.get('enableRTL', data => {
    enableRTL = (data.enableRTL == true || data.enableRTL === undefined) ? true : false;
    toggleBtn.textContent = enableRTL ? 'Disable' : 'Enable';
});


//Clickup body RTL or LTR (1=RTL, 2=LTR)
var versionRadio = document.getElementsByName('version');
chrome.storage.local.get('version', data => {  
  var checkedVersion = data.version === undefined ? 2 : data.version;

  for (var i = 0; i < versionRadio.length; i++) {
  
    if(versionRadio[i].id == checkedVersion){
      versionRadio[i].checked = true;
    }
    else
    {
      versionRadio[i].checked = false;
    }

    
    versionRadio[i].addEventListener('click', changeRTLorLTRversion);
  }
});



function changeRTLorLTRversion(e){

  var version = document.querySelector("input[name=version]:checked").value;
  chrome.storage.local.set({version:version});

  var code = 'window.location.reload();';
  chrome.tabs.executeScript({code: code});

  window.close();

}

});
