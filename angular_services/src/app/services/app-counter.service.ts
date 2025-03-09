import { Injectable } from "@angular/core";
import { LogService } from "./log.service";

@Injectable({
    providedIn: 'root'
})
export class AppCounterService {

    constructor(protected logService: LogService) {

    }
    counter = 0;

    increase() {
        this.logService.log(`Increased counter: from ${this.counter}`);
        this.counter++;
    }

    decrease() {
        this.logService.log(`Decreased counter: from ${this.counter}`);
        this.counter--;
    }
}