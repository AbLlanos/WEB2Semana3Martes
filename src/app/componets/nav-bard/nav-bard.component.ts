import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AutenticacionService } from '../../servicies/autenticacion.service';

@Component({
  selector: 'app-nav-bard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bard.component.html',
  styleUrl: './nav-bard.component.css'
})
export class NavBardComponent {


  constructor(public authServicio: AutenticacionService, private router: Router) {}

  logOut(): void {
    this.authServicio.logOut();
    this.router.navigate(['/login']);
  }

}
