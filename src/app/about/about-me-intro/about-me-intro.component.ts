import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me-intro',
  templateUrl: './about-me-intro.component.html',
  styleUrls: ['./about-me-intro.component.css']
})
export class AboutMeIntroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.expCalculator()
  }

  exp=document.getElementById("exp-year");//null
  countMonth=0;

  expCalculator(){
    const currentDate=new Date();
    const initialDate=new Date(2020, 9, 1);//0 -jan , 11- dec
    while (currentDate>=initialDate) {
        this.countMonth++
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
    }
    
    // exp.innerHTML= diffYearsFormatted+"+";
    // window.load = function() {
    //     monthCounter(); //executed once the script 
    //  };
    
    // this.monthCounter(); //executing method to populate experience
    this.exp=document.getElementById("exp-year");
    if(this.exp){
      this.exp.innerHTML= Math.floor(this.countMonth/12)+'<span class="subscript">y</span>'+(this.countMonth%12)+'<span class="subscript">m</span> +';
    }
  }

  monthCounter(){
    let monthCoutner=0
    let month=this.countMonth%12
    var monthCoutnerInterval=setInterval(()=>{
        if(month==monthCoutner){
            clearInterval(monthCoutnerInterval);
        }else{
            monthCoutner++;
            if(this.exp){
              this.exp.innerHTML= Math.floor(this.countMonth/12)+'<span class="subscript">y</span>'
              +(monthCoutner)+'<span class="subscript">m</span> +';
            }
            //monthCoutner<9?`0${monthCoutner}`:monthCoutner
        }
    },90);
}

}
