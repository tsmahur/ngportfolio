// root colors
var crimsonn= "crimson";
var white="#ffffff";
var black="#0d0d0d";
var grey="#aaa";
var dark_grey="#545151";
var grey_fade="#1a1a1a";
var purple="#6058c9";
var puprle_fade="#dddbf4";
var puprle_fade_hover="#a5a3c6";
var purple_backdrop="230, 225, 245";
var black_backdrop="35, 35, 35";

// button for mode
// var btn=document.getElementById('color-mode');
// btn.addEventListener("click", switchMode);

var r = document.querySelector(':root');
var currentMode = localStorage.getItem('mode-portfolio-current');
var autoSyncDeviceMode = localStorage.getItem('sync-with-device-mode');
//-----------------------------------------------------------------------------------------------------

//on page load, setting mode based on device theme
function syncWithCurrentDeviceMode() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setMode('dark');
    }
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        setMode('light');
    }
}

//when device mode is changed then change the theme automatically
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if(autoSyncDeviceMode==null || autoSyncDeviceMode==='true'){ //autoSyncDeviceMode is not set OR autoSyncDeviceMode is true
            const modeToSet = e.matches ? "dark" : "light";
            setMode(modeToSet)
            // setModeCheckBox(modeToSet);
        }else{
            //device theme changed, but skipping because sync-with-device-mode is false
        }
    });


//setting mode using check box
var checkbox = document.getElementById('color-mode');
if(checkbox){
    checkbox.addEventListener('change', function() {
    if (this.checked) {
        setMode('light');
    } else {
        setMode('dark');
    }
    });
}


//enable mode on all page by default on load
// window.onload.apply(syncMode);
syncThemeModeAndCheckBoxStatus();//----sycning mode every time when page is load i.e, script is executed

function syncThemeModeAndCheckBoxStatus(){
    // var currentMode = localStorage.getItem('mode-portfolio-current');
    var modeToSet=currentMode!=null?currentMode:'dark'; //deciding the default mode
    // console.log("mode synced <<onload>>: currentMode from storage= "+currentMode)
    // console.log("modeToSet = "+modeToSet)
    setMode(modeToSet);

    //also set the status of check box based on mode
    // setModeCheckBox(modeToSet);
}

//enable using toogle button
function switchMode(){
    // var currentMode = localStorage.getItem('mode-portfolio-current');
    var modeToSet=currentMode==='dark'?'light':'dark';
    // console.log("mode switch using <<button>> : currentMode from storage= "+currentMode)
    // console.log("modeToSet = "+modeToSet)
    setMode(modeToSet);
}

function setCheckBoxStatusBasedOnMode(modeToSet) {
    if(checkbox){
        checkbox.checked = modeToSet === 'light' ? true : false;
    }
}
function setMode(modeToSet) {
    if (modeToSet && modeToSet === 'dark') {
        localStorage.setItem('mode-portfolio-current', 'dark');
        enableDarkMode();
        setCheckBoxStatusBasedOnMode(modeToSet);
    }
    else if (modeToSet && modeToSet === 'light') {
        localStorage.setItem('mode-portfolio-current', 'light');
        enableLightMode();
        setCheckBoxStatusBasedOnMode(modeToSet);
    } else {
        console.log(modeToSet + ' Mode not supported!!');
    }
}

function enableLightMode(){
    // console.log("light mode enabling...")
    var lightColorMap={
        "--base-theme-color":purple,//
        "--base-theme-color-backdrop":purple_backdrop,
        "--base-theme2-color":black,//
        "--base-theme3-color":puprle_fade,//
        "--base-backround-color":white,//
        "--hover-color":black,//
        "--box-hover-color":puprle_fade_hover,
        "--text-hover-color":white,//
        "--text-heading-color":black,//
        "--text-content-color":dark_grey
    }
    applyColorMap(lightColorMap);
}

function enableDarkMode(){
    // console.log("dark mode enabling...")
    var darkColorMap={
        "--base-theme-color":crimsonn,
        "--base-theme-color-backdrop":black_backdrop,
        "--base-theme2-color":white,
        "--base-theme3-color":grey_fade,
        "--base-backround-color":black,
        "--hover-color":white,
        "--box-hover-color":grey,
        "--text-hover-color":black,
        "--text-heading-color":white,
        "--text-content-color":grey
    }
    applyColorMap(darkColorMap);
}

function applyColorMap(colorMap){
    for (const key in colorMap) {
        // console.log("key = "+key+" value = "+colorMap[key]);
        setRootVariable(key,colorMap[key]);
    }
}


function setRootVariable(key,value) {
  r.style.setProperty(key, value);
}
//function for getting a variable value
// function myFunction_get() {
//   var rs = getComputedStyle(r);
//   console.log(rs);
// }