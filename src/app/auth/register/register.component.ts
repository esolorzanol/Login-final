import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [AuthService],
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    }
  );

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  async onRegister(){
    const {email, password} = this.registerForm.value;
    try {
      const user = await this.authSvc.register(email, password);
      this.router.navigate(['/login']);
    }catch (error){
      console.log(error);
    }
  }

}
