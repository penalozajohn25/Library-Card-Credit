import { NgModule } from '@angular/core';
import { CreditCardComponent } from './credit-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CreditCardComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule 
  ],
  exports: [CreditCardComponent]
})
export class CreditCardModule { }
