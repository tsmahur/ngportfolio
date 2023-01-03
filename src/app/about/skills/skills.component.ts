import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  // assets='./assets/' //for deployment
  assets='../../../assets/' //for local

  skills=[
    {
      name:'html',
      logo:this.assets+'images/html.png',
      proficiency:''
    },
    {
      name:'css',
      logo:this.assets+'images/css.png',
      proficiency:''
    },
    {
      name:'javascript',
      logo:this.assets+'images/javascript.png',
      proficiency:''
    },
    {
      name:'react.js',
      logo:this.assets+'images/reactjs.png',
      proficiency:''
    },
    {
      name:'angular',
      logo:this.assets+'images/angular.png',
      proficiency:''
    },
    {
      name:'php',
      logo:this.assets+'images/php.png',
      proficiency:''
    },
    {
      name:'c++',
      logo:this.assets+'images/c.png',
      proficiency:''
    },
    {
      name:'python',
      logo:this.assets+'images/python.png',
      proficiency:''
    },
    {
      name:'java',
      logo:this.assets+'images/java.png',
      proficiency:''
    },
    {
      name:'Spring Boot',
      logo:this.assets+'images/springboot.png',
      proficiency:''
    },
    {
      name:'mongo DB',
      logo:this.assets+'images/mongodb.png',
      proficiency:''
    },
    {
      name:'SQL',
      logo:this.assets+'images/sql.png',
      proficiency:''
    },
    {
      name:'matlab',
      logo:this.assets+'images/matlab.png',
      proficiency:''
    },
    {
      name:'arduino',
      logo:this.assets+'images/arduino.png',
      proficiency:''
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
