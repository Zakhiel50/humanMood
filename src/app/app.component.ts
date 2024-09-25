import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'humanMood';
    user: string = "Bernard";

    display: boolean = false;
    bgc: string = "red"

    happyIcon: boolean = true;
    sadIcon: boolean = true;
    angryIcon: boolean = true;
    laughterIcon: boolean = true;
    funnyIcon: boolean = true;
    jadedIcon: boolean = true;
    sickIcon: boolean = true;
    lovelyIcon: boolean = true;
    verySadIcon: boolean = true


    happy() {
      this.display = true
      this.happyIcon = true;
      this.sadIcon = false;
      this.angryIcon = false;
      this.laughterIcon = false;
      this.funnyIcon = false;
      this.jadedIcon = false;
      this.sickIcon = false;
      this.lovelyIcon = false;
      this.verySadIcon = false;
    }

    sad() {
      this.display = true
      this.happyIcon = false;
      this.sadIcon = true;
      this.angryIcon = false;
      this.laughterIcon = false;
      this.funnyIcon = false;
      this.jadedIcon = false;
      this.sickIcon = false;
      this.lovelyIcon = false;
      this.verySadIcon = false;
    }

    angry() {
      this.display = true
      this.happyIcon = false;
      this.sadIcon = false;
      this.angryIcon = true;
      this.laughterIcon = false;
      this.funnyIcon = false;
      this.jadedIcon = false;
      this.sickIcon = false;
      this.lovelyIcon = false;
      this.verySadIcon = false;
    }

    laugther() {
      this.display = true
      this.happyIcon = false;
      this.sadIcon = false;
      this.angryIcon = false;
      this.laughterIcon = true;
      this.funnyIcon = false;
      this.jadedIcon = false;
      this.sickIcon = false;
      this.lovelyIcon = false;
      this.verySadIcon = false;    
    }

    funny() {
      this.display = true
      this.happyIcon = false;
      this.sadIcon = false;
      this.angryIcon = false;
      this.laughterIcon = false;
      this.funnyIcon = true;
      this.jadedIcon = false;
      this.sickIcon = false;
      this.lovelyIcon = false;
      this.verySadIcon = false;
    }

    jaded() {
      this.display = true
      this.happyIcon = false;
      this.sadIcon = false;
      this.angryIcon = false;
      this.laughterIcon = false;
      this.funnyIcon = false;
      this.jadedIcon = true;
      this.sickIcon = false;
      this.lovelyIcon = false;
      this.verySadIcon = false;
    }

    sick() {
      this.display = true
      this.happyIcon = false;
      this.sadIcon = false;
      this.angryIcon = false;
      this.laughterIcon = false;
      this.funnyIcon = false;
      this.jadedIcon = false;
      this.sickIcon = true;
      this.lovelyIcon = false;
      this.verySadIcon = false;
    }

    lovely() {
      this.display = true
      this.happyIcon = false;
      this.sadIcon = false;
      this.angryIcon = false;
      this.laughterIcon = false;
      this.funnyIcon = false;
      this.jadedIcon = false;
      this.sickIcon = false;
      this.lovelyIcon = true;
      this.verySadIcon = false;
    }

    verySad() {
      this.display = true
      this.happyIcon = false;
      this.sadIcon = false;
      this.angryIcon = false;
      this.laughterIcon = false;
      this.funnyIcon = false;
      this.jadedIcon = false;
      this.sickIcon = false;
      this.lovelyIcon = false;
      this.verySadIcon = true;
    }


    constructor(
      private httpClient: HttpClient,
    ) { }
  
  }
