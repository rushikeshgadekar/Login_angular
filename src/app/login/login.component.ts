import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
  username: string;
  password: string;
  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  LoginUser() {
    console.log("inside login");
    
    if (this.username === "temp" && this.password === "temp") {
      console.log("successfully logged in as: ", this.username);
      this.route.navigate(["welcome"])
      
    } else {
      console.log("failed");
      
    }
  }
}
