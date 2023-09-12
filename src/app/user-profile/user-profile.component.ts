import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface User {
  nombre: string;
  apellido: string;
  rol: string;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  @Input() nombre = '';
  @Input() apellido = '';
  @Input() rol = '';

  @Output() usuarioSelecionado = new EventEmitter<User>();



  botonPulsado(): void {
    console.log('Seleccionado: '+ this.nombre );

    this.usuarioSelecionado.emit({
      nombre: this.nombre,
      apellido: this.apellido,
      rol: this.rol
    });

  }
}
