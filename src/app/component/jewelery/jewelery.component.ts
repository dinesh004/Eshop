import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService} from '../../services/cart.service';

@Component({
  selector: 'app-jewelery',
  templateUrl: './jewelery.component.html',
  styleUrls: ['./jewelery.component.css']
})
export class JeweleryComponent implements OnInit {

  error = null
  constructor(private api: ApiService, private cartService: CartService) { }
jeweleryData: any;
  ngOnInit(): void {
    //this.api.jeweleryData().subscribe((data: any) => {
     // console.log(data);
      //this.jeweleryData= data;
    //},
    //(error)=>{
     // console.log(error);
      
     // this.error = error.message;
      
    //})
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
}
}