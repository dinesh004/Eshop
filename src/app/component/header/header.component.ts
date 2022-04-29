import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private api: ApiService, private router: Router) { }

public catArray= [];
  ngOnInit(): void {
    this.api.getAllCategory().subscribe((data: any) => {
      console.log(data);
      this.catArray= data;
    })
  }

  onselect(cat: any){
    this.router.navigate(['/men',cat]);

  }



}
