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
  notformsend: Boolean = false;

  constructor(
    private formBuilder: FormBuilder, private userService: UsersService, private route: Router) {
    this.form = this.formBuilder.group(
      {
        username: ['', [Validators.required, Validators.minLength(0), Validators.pattern("\(?!\\s).+")]],
        password: ['', [Validators.required, Validators.minLength(4), Validators.pattern("\(?!\\s).+")]],
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
    this.userService.login(this.form.value).subscribe(data => {
      if (data == true && this.form.valid) {
        this.userService.setLogged(true);
        this.route.navigate(['/portfolio'])
      } else {
        this.route.navigate(['/login'])
        this.form.markAllAsTouched();
        this.notformsend = true;
      }
    })
  }
  goToHome() {
    this.route.navigate(['/portfolio'])
  }

  logout() {
    this.userService.setLogged(false);
    this.route.navigate(['/login'])
  }
}
