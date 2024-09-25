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
    imageMusique1 = ''
    titreMusique1 = ''
    imageMusique2 = ''
    titreMusique2 = ''
    GIF = ''
    titreConseil1 = ''
    titreConseil2 = ''
    conseil1 = ''
    conseil2 = ''

   

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

      this.imageMusique1 = '../assets/musique-sad-1.png'
      this.titreMusique1 = 'BYOB - System of a Down'
      this.imageMusique2 = '../assets/musique-sad-2.png'
      this.titreMusique2 = 'KLEM - Message'
      this.GIF = "https://www.gifimili.com/gif/2018/03/stitch-triste.gif"
      this.titreConseil1 = '1. Adopte des habitudes positive'
      this.titreConseil2 = '2. Fais de l\'exercice régulièrement'
      this.conseil1 = "Pratique la gratitude : Chaque jour, note trois choses pour lesquelles tu es reconnaissant(e). Cela aide à recentrer ton esprit sur le positif. Méditation ou pleine conscience : Ces pratiques permettent de calmer ton esprit, de réduire le stress et d'améliorer ta concentration."
      this.conseil2 = "Activité physique : Le sport libère des endorphines, des hormones qui procurent une sensation de bien-être. Même une petite marche quotidienne peut améliorer ton humeur."
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
      this.imageMusique1 = '../assets/musique-sad-1.png'
      this.titreMusique1 = 'BYOB - System of a Down'
      this.imageMusique2 = '../assets/musique-sad-2.png'
      this.titreMusique2 = 'KLEM - Message'
      this.GIF = "https://www.gifimili.com/gif/2018/03/stitch-triste.gif"
      this.titreConseil1 = '1. Adopte des habitudes positive'
      this.titreConseil2 = '2. Fais de l\'exercice régulièrement'
      this.conseil1 = "Pratique la gratitude : Chaque jour, note trois choses pour lesquelles tu es reconnaissant(e). Cela aide à recentrer ton esprit sur le positif. Méditation ou pleine conscience : Ces pratiques permettent de calmer ton esprit, de réduire le stress et d'améliorer ta concentration."
      this.conseil2 = "Activité physique : Le sport libère des endorphines, des hormones qui procurent une sensation de bien-être. Même une petite marche quotidienne peut améliorer ton humeur."
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
