import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills=[
    {
      name:'html',
      logo:'../../../assets/images/html.png',
      proficiency:''
    },
    {
      name:'css',
      logo:'../../../assets/images/css.png',
      proficiency:''
    },
    {
      name:'javascript',
      logo:'../../../assets/images/javascript.png',
      proficiency:''
    },
    {
      name:'react.js',
      logo:'../../../assets/images/reactjs.png',
      proficiency:''
    },
    {
      name:'angular',
      logo:'../../../assets/images/angular.png',
      proficiency:''
    },
    {
      name:'php',
      logo:'../../../assets/images/php.png',
      proficiency:''
    },
    {
      name:'c++',
      logo:'../../../assets/images/c.png',
      proficiency:''
    },
    {
      name:'python',
      logo:'../../../assets/images/python.png',
      proficiency:''
    },
    {
      name:'java',
      logo:'../../../assets/images/java.png',
      proficiency:''
    },
    {
      name:'Spring Boot',
      logo:'../../../assets/images/springboot.png',
      proficiency:''
    },
    {
      name:'mongo DB',
      logo:'../../../assets/images/mongodb.png',
      proficiency:''
    },
    {
      name:'SQL',
      logo:'../../../assets/images/sql.png',
      proficiency:''
    },
    {
      name:'matlab',
      logo:'../../../assets/images/matlab.png',
      proficiency:''
    },
    {
      name:'arduino',
      logo:'../../../assets/images/arduino.png',
      proficiency:''
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
