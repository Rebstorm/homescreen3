import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';



import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SplashscreenComponent } from './splashscreen/splashscreen.component';
import { WeatherComponent } from './weather/weather.component';
import { WeathersettingsComponent } from './weathersettings/weathersettings.component';


const appRoutes: Routes = [
  { path: 'weather', component: WeathersettingsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SplashscreenComponent,
    WeatherComponent,
    WeathersettingsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // Logs all internal evens - should just be for testing. 
    ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
