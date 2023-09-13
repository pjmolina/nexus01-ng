import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class LoggerService {

  log(msg: string) {
    console.log(msg);
  }
  warn(msg: string) {
    console.warn(msg);
  }
  error(msg: string) {
    console.log(msg);
  }
}

@Injectable()
export class NullLoggerService {

  log(msg: string) {
    // nada
  }
  warn(msg: string) {
    // nada
  }
  error(msg: string) {
    // nada
  }
}


@Injectable()
export class Logger2Service {

  log(msg: string) {
    const t0 = new Date(Date.now()).toISOString();
    console.log(t0 + ' ' + msg);
  }
  warn(msg: string) {
    const t0 = new Date(Date.now()).toISOString();
    console.warn(t0 + ' ' +msg);
  }
  error(msg: string) {
    const t0 = new Date(Date.now()).toISOString();
    console.log(t0 + ' ' +msg);
  }
}
