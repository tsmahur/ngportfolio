//onhover js event for skill proficiency bar
var proficiencyMap={
    html:7,
    css:7,
    javascript:7,
    java:8,
    php:6,
    springboot:8
 }

 var proficiencyList=document.querySelectorAll('.proficiency');
//  adding progress bar code based on "proficiency" class
 proficiencyList.forEach( proficiency=>{
    addProgressBarHtml(proficiency);
 })
 //  adding progress bar eventlistner based on "proficiency" class
 proficiencyList.forEach( proficiency=>{
    proficiency.addEventListener('mouseenter', function() {
       proficiency.children[0].style="display:none";
       // proficiencyList[0].children[0].style="display:none";
       onHoverCreateProgressBar(proficiency)
    });
    proficiency.addEventListener('mouseleave', function() {
       proficiency.children[0].style="display:inline"; 
       proficiency.querySelector('.progressBar').style="display:none"//or remove this completely
    });
 });
 
 {/* 
  ---FOR REFRENCE :: html structure of progress bar ---
 <div class="box">
 <div class="progressBar">
     <div class="progressValue">3/10</div>
 </div>
 </div> 
 */}
 function addProgressBarHtml(targetDiv) {
    const progressBarDiv = document.createElement("div");
    progressBarDiv.className = "progressBar";
    progressBarDiv.style="display:none"
 
    const progressValueDiv = document.createElement("div");
    progressValueDiv.className = "progressValue";
    progressValueDiv.innerText = "0/10";

    progressBarDiv.appendChild(progressValueDiv);
    var h3=targetDiv.getElementsByTagName("h3")[0]
    targetDiv.appendChild(progressBarDiv);
    targetDiv.appendChild(h3);
 }
 
 {/* <div class="box">
 <div class="progressBar">
     <div class="progressValue">3/10</div>
 </div>
 </div> */}

 // onHoverCreateProgressBar()

//  setTimeout(setProgressBarToCurrentElement, 3000);

 function onHoverCreateProgressBar(targetDiv){
    let defaultSkill=8
    let key=targetDiv.getElementsByTagName("h3")[0].innerText
    let profVal=proficiencyMap[key.toLowerCase()]?proficiencyMap[key.toLowerCase()]:defaultSkill

    if(!targetDiv.querySelector('.progressBar')){
       addProgressBarHtml(targetDiv);
       setProgressBarToCurrentElement(targetDiv,profVal)
    }else{
       //element is already present reload the animation
       targetDiv.querySelector('.progressBar').style="display:block"
       setProgressBarToCurrentElement(targetDiv,profVal)
    }
 }
 //<<<<<<<<<<<<<<<<<<<need to make this async>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 
 function setProgressBarToCurrentElement(elementForProgressBar,num){
    let initialForCurrent=0
    let motionFatcor=0.09
     let motionInterValTime=10 //ms
    var progressInterval=setInterval(()=>{
       initialForCurrent = initialForCurrent + motionFatcor//this will always start from zero, if were want to satart with 0 and continue from current then us the last set value, BTW this is not the case for me here :-)
       let progressValue = Math.floor(initialForCurrent)
       elementForProgressBar.querySelector('.progressValue').textContent = `${progressValue}/10`
      //  --- jugaad start:-) <<needs to be fixed>>
      var imgTag=elementForProgressBar.getElementsByTagName('img')[0]
      var isImgVisible=imgTag && imgTag.style && imgTag.style.display=='none' ? false:true
      if(isImgVisible){
            elementForProgressBar.querySelector('.progressBar').style="display:none"
            clearInterval(progressInterval);
      }
      //  --- jugaad end:-) <<needs to be fixed>>
       else if(initialForCurrent >= num || initialForCurrent<0){
          clearInterval(progressInterval);
       }else{
          var angle=((initialForCurrent)/10)*360
          elementForProgressBar.querySelector('.progressBar').style=`background:conic-gradient(var(--base-theme-color) ${angle}deg,var(--base-backround-color) 0deg);`
       }
    },motionInterValTime);
 }
 
//  const tempDiv = document.getElementById('tempBoxForTesting');
//  setProgressBarToCurrentElement(tempDiv,7)
 
 // var progressBar=document.querySelector('.progressBar');
 // var progressValue=document.querySelector('.progressValue');
 // var initial=0;
 // setProgressBar(proficiencyMap.html)
 // function setProgressBar(num){
 //    var progressInterval=setInterval(()=>{
 //       initial++;//this will always start from zero, if were want to satart with 0 and continue from current then us the last set value, BTW this is not the case for me here :-)
 //       progressValue.textContent = `${initial}/10`
 //       var angle=(initial/10)*360
 //       progressBar.style=`background:conic-gradient(var(--base-theme-color) ${angle}deg,var(--base-backround-color) 0deg);`
 //       if(initial == num){ //validate for other than  0 to 10
 //          clearInterval(progressInterval);
 //       }
 //    },100);
 // }