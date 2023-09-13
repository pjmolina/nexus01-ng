import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

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
export class UserProfileComponent implements OnInit, OnDestroy, OnChanges {
  private _nombre = '';

  @Input()
  get nombre(): string {
    return this._nombre;
  }
  set nombre(n: string) {
    if (n !== this.nombre) {
      this._nombre = n;
      this.nombreChange.emit(n);
    }
  }

  @Output() nombreChange = new EventEmitter<string>();



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
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Cambios', changes);
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
