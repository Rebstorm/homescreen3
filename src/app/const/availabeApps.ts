import { App } from '../types/app';
import { WeatherComponent } from '../weather/weather.component';
import { Directive } from '@angular/core'

export const APPSAVAILABLE : App[] = [
    { component : WeatherComponent,
      name : "weather",
      url: "../assets/images/park.svg",
      description: "hello world"
    },
    { component : WeatherComponent,
      name : "hue Lights" 
    },
    { component : WeatherComponent,
      name : "weather" 
    },
    { component : WeatherComponent,
      name : "weather" 
    }
];