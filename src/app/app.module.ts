import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SplashscreenComponent } from './splashscreen/splashscreen.component';
import { WeatherComponent } from './weather/weather.component';


const appRoutes: Routes = [
  { path: '**', component: AppComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SplashscreenComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // Logs all internal evens - should just be for testing. 
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
