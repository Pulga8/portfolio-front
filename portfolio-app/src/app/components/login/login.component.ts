import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder, private userService: UsersService, private route: Router) {
    this.form = this.formBuilder.group(
      {
        username: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(4)]],
      }
    )
  }

  ngOnInit(): void {

  }

  get Username() {
    return this.form.get('username');
  }

  get Password() {
    return this.form.get('password');
  }

  onSent(event: Event) {
    event.preventDefault;
    console.log("Form Value:" + JSON.stringify(this.form.value));
    this.userService.login(this.form.value).subscribe(data => {
      console.log("DATA:" + JSON.stringify(data));
      if (data == true) {
        this.userService.setLogged(true);
        this.route.navigate(['/portfolio'])
      } else {
        this.route.navigate(['/login'])
      }
    })
  }

  logout() {
    this.userService.setLogged(false);
    this.route.navigate(['/login'])
  }
}
