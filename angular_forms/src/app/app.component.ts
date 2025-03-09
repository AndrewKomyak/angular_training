import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MyValidators } from './my.validators';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', {
        validators: [
          Validators.email, 
          Validators.required,
          MyValidators.restrictedEmails
          ],
        asyncValidators: [
          MyValidators.uniqEmail
        ]
    }),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
      address: new FormGroup({
        country: new FormControl('by'),
        city: new FormControl('', Validators.required)
      }),
      skills: new FormArray<FormControl>([])
    });
  }

  submit() {
    console.log(this.form);
    const formData = {...this.form.value}

    console.log(formData);

    this.form.reset();
  }

  setCapital() {
    const cityMap: any = {
      ru: 'Moscow',
      ua: 'Kiev',
      by: 'Minsk'
    }
    const cityKey:string = this.form.get('address')?.get('country')?.value;
    const city = cityMap[cityKey]

    this.form.patchValue(
      {
        address: {city: city}
      }
    )
  }

  addSkill() {
    const control = new FormControl('', Validators.required);
    (<FormArray>this.form.get('skills')).push(control);
  }

  getSkills() {
    return (this.form.get('skills') as FormArray).controls
  }
}
