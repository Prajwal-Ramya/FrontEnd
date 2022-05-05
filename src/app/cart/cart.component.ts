import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
    public cartService: CartService,
    private http:HttpClient,
    private authService:AuthServiceService
  ) { }

  ngOnInit(): void {
  }
  
CartData(data:any){
  this.authService.register(this.cartService.cartItems).subscribe(result=>{
    console.log(result)
  })
   

}  

}
