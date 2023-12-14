import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Shared

// Components
import { DashboardComponent } from './dashboard.component';
import { DnsListComponent } from "./dns-list/dns-list.component";

const DashboardRoutes: Routes = [{
  path: '',
  component: DashboardComponent
}];

@NgModule({
    declarations: [
    ],
    providers: [],
    imports: [
        CommonModule,
        RouterModule.forChild(DashboardRoutes),
        
    ]
})
export class DashboardModule {}