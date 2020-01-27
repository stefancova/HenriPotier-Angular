import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../services/api.service";
import { CartService } from "../../services/cart.service";
@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"]
})
export class BooksComponent implements OnInit {
  public loading = true;
  public books = [];
  public searchText: string;
  constructor(
    private apiService: ApiService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.apiService.getBooks().subscribe(data => {
      this.books = data;
      this.loading = false;
    });
  }

  addToCart(book) {
    this.cartService.addToCart(book);
  }
}
