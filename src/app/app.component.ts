import { Component } from '@angular/core';
import { User } from './user-profile/user-profile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Nexus';

  onUserSelect(u: User) {
    console.log('Usuario seleccionado:' + u.nombre);
  }
}
