import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

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
export class UserProfileComponent implements OnInit, OnDestroy {
  @Input() nombre = '';
  @Input() apellido = '';
  @Input() rol = '';

  constructor() {
    console.log('Construyendo' + this.nombre);
  }

  ngOnInit(): void {
    console.log('Inicianlizando ' + this.nombre);
  }
  ngOnDestroy(): void {
    console.log('Destruccion ' + this.nombre);
  }


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
