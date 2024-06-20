import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from './dashboadr/server-status/server-status.component';
import { TrafficComponent } from './dashboadr/traffic/traffic.component';
import { TicketsComponent } from './dashboadr/tickets/tickets.component';
import { DashboardItemComponent } from './dashboadr/dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[HeaderComponent, ServerStatusComponent, TrafficComponent, TicketsComponent,DashboardItemComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
 
}
