import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weathersettings',
  templateUrl: './weathersettings.component.html',
  styleUrls: ['./weathersettings.component.css']
})
export class WeathersettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("hello from the damn weather settings");
  }

}
