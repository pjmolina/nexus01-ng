import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { LoggerService } from '../services/logger.service';

export interface User {
  nombre: string;
  apellido: string;
  rol: string;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  providers: [
  ]
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

  constructor(private logger: LoggerService ) {
    this.logger.log('Construyendo' + this.nombre);
  }

  ngOnInit(): void {
    this.logger.log('Inicianlizando ' + this.nombre);
  }
  ngOnDestroy(): void {
    this.logger.log('Destruccion ' + this.nombre);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.logger.log('Cambios' + JSON.stringify(changes));
  }


  @Output() usuarioSelecionado = new EventEmitter<User>();



  botonPulsado(): void {
    this.logger.log('Seleccionado: '+ this.nombre );

    this.usuarioSelecionado.emit({
      nombre: this.nombre,
      apellido: this.apellido,
      rol: this.rol
    });

  }
}
