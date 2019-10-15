import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book, Offers } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'http://henri-potier.xebia.fr/books';
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url);
  }

  getBestOffer(refsUrls: string): Observable<Offers> {
    console.log(
      '#refsUrls : ',
      this.url + '/' + refsUrls + '/commercialOffers'
    );
    return this.http.get<Offers>(
      this.url + '/' + refsUrls + '/commercialOffers'
    );
  }
}
