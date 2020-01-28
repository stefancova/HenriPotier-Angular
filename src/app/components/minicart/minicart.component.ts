import { Component, OnInit } from "@angular/core";
import { CartService } from "../../services/cart.service";
@Component({
  selector: "app-minicart",
  templateUrl: "./minicart.component.html",
  styleUrls: ["./minicart.component.css"]
})
export class MinicartComponent implements OnInit {
  public totalItems = 0;
  public total = 0;
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cart.subscribe(data => {
      this.totalItems = data.totalItems;
      this.total = data.totalPrice - data.discount;
    });
  }
}
