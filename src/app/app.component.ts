import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public cards: any = [
    {
      name: "mastercard",
      color: "#0061A8",
      src:
        "https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
    },
    {
      name: "visa",
      color: "#E2CB38",
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2000px-Visa_Inc._logo.svg.png"
    },
    {
      name: "dinersclub",
      color: "#888",
      src:
        "https://upload.wikimedia.org/wikipedia/commons/a/a6/Diners_Club_Logo3.svg"
    },
    {
      name: "americanExpress",
      color: "#108168",
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/American_Express_logo.svg/600px-American_Express_logo.svg.png"
    },
    {
      name: "discover",
      color: "#86B8CF",
      src:
        "https://lendedu.com/wp-content/uploads/2016/03/discover-it-for-students-credit-card.jpg"
    },
    {
      name: "dankort",
      color: "#0061A8",
      src:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/Dankort_logo.png"
    }
  ];
  public valueCard: any;

  constructor() { }

  ngOnInit() {

  }

  public returnCard(event): void{
    this.valueCard = JSON.stringify(event);
 }

 public setValues(){
   console.log(this.valueCard);
 }

}
