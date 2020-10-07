# CreditCard

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) *version 10.0.14.

### Installation

```bash
npm install credit-card-component jquery --save
```

### Export Jquery in angular.json
```bash
    "scripts": [
       "./node_modules/jquery/dist/jquery.min.js"
    ]
```


### Usage

Import `credit-card` module

```js
import { CreditCardModule } from 'credit-card-component';

@NgModule({
  imports: [CreditCardModule ]
})
```

Then in HTML

```html
<lib-credit-card (returnCard)="returnCard($event)" [cards]="cards"></lib-credit-card>
```

where

```js

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

  ngOnInit() {}

  public returnCard(event): void{
    this.valueCard = JSON.stringify(event);
  }

  public setValues(){
    console.log(this.valueCard);
  }

}

```
## API
### Inputs
| Input  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| cards | `Array` | yes | list with the configuration of accepted cards |


### Outputs

| Output  | Description |
| ------------- | ------------- |
| (returnCard)  | Object with card values |


### Configuration

| Input  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| name  | `string` | yes | company name |
| color  | `string` | yes | background color |
| src  | `sting` | yes | company image |

### Info

4: VISA, 51 -> 55: MasterCard, 36-38-39: DinersClub, 34-37: American Express, 65: Discover, 5019: dankort
     

## Git

* <https://github.com/penalozajohn25/Library-Card-Credit>


