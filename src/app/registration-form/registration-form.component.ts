import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Registration } from '../registration';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegistrationFormComponent {
  // postRegistrationData = {
  //   firstName: 'FHGFHGFGH',
  //   lastName: 'Liljjkng',
  //   email: 'String@gmail.com',
  //   phoneNum: '1234567890',
  //   username: 'guy1234',
  //   city: 'Brooklyn',
  //   state: 'NY',
  //   zipCode: '10923',
  // }
 
  regForm = this.formBuilder.group({
    firstName: '',
    lastName: '',
    birthday: '',
    email: ['', Validators.email],
    phoneNum: '',
    username: '',
    city: '',
    state: '',
    zipCode:'',
  });

  // newReg = new Registration('helo', '', '','', '', '','', '');

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
  ) {}
  url = 'http://localhost:3000/api/post';
  onSubmit(): void {
    console.log('sdfdfg');
    console.log('Registration form has been submitted', this.regForm.value);
    const req = this.http.post(this.url, this.regForm.value, {responseType: 'text'})
    req.subscribe();
    this.regForm.reset();
  }

  // Angular calls ngOnInit() shortly after creating a component. It's a good place to put initialization logic.
  ngOnInit(): void {
  }
  

}
