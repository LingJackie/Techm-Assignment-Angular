import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators, FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Registration } from '../registration';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegistrationFormComponent {
 
  regForm = this.formBuilder.group({
    firstName: new FormControl('', [
      Validators.required,
     
    ]),
    lastName: new FormControl('', [
      Validators.required,
     
    ]),
    birthday: new FormControl('', [
      Validators.required,
    
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    phoneNum: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    username: new FormControl('', [
      Validators.required,
    ]),
    city: new FormControl('', [
      Validators.required,
    ]),
    state: new FormControl('', [
      Validators.required,
    ]),
    zipCode: new FormControl('', [
      Validators.minLength(5),
    ]),
  });
  url = 'http://localhost:3000/api/post';
  // newReg = new Registration('helo', '', '','', '', '','', '');

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
  ) {}


  isFormValid(): boolean{
    for (const field in this.regForm.controls) { 
      const control = this.regForm.get(field)?.valid;
      if(control==null){
        return false;
      }else if(!control){
        return control;
      }
    }
    return false;
  }

  onSubmit(): void {
    if(this.regForm.valid){
      console.log('Registration form has been submitted', this.regForm.value);
      const req = this.http.post(this.url, this.regForm.value, {responseType: 'text'})
      req.subscribe();
      this.regForm.reset();
    }else{
      console.log('Form Invalid');
    }
    
  }

  // Angular calls ngOnInit() shortly after creating a component. It's a good place to put initialization logic.
  ngOnInit(): void {
  }
  

}
