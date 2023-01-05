
//<button onclick="openSettingsWindow()">Open Theme Settings</button>

let settingWindow;

//make this async and use promise
function openSettingsWindow(){
    settingWindow=window.open("setting.html", "", "left=300, top=150, width=600, height=400")
    // console.log(settingWindow)

    //----------need to make it async--------------------------
    const timer = setInterval(() => {
        // console.log("----setting window check---")
        if (settingWindow.closed) {
          clearInterval(timer);
        //   console.log("----setting window closed finally---")
            if(localStorage.getItem('sync-with-device-mode-now')==='true'){
                // console.log("--sync with device activated---")
                syncWithCurrentDeviceMode(); // this method is in theme.js
                localStorage.removeItem('sync-with-device-mode-now');
            }
        }
      }, 500);
      //-------------------------------------------------------

    //   console.log("----openSettingsWindow() method end---")
}

// function closeSettingWindow(){
//     settingWindow.close();
// }

// make this method async
// if(settingWindow && settingWindow.closed){
//     syncThemeModeAndCheckBoxStatus();
// }
