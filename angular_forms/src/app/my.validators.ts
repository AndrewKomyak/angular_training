import { AbstractControl, FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class MyValidators {
    static restrictedEmails(control: FormControl): {[key: string]: boolean} {
        if (['test@test.test', 'test2@test.test'].includes(control.value)) {
            return {
                'restrictedEmail': true
            }
        }
        return {};
    }

    static uniqEmail(control: AbstractControl): Promise<any> | Observable<any> {
        return new Promise (resolve => {
            setTimeout(() => {
                if (control.value === 'async@test.test') {
                    resolve({uniqEmail: true});
                }
                else {
                    resolve({});
                }
            }, 1000)
        })
    }
}