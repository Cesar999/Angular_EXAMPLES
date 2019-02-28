import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ex10-routing';
  auth = false;

  constructor(private router: Router) { }

  ngOnInit(){

  }

  login(){
    localStorage.setItem("auth", "true");
    this.auth = true;
  }

  logout(){
    localStorage.setItem("auth", "false");
    this.auth = false;
    if(this.router.url === '/secret'){
      this.router.navigate(['/home']);
    }
  }
}
