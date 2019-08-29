import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  
  firstname:string;
  lastname:string;
  email: string;
  password: string;
  phonenumber: number;
  ssn:number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  regDetailsForm = new FormGroup ({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    phonenumber: new FormControl(''),
    password: new FormControl(''),
    ssn: new FormControl('')
  })
    
  reg(){
    this.router.navigate(["login2"]);
  }
}
  
