import { Component } from '@angular/core';
import { DnsListComponent } from './dns-list/dns-list.component';

@Component({
  selector: 'app-dashboard',
  standalone:true,
  imports:[DnsListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
