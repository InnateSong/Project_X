import { KeyValue } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  // local Variables to display on the html 
  title = 'PortfolioApp';
  checkList: string[] = [
    "Set up a login page as a placeholder",
    "Set up to the login page",
    "Set up an observer to check if the user has logged in already",

    "Complete the login",
    "Complte the Home page",
  ]

  main: string = "http://localhost:4200/";
  links: string[] = [
    "login",
    "home"
  ]
  
  // More here






  

  


}
