import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book, Cart, CartItem, Offer } from '../models';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cart = new BehaviorSubject<Cart>({
    items: [],
    totalItems: 0,
    totalPrice: 0,
    discount: 0
  });

  public offer: Offer = null;

  constructor(private apiService: ApiService) {
    // Get cart from localstorage
    if (localStorage.getItem('cart')) {
      const storedCart = localStorage.getItem('cart');
      this.cart.next(JSON.parse(storedCart));
    }
  }

  addToCart(book: Book) {
    console.log('add to cart', book);
    const currentCart = this.cart.value;

    const currentProduct = currentCart.items.find(
      element => book.isbn === element.product.isbn
    );
    if (currentProduct) {
      currentProduct.quantity++;
    } else {
      currentCart.items.push({ product: book, quantity: 1 });
    }
    this.saveCart();
  }

  removeFromCart(item: CartItem) {
    console.log('removeFromCart', item);
    const currentCart = this.cart.value;
    currentCart.items.splice(
      currentCart.items.findIndex(it => it.product.isbn === item.product.isbn),
      1
    );

    this.saveCart();
  }

  saveCart() {
    const currentCart = this.cart.value;
    currentCart.totalItems = this.countItemsCart();
    if (currentCart.totalItems === 0) {
      currentCart.discount = 0;
      currentCart.totalPrice = 0;
    } else {
      currentCart.totalPrice = this.countCartTotal();
    }
    this.cart.next(currentCart);
    localStorage.setItem('cart', JSON.stringify(currentCart));
  }

  countItemsCart() {
    const currentCart = this.cart.value;
    let totalItems = 0;
    currentCart.items.forEach(element => {
      totalItems += element.quantity;
    });
    return totalItems;
  }

  countCartTotal() {
    const currentCart = this.cart.value;
    let totalPrice = 0;
    currentCart.items.forEach(element => {
      totalPrice += element.product.price * element.quantity;
    });
    this.getBestOffer();
    return totalPrice;
  }

  getBestOffer() {
    const currentCart = this.cart.value;
    let url = '';

    currentCart.items.forEach((element, index) => {
      url += element.product.isbn + ',';
    });
    if (url !== '') {
      this.apiService
        .getBestOffer(url)
        .subscribe(data =>
          this.computeBestOffer(data.offers, currentCart.totalPrice)
        );
    }
  }

  computeBestOffer(offers: Offer[], totalPrice: number) {
    console.warn('computeBestOffer');
    let percentageOffer = 0;
    let minusOffer = 0;
    let sliceOffer = 0;
    const bestOffers = [];
    const currentCart = this.cart.value;

    offers.forEach(offer => {
      switch (offer.type) {
        case 'percentage':
          percentageOffer = (offer.value / 100) * totalPrice;
          percentageOffer > 0 ? bestOffers.push(percentageOffer) : null;
          break;
        case 'minus':
          minusOffer = offer.value;
          minusOffer > 0 ? bestOffers.push(minusOffer) : null;
          break;
        case 'slice':
          sliceOffer = Math.floor(totalPrice / offer.sliceValue) * offer.value;
          sliceOffer > 0 ? bestOffers.push(sliceOffer) : null;
          break;
      }
    });
    console.log('P-M-S', percentageOffer, minusOffer, sliceOffer);
    console.log('best offers', Math.max(...bestOffers));

    currentCart.discount = Math.max(...bestOffers);
    this.cart.next(currentCart);
  }
}
