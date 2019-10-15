import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../models';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public items: CartItem[];
  public totalPrice = 0;
  public discount = 0;
  constructor(private cartService: CartService) {
    this.cartService.cart.subscribe(data => {
      console.log('cartservice Behavior Subject data', data);
      this.items = data.items;
      this.totalPrice = data.totalPrice;
      this.discount = data.discount;
    });
  }

  ngOnInit() {}

  removeFromCart(item: CartItem) {
    this.cartService.removeFromCart(item);
  }
}
