import { Component, Input } from '@angular/core';

import { Customer } from '../../../../models/customer.model';
@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-cards.component.html',
  styleUrls: ['./customer-cards.component.css']
})
export class CustomerCardsComponent {
  @Input() customers: Customer[] = [];
}
