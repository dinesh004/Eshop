import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("password")
    this.router.navigate(['/']);
  }
}
