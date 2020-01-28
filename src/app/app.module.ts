import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { AppComponent } from "./app.component";
import { routing } from "./app.routing";
import { BooksComponent } from "./components/books/books.component";
import { CartComponent } from "./components/cart/cart.component";
import { MinicartComponent } from "./components/minicart/minicart.component";
import { FilterPipe } from "./filter.pipe";
import { ApiService } from "./services/api.service";
import { CartService } from "./services/cart.service";
@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    CartComponent,
    MinicartComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    routing
  ],
  providers: [ApiService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule {}
