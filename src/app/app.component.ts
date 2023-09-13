import { Component } from '@angular/core';
import { User } from './user-profile/user-profile.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Nexus';
  personas: User[] = [
    { nombre: 'Pablo', apellido: 'Zamora', rol: 'administrador' },
    { nombre: 'Maria', apellido: 'Zamora', rol: 'operador' },
    { nombre: 'Pedro', apellido: 'Zamora', rol: 'operador' },
    { nombre: 'Angeles', apellido: 'Zamora', rol: 'administrador' },
    { nombre: 'Jose', apellido: 'Zamora', rol: 'administrador' }
  ];


  onUserSelect(u: User) {
    console.log('Usuario seleccionado:' + u.nombre);
  }

  cambiaNombre(): void {
    this.personas[0].nombre = 'Ramón';
  }
}
