import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  timeline_data_array_work_experience=[
    {
      duration:'2020 - Present',
      heading:'Infosys',
      para:'Working as a Java,SpringBoot Backend Developer.Have work experience in Java 8/11 with Spring Boot framework as backend, Microservices, MongoDB/SQL as database. Also have the experience on frontend technologies like HTML, CSS, JavaScript, React, Angular.',
      points:[
        'Migration project from monolithic RDBMS application to Microservices NoSQL Application. Read the different sources such as XML, Email, Excel, csv etc. files containing details from upstream and send it to Kafka in JSON format, different microservice pick the data and business logic is applied and store it in the MongoDB. RESTful API and WEB service created to handled business logic.',
        'Experience in generating Dynamic Excel, PDF in backend.',
        'Experience in generating Dynamic query, aggregations to fetch and update date in MongoDb using Java Code.',
        'Experience in LINUX deployment script (.sh) for testing server.',
        'Test Driven Development, Unit Testing of functionalities along with Code Quality check.',
        'Tools: IntelliJ, PostMan, Mongo Compass, Gitlab, ELK, Jenkins, JIRA, SonarQube.',
        'Technology: Java, SpringBoot, Microservices, Kafka, MongoDB, Git.'
      ]
    }
  ]

  timeline_data_array_my_projects=[
    {
      duration:'08/2021',
      heading:'Video Stream Web App',
      para:'',
      points:[
        'Video streaming project which uses ReactJs frontend and consumes RESTful streaming APIs. Backend is developed with SpringBoot Web Flux (Reactive Programming) which continuously stream the video.',
        'Technology: ReactJs, SpringBoot.'
      ]
    },
    {
      duration:'08/2021',
      heading:'TextUtils Web App & News App',
      para:'',
      points:[
        'Developed basic utility text operations like Capitalization, Space Remove. and consuming news App API.',
        'Technology: ReactJs.'
      ]
    },
    {
      duration:'08/2019-06/2020',
      heading:'Position Control of Hinges',
      para:'Movement of door/gate hinges is controlled using encoder and PID algorithm, controlled using Bluetooth through an app developed using MIT App Inventor 2.',
      points:[
        'Developed the Mobile App',
        'Technology: ReactJs, SpringBoot.',
        'Video streaming project which uses ReactJs frontend and consumes RESTful streaming APIs. Backend is developed with SpringBoot Web Flux (Reactive Programming) which continuously stream the video.',
        'Developed and implemented PID logic using code based on feedback from Electrical Motor Encoder.',
        'Calculated position, angle, direction, speed of the motor using interrupts signal',
        'Technology : Arduino Uno, Eagle CAD, MIT App Inventor 2, HC-05 bluetooth module'
      ]
    },
    {
      duration:'08/2018-04/2019',
      heading:'ABU-Robocon 2019',
      para:'International Robotics Contest based on a theme given by MONGOLIA, Developed a quadruped robot fully autonomous.',
      points:[
        'Technology : Arduino (Uno,Mega,Duo), Eagle CAD.'
      ]
    },
    {
      duration:'07/2018-02/2019',
      heading:'Mitsubishi Electric Cup India',
      para:'Team Leader, Industrial based project, Developed an Automatic Guided Vehicle as a part of Self-Guided Retrieval System based on the theme " Digital Industry Through Smart Imagination".',
      points:[
        'Developed an Automatic Guided Vehicle as a part of Self Guided Retrieval System based on the theme " DIGITAL INDUSTRY THROUGH SMART IMAGINATION" given by Mitsubishi Electric Automation for the MECUP 2019 .',
        'Being a team leader my role is to manage the team and I worked on the automation based products provided by Mitsubishi Electric India.',
        'Have a industry ready experience on PLC (FX5U-32 MT/ES) , HMI (GS-2107-WTBD), Servo Amplifier (MR-JE-20A), Servo interfaced and programmed using Gx works 3 , GT Designer3 , MR configurator2 respectively.',
        'Technology : Gx works 3 , GT Designer3 , MR configurator2'
      ]
    },
    {
      duration:'04/2018',
      heading:'RoboWar',
      para:'Developed a Weaponized robot for RoboWar, controlled using Bluetooth through an app developed using MIT App Inventor 2',
      points:[
        'Developed the Mobile App',
        'Designed and manufactured the Electronic circuit.',
        'Technology : Arduino Uno, Eagle CAD, MIT App Inventor 2, HC-05 bluetooth module'
      ]
    },
    {
      duration:'08/2017-03/2018',
      heading:'ABU-Robocon 2018 (AIR- 10th)',
      para:'International Robotics Contest based on a theme given by VIETNAM, developed autonomous and a manual robot, using technologies like image processing and advance line sensing.',
      points:[
        'Robocon is an international Robotics Contest , conduct by Asia Pacific Broadcasting Unit (ABU) , in which a country of the union gives a theme based on which participating team need to make robots completing the task in the given time limit of 3 minutes.',
        'As a programmer I interfaces and program different hardware like Arduino, Raspberry pi, Motor driver, PS2(Remote control for bot), LSA 08 (line following sensor), encoders.',
        'As an Electrical designer I also designed the circuits, power distribution among the bot. I designed the PCBs and fabricate them using technologies like milling and etching. ',
        'Had used CNC machine like SRM-20 (for PCB milling), Laser cutter machine.',
        'Technology : Arduino (Uno,Mega,Duo), Eagle CAD.'
      ]
    },
    {
      duration:'11/2017',
      heading:'Intelligent Electric System',
      para:'>Electrical consumption of load is monitored on a webserver and the load appliances can be controlled from the remote access. Automation and monitoring using IoT.',
      points:[
        'Hosted the webserver on Arduino Uno and controlling the electrical devices based on the web request from client.',
        'Lock Appliances Remotely : Once this is enabled Appliances can not be switched ON/OFF.',
        'Measured Electrical Energy Meter live reading for Energy consumption.',
        'Live feedback of consumed and current load.',
        'Designed the Electronic circuit and system.',
        'Technology : Arduino Uno, ESP8266, MathWorks ThingSpeak, Eagle CAD.'
      ]
    },
    {
      duration:'06/2017',
      heading:'WiFi Controlled Robotic Bot',
      para:'Locally hosted a server on a microcontroller and controlled movement of the Bot from a local website using the WiFi system.',
      points:[
        'Local Network Setup using Arduino Uno.',
        'Capable of controlling the movement of Two wheeled bot.',
        'Technology : Arduino Uno, ESP8266. '
      ]
    }
    
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
