var exp=document.getElementById("exp-year");
const currentDate=new Date();
// const currentDate=new Date(2020,10,1);
const initialDate=new Date(2020, 9, 1);//0 -jan , 11- dec
// const diffYear = Math.abs(currentDate.getFullYear()-initialDate.getFullYear());
// const diffMonths = currentDate.getMonth()-initialDate.getMonth();
// const diffDays = currentDate.getDate()-initialDate.getDate();
// const diffDaysCorrection = diffDays>0?0.1:0;
// const diffYears=diffYear+(diffMonths/12)+(diffDays/30);
// const diffYears=diffYear+(diffMonths/12)+diffDaysCorrection;
// const diffYearsFormatted =Math.round(diffYears * 10) / 10; 

var countMonth=0
// console.log("-----------")
while (currentDate>=initialDate) {
    countMonth++
    var month=initialDate.getMonth()
    month++;
    if(month>11){
        var yearToSet=initialDate.getFullYear()
        yearToSet++;
        initialDate.setFullYear(yearToSet)
        initialDate.setMonth(month-11-1)// month starts from 0
    }else{
        initialDate.setMonth(month)
    }   
    // console.log("--initialDate updated :: "+initialDate)
}
// console.log("-----------")
// console.log("countMonth : "+countMonth)
// console.log("countMonth/12 : "+countMonth/12)
// console.log("Math.floor()countMonth/12 : "+Math.floor(countMonth/12))
// console.log("countMonth%12 : "+countMonth%12)

// exp.innerHTML= diffYearsFormatted+"+";
// window.load = function() {
//     monthCounter(); //executed once the script 
//  };

monthCounter(); //executing method to populate experience

function monthCounter(){
    let monthCoutner=0
    let month=countMonth%12
    var monthCoutnerInterval=setInterval(()=>{
        
        if(month==monthCoutner){
            clearInterval(monthCoutnerInterval);
        }else{
            monthCoutner++;
            exp.innerHTML= Math.floor(countMonth/12)+'<span class="subscript">y</span>'
            +(monthCoutner)+'<span class="subscript">m</span> +';
            //monthCoutner<9?`0${monthCoutner}`:monthCoutner
        }
    },90);
}
// exp.innerHTML= Math.floor(countMonth/12)+'<span class="subscript">y</span>'+(countMonth%12)+'<span class="subscript">m</span> +';