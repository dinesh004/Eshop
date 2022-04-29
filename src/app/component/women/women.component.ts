import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CartService} from '../../services/cart.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {

  error = null
  constructor(private api: ApiService, private cartService: CartService) { }
womensData: any;
  ngOnInit(): void {
    //this.api.womensData().subscribe((data: any) => {
      //console.log(data);
     // this.womensData= data;
   // },
    //(error)=>{
     // console.log(error);

     // this.error = error.message;

   // })
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
}
}
