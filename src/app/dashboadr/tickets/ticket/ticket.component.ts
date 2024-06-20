import { Component, input, signal } from '@angular/core';
import { Ticket } from '../ticket';
import { single } from 'rxjs';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
ticket = input.required<Ticket>();
detailVisible = signal(false);
onToggledetails(){
  // this.detailVisible.set(!this.detailVisible())
  this.detailVisible.update((wasVisible) => !wasVisible )
}
}
