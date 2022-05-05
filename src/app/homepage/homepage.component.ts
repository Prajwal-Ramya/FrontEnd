import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public cartCount: number = 0;
  constructor(
    public cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartService.getCartItems()
      .subscribe(() => {
        this.cartCount = this.cartService.cartItems.length;
      })
  }

  public isDisabled(product: any) {
    return this.cartService.cartItems.some(item => item.id === product.id) || this.cartService.cartItems.length >= 3;
  }
}
