import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  log(message: string) {
    console.log(`Log: ${message}`);
  }
}
