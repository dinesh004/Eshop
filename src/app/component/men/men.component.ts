import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CartService} from '../../services/cart.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {
error = null
  constructor(private api: ApiService, private cartService: CartService,private active:ActivatedRoute) { }
mensData: any;
cname:any
  ngOnInit(): void {

      this.active.paramMap.subscribe((params:ParamMap)=>{
      let curretame = params.get('cname');
      console.log(this.cname);

      this.api.getDataByCategory(curretame).subscribe((data: any)=>{
        this.mensData= data;
      },
     (error)=>{
       console.log(error);

       this.error = error.message;

     })


     })




  }




  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
}
