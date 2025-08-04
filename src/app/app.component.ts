import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBardComponent } from "./componets/nav-bard/nav-bard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'api-Rest';
}
