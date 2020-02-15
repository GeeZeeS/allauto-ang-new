import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { RegisterUser } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  form: FormGroup

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required, 
        Validators.email]),
      password: new FormControl(null, [
        Validators.required, 
        Validators.minLength(6)]),
      password_confirm: new FormControl(null, [
        Validators.required, 
        Validators.minLength(6)])
    })
  }

  submit(){
    if(this.form.invalid){
      return
    }

    if(this.form.value.password != this.form.value.password_confirm){
      return
    }

    const user: RegisterUser = {
      email: this.form.value.email,
      password: this.form.value.password
    }

    this.auth.register(user).subscribe(() => {
      this.form.reset()
      this.router.navigate(['/signin'])
    })
  }

}
