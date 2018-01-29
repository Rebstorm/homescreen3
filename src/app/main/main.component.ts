import { Component, OnInit, AfterContentInit } from '@angular/core';
import { APPSAVAILABLE } from '../const/availabeApps'
import { App } from '../types/app';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent implements OnInit {
  
  apps  = APPSAVAILABLE;

  constructor() { }

  ngAfterContentInit(){
    console.log("dom loaded");
  }

  ngOnInit() {
  }

  setApp(app : App){
    console.log(app);
  }
}
