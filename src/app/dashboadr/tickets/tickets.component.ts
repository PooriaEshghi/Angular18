import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from './ticket';
import { CommonModule } from '@angular/common';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
    selector: 'app-tickets',
    standalone: true,
    templateUrl: './tickets.component.html',
    styleUrl: './tickets.component.css',
    imports: [NewTicketComponent, CommonModule, TicketComponent]
})
export class TicketsComponent {
tickets: Ticket[] = [];
onAdd(ticketData:{title: string, text: string}){
    const ticket: Ticket = {
        title: ticketData.title,
        request: ticketData.text,
        id: Math.random().toString(),
        status:'open'
    }
    this.tickets.unshift(ticket);
    console.log(this.tickets);
    
}
}
