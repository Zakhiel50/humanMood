import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'humanMood';
    user: string = "Bernard";

    chatGPTResponse: any; // Stocke la réponse JSON ici

    name: string = 'john';
    surname: string = 'doe';

    display: boolean = false;

    humor: string = ""

    happyIcon: boolean = true;
    sadIcon: boolean = true;
    angryIcon: boolean = true;
    laughterIcon: boolean = true;
    funnyIcon: boolean = true;
    jadedIcon: boolean = true;
    sickIcon: boolean = true;
    lovelyIcon: boolean = true;
    verySadIcon: boolean = true

    paraPhilo = ''


   

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
      this.humor= 'heureux'
      this.paraPhilo = 'Voir la vie du bon côté, so good :)'
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
      this.humor = 'triste'
      this.paraPhilo = 'Il y a mille fois pire que ça. La guerre au Mali.'
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
      this.humor = 'en colère'
      this.paraPhilo = 'Oh il est en colère le pauvre petit?'
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
      this.humor = 'mort de rire'
      this.paraPhilo = "C'est l'histoire d'un mec qui rentre dans un bar."
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
      this.humor = 'excité'
      this.paraPhilo = "C'est la fête."
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
      this.humor = 'blasé'
      this.paraPhilo = 'Il y à des jours comme ça.'
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
      this.humor = 'malade'
      this.paraPhilo = 'Les toilettes ne sont pas loin, courage.'

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
      this.humor = 'amoureux'
      this.paraPhilo = "Comment il / elle s'appelle?"

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
      this.humor = 'trés triste'
      this.paraPhilo = 'Au besoin, il y a une corde sous le lit.'
    }
}
