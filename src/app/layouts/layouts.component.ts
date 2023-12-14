import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./sidebar/sidebar.component";

@Component({
    selector: 'app-layouts',
    standalone: true,
    templateUrl: './layouts.component.html',
    styleUrl: './layouts.component.css',
    imports: [HeaderComponent, FooterComponent, RouterOutlet, SidebarComponent]
})
export class LayoutsComponent {

}
