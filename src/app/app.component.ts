import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterOutlet } from "@angular/router";
import { ComponentAboutComponent } from "./component-about/component-about.component";
import { ComponentContactComponent } from "./component-contact/component-contact.component";
import { ComponentHomeComponent } from "./component-home/component-home.component";
import { ComponentServiceComponent } from "./component-service/component-service.component";
import { ComponentNotFoundComponent } from "./component-not-found/component-not-found.component";

@Component({
  selector: 'app-root', 
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    ComponentAboutComponent,
    ComponentContactComponent,
    ComponentHomeComponent,
    ComponentServiceComponent,
    ComponentNotFoundComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ORDANZA_ME';
}