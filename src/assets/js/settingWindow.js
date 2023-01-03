
function closeCurrentWindow(){
    window.close();
}

var checkboxSetting = document.getElementById('setting-sync-device-checkbox-auto')
checkboxSetting.addEventListener('change', function() {
    if (this.checked) {
      localStorage.setItem('sync-with-device-mode', 'true');
    } else {
      localStorage.setItem('sync-with-device-mode', 'false');
    }
  });

  checkboxSetting.checked = localStorage.getItem('sync-with-device-mode')==='true' ? true : false;

  //setting-sync-device-checkbox-sync
  var radioSettingSyncNow = document.getElementById('setting-sync-device-checkbox-sync')
  radioSettingSyncNow.addEventListener('change', function() {
    if (this.checked) {
      localStorage.setItem('sync-with-device-mode-now', 'true');
    // console.log("checked")
    } else {
      //   localStorage.removeItem('sync-with-device-mode-now');
    // console.log("unchecked")
    }
  });
