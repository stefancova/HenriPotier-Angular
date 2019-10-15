export interface Book {
  isbn: string;
  title: string;
  price: number;
  cover: string;
  synopsis: [];
}

export interface Offers {
  offers: Offer[];
}

export interface Offer {
  type: string;
  sliceValue: number;
  value: number;
}

export interface Cart {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  discount: number;
}

export interface CartItem {
  product: Book;
  quantity: number;
}
