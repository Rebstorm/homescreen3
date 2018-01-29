import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.component.html',
  styleUrls: ['./splashscreen.component.css']
})
export class SplashscreenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let splashScreen;
    let imgSplashScreen;

    removeSplashScreen();

    function removeSplashScreen(){

      splashScreen = document.getElementById("app-splash-screen");
      imgSplashScreen = document.getElementById("img-splash-screen");

      if(splashScreen != null){
        imgSplashScreen.className += " fade-in-out";
      }

      window.setTimeout(e => {
        splashScreen.style.display = "none";
      }, 2000);
    }
    
  }


  

}
