import { Component, ElementRef, EventEmitter, output, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [FormsModule, ButtonComponent, ControlComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  // @ViewChild('form') form?:ElementRef<HTMLFormElement>;
  add = output<{title:string, text: string}>()
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  onSubmit(ticketTitle: string, ticketText: string) {
    this.add.emit({title:ticketTitle, text:ticketText})
    this.form().nativeElement.reset();
  }
}
