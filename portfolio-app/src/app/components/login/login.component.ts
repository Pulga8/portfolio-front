import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  form:FormGroup;

  constructor(
    private formBuilder:FormBuilder, private authenticationService:AuthenticationService, private route:Router) { 
      this.form = this.formBuilder.group(
        {
          email:['',[Validators.required,Validators.email]],
          password:['',[Validators.required,Validators.minLength(8)]],
          deviceInfo:this.formBuilder.group({
              deviceId:["17867868768"],
              deviceType:["DEVICE_TYPE_ANDROID"],
              notificationToken:["67655eececc34"]
            }
          )
        }
      )
  }

  ngOnInit(): void {
  }

  get Email(){
    return this.form.get('email');
  }

  get Password(){
    return this.form.get('password');
  }

  onSent(event:Event){
    event.preventDefault;
    this.authenticationService.Login(this.form.value).subscribe(data=>{
      console.log("DATA:" + JSON.stringify(data));
      this.route.navigate(['/portfolio'])
    })
  }
}
