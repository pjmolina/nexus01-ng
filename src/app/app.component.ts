import { Component } from '@angular/core';
import { LoggerService } from './services/logger.service';
import { User } from './user-profile/user-profile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Nexus';
  searchText = '';
  personas: User[] = [
    { nombre: 'Pablo', apellido: 'Zamora', rol: 'administrador' },
    { nombre: 'Maria', apellido: 'Zamora', rol: 'operador' },
    { nombre: 'Pedro', apellido: 'Zamora', rol: 'operador' },
    { nombre: 'Angeles', apellido: 'Zamora', rol: 'administrador' },
    { nombre: 'Jose', apellido: 'Zamora', rol: 'administrador' }
  ];

  constructor(private logger: LoggerService) {}


  onUserSelect(u: User) {
    this.logger.log('Usuario seleccionado:' + u.nombre);
  }

  cambiaNombre(): void {
    this.personas[0].nombre = 'Ramón';
  }
}
