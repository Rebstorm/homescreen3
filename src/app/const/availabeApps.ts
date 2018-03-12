import { App } from '../types/app';
import { WeatherComponent } from '../weather/weather.component';
import { Directive } from '@angular/core'

export const APPSAVAILABLE : App[] = [
    { 
      component : WeatherComponent,
      name : "Weather Settings",
      url: "/weather",
      description: "hello world",
      imgurl: "../assets/images/park.svg"
    },
];