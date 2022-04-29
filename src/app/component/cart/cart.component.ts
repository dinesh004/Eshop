import { Component, OnInit } from '@angular/core';
import { CartService} from '../../services/cart.service';


interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  selectedValue: string="1";
  public products : any = [];
  public grandTotal !: number;
  // foods: Food[] = [
  //   {value: '1', viewValue: '1'},
  //   {value: '2', viewValue: '2'},
  //   {value: '3', viewValue: '3'},
  //   {value: '4', viewValue: '4'},
  //   {value: '5', viewValue: '5'},
  // ];

  displayQty = ["1","2","3","4","5"]

  public qtyArray:Array<String> = []
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;

      for (const prod in this.products) {
       this.qtyArray.push("1")
      }

      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }

  qtyChage(value:any,ide:any){
      console.log(ide,value);

     for (let index = 0; index < this.qtyArray.length; index++) {
       if(index === parseInt(ide)){
         this.qtyArray[index] = value
       }

     }

     console.log(this.qtyArray);

  }


}
