import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
  email: string;
  password: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  login() : void {
    if(this.email == 'admin' && this.password == 'admin'){
     this.router.navigate(["user"]);
    }else {
      
      alert("Invalid credentials");
    }
  }
}
