window.onscroll = function() {
   onScrollProgresssBarUpdate();
   // onScrollStickyNavBarDisableOnHamBurgerClick();
};

function onScrollProgresssBarUpdate() {
   var windowCurrentScrollPos = document.body.scrollTop || document.documentElement.scrollTop; // in chrome 0 || someVal => someVal
   var heightToScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
   var scrolledPercent = (windowCurrentScrollPos / heightToScroll) * 100;
   document.getElementById("scrollProgressBar").style.width = scrolledPercent + "%";

   //show/hide scroll button after certain percentange
   showHideTopButtonBasedOnCurrentPositon(windowCurrentScrollPos);

   // console.log("---------------------------------------------------")
   // console.log("document.body.scrollTop.."+document.body.scrollTop)
   // console.log("document.documentElement.scrollTop.."+document.documentElement.scrollTop)
   // console.log("windowCurrentScrollPos.."+windowCurrentScrollPos)
   // console.log("document.documentElement.scrollHeight.."+document.documentElement.scrollHeight) //total scroll height of full page
   // console.log("document.documentElement.clientHeight.."+document.documentElement.clientHeight)// total height of the browser 
   // console.log("heightToScroll.."+heightToScroll) 
   // console.log("scrolledPercent.."+scrolledPercent)
}

function showHideTopButtonBasedOnCurrentPositon(windowCurrentScrollPos) {
   if (windowCurrentScrollPos < 1000) {
      document.getElementById("top-id").style.display = "none";
   }
   else if (windowCurrentScrollPos > 1000) {
      document.getElementById("top-id").style.display = "inline";
   }
}

function onScrollStickyNavBarDisableOnHamBurgerClick() {
   nav=document.querySelector('nav');
   // nav.classList.toggle('stickyNavbar',false);
   nav.classList.remove('stickyNavbar');
}



//scroll using button
// document.getElementById("top-id-btn").addEventListener("click",scrollToTop());
document.getElementById("top-id-btn").addEventListener("click",function (){
   scrollToTop();
});

function scrollToTop(){
   window.scrollTo({top: 0, behavior: 'smooth'});
}

