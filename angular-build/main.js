(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    font-size: 2em;\r\n    margin-bottom: 1em;\r\n    max-width: 70%;\r\n    display: inline-block;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgbWF4LXdpZHRoOiA3MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"main\">\n  <app-minicart></app-minicart>\n  <h1>\n    <a routerLink=\"/\">Bibliothèque de {{ title }}</a>\n  </h1>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Henri Potier';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _components_books_books_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/books/books.component */ "./src/app/components/books/books.component.ts");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/cart/cart.component */ "./src/app/components/cart/cart.component.ts");
/* harmony import */ var _components_minicart_minicart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/minicart/minicart.component */ "./src/app/components/minicart/minicart.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/cart.service */ "./src/app/services/cart.service.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_books_books_component__WEBPACK_IMPORTED_MODULE_8__["BooksComponent"],
                _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_9__["CartComponent"],
                _components_minicart_minicart_component__WEBPACK_IMPORTED_MODULE_10__["MinicartComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__["Ng2SearchPipeModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_7__["routing"]
            ],
            providers: [_services_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"], _services_cart_service__WEBPACK_IMPORTED_MODULE_12__["CartService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_books_books_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/books/books.component */ "./src/app/components/books/books.component.ts");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/cart/cart.component */ "./src/app/components/cart/cart.component.ts");



var routes = [
    { path: '', component: _components_books_books_component__WEBPACK_IMPORTED_MODULE_1__["BooksComponent"] },
    { path: 'cart', component: _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"] },
    { path: '**', redirectTo: '' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/components/books/books.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/books/books.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".searchform{\r\n    margin-bottom: 1em;\r\n}\r\n\r\nh2{\r\n    font-size :1.2rem;\r\n    margin-bottom: 1em;\r\n    text-align: center;\r\n    min-height: 40px;\r\n}\r\n\r\n.item {\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\n.item img {\r\n    width: 100%;\r\n}\r\n\r\n.price {\r\n    font-weight: bold;\r\n    font-size: 2em;\r\n}\r\n\r\n.synopsis {\r\n    border: 1px solid;\r\n    position: absolute;\r\n    top:0;\r\n    left:0;\r\n    background: darkgray;\r\n    color: white;\r\n    transform-origin: left top;\r\n    transform: scale(0);\r\n    transition: all 250ms ease; \r\n    font-size: 0.7rem;\r\n}\r\n\r\n.item:hover .synopsis {\r\n    transform: scale(1);\r\n}\r\n\r\n.buybox {\r\n    text-align: center;\r\n}\r\n\r\n@media(min-width: 769px) {\r\n    .buybox {\r\n        text-align: left;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib29rcy9ib29rcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLFdBQVc7QUFDZjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixLQUFLO0lBQ0wsTUFBTTtJQUNOLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUdBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYm9va3MvYm9va3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2hmb3Jte1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG59XHJcblxyXG5oMntcclxuICAgIGZvbnQtc2l6ZSA6MS4ycmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWluLWhlaWdodDogNDBweDtcclxufVxyXG4uaXRlbSB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5pdGVtIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4ucHJpY2Uge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxufVxyXG5cclxuLnN5bm9wc2lzIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjA7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICBiYWNrZ3JvdW5kOiBkYXJrZ3JheTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlOyBcclxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG59XHJcbi5pdGVtOmhvdmVyIC5zeW5vcHNpcyB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG59IFxyXG4uYnV5Ym94IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbkBtZWRpYShtaW4td2lkdGg6IDc2OXB4KSB7XHJcbiAgICAuYnV5Ym94IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/books/books.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/books/books.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"searchform\">\n  <input\n    type=\"text\"\n    name=\"search\"\n    class=\"input\"\n    placeholder=\"Votre recherche...\"\n    [(ngModel)]=\"searchText\"\n    autocomplete=\"off\"\n  />\n</form>\n<ul class=\"columns is-tablet is-multiline\">\n  <li\n    class=\"column  is-half-tablet is-one-quarter-desktop  item\"\n    *ngFor=\"let book of books | filter: searchText\"\n  >\n    <h2>{{ book.title }}</h2>\n    <img src=\"{{ book.cover }}\" width=\"300\" />\n    <div class=\"columns buybox\">\n      <p class=\"column is-one-third price\">{{ book.price }} €</p>\n      <p class=\"column is-two-thirds addtocart\">\n        <button (click)=\"addToCart(book)\" class=\"button is-primary\">\n          Ajouter au panier\n        </button>\n      </p>\n    </div>\n    <!-- <p class=\"synopsis\">{{ book.synopsis }}</p> -->\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/components/books/books.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/books/books.component.ts ***!
  \*****************************************************/
/*! exports provided: BooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksComponent", function() { return BooksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");




var BooksComponent = /** @class */ (function () {
    function BooksComponent(apiService, cartService) {
        this.apiService = apiService;
        this.cartService = cartService;
        this.books = [];
    }
    BooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getBooks().subscribe(function (data) { return (_this.books = data); });
    };
    BooksComponent.prototype.addToCart = function (book) {
        this.cartService.addToCart(book);
    };
    BooksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-books',
            template: __webpack_require__(/*! ./books.component.html */ "./src/app/components/books/books.component.html"),
            styles: [__webpack_require__(/*! ./books.component.css */ "./src/app/components/books/books.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]])
    ], BooksComponent);
    return BooksComponent;
}());



/***/ }),

/***/ "./src/app/components/cart/cart.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/cart/cart.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n    width:100%;\r\n}\r\nth {\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJ0L2NhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJ0L2NhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxle1xyXG4gICAgd2lkdGg6MTAwJTtcclxufVxyXG50aCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/cart/cart.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/cart/cart.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table is-bordered\">\n  <thead>\n    <tr>\n      <th></th>\n      <th>Livre</th>\n      <th>Quantité</th>\n      <th>Prix unitaire</th>\n      <th>Total</th>\n    </tr>\n  </thead>\n  <tr *ngFor=\"let item of items\">\n    <td><button (click)=\"removeFromCart(item)\">X</button></td>\n    <td>{{ item.product.title }}</td>\n    <td>{{ item.quantity }}</td>\n    <td>{{ item.product.price }}</td>\n    <td>{{ item.quantity * item.product.price }}</td>\n  </tr>\n  <tr>\n    <td></td>\n    <td colspan=\"3\">SOUS-TOTAL</td>\n    <td>{{ totalPrice }}</td>\n  </tr>\n  <tr>\n    <td></td>\n    <td colspan=\"3\">Remise</td>\n    <td>{{ discount }}</td>\n  </tr>\n  <tfoot>\n    <tr class=\"has-text-weight-bold\">\n      <td></td>\n      <td colspan=\"3\">TOTAL</td>\n      <td>\n        <b>{{ totalPrice - discount }}</b>\n      </td>\n    </tr>\n  </tfoot>\n</table>\n"

/***/ }),

/***/ "./src/app/components/cart/cart.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/cart/cart.component.ts ***!
  \***************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");



var CartComponent = /** @class */ (function () {
    function CartComponent(cartService) {
        var _this = this;
        this.cartService = cartService;
        this.totalPrice = 0;
        this.discount = 0;
        this.cartService.cart.subscribe(function (data) {
            console.log('cartservice Behavior Subject data', data);
            _this.items = data.items;
            _this.totalPrice = data.totalPrice;
            _this.discount = data.discount;
        });
    }
    CartComponent.prototype.ngOnInit = function () { };
    CartComponent.prototype.removeFromCart = function (item) {
        this.cartService.removeFromCart(item);
    };
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/components/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/components/cart/cart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/components/minicart/minicart.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/minicart/minicart.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".minicart{\r\n    position: absolute;\r\n    top: 16px;\r\n    right: 20px;\r\n    border: 1px solid rgb(211, 208, 208);\r\n    padding: 5px;\r\n    width: 110px;\r\n    height: 60px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9taW5pY2FydC9taW5pY2FydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWluaWNhcnQvbWluaWNhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5taW5pY2FydHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTZweDtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxMSwgMjA4LCAyMDgpO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgd2lkdGg6IDExMHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/minicart/minicart.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/minicart/minicart.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"minicart\">\n  <p>Panier : {{ totalItems }}</p>\n  <p>€ : {{ total }}</p>\n  <p *ngIf=\"totalItems > 0\"><a routerLink=\"/cart\">Voir le panier</a></p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/minicart/minicart.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/minicart/minicart.component.ts ***!
  \***********************************************************/
/*! exports provided: MinicartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinicartComponent", function() { return MinicartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");



var MinicartComponent = /** @class */ (function () {
    function MinicartComponent(cartService) {
        this.cartService = cartService;
        this.totalItems = 0;
        this.total = 0;
    }
    MinicartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartService.cart.subscribe(function (data) {
            _this.totalItems = data.totalItems;
            _this.total = data.totalPrice - data.discount;
        });
    };
    MinicartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-minicart',
            template: __webpack_require__(/*! ./minicart.component.html */ "./src/app/components/minicart/minicart.component.html"),
            styles: [__webpack_require__(/*! ./minicart.component.css */ "./src/app/components/minicart/minicart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])
    ], MinicartComponent);
    return MinicartComponent;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        //private url = 'http://henri-potier.xebia.fr/books';
        this.url = "https://henri-potier-proxy.herokuapp.com/books";
    }
    ApiService.prototype.getBooks = function () {
        return this.http.get(this.url);
    };
    ApiService.prototype.getBestOffer = function (refsUrls) {
        console.log("#refsUrls : ", this.url + "/" + refsUrls + "/commercialOffers");
        return this.http.get(this.url + "/" + refsUrls + "/commercialOffers");
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/cart.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");




var CartService = /** @class */ (function () {
    function CartService(apiService) {
        this.apiService = apiService;
        this.cart = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
            items: [],
            totalItems: 0,
            totalPrice: 0,
            discount: 0
        });
        this.offer = null;
        // Get cart from localstorage
        if (localStorage.getItem('cart')) {
            var storedCart = localStorage.getItem('cart');
            this.cart.next(JSON.parse(storedCart));
        }
    }
    CartService.prototype.addToCart = function (book) {
        console.log('add to cart', book);
        var currentCart = this.cart.value;
        var currentProduct = currentCart.items.find(function (element) { return book.isbn === element.product.isbn; });
        if (currentProduct) {
            currentProduct.quantity++;
        }
        else {
            currentCart.items.push({ product: book, quantity: 1 });
        }
        this.saveCart();
    };
    CartService.prototype.removeFromCart = function (item) {
        console.log('removeFromCart', item);
        var currentCart = this.cart.value;
        currentCart.items.splice(currentCart.items.findIndex(function (it) { return it.product.isbn === item.product.isbn; }), 1);
        this.saveCart();
    };
    CartService.prototype.saveCart = function () {
        var currentCart = this.cart.value;
        currentCart.totalItems = this.countItemsCart();
        if (currentCart.totalItems === 0) {
            currentCart.discount = 0;
            currentCart.totalPrice = 0;
        }
        else {
            currentCart.totalPrice = this.countCartTotal();
        }
        this.cart.next(currentCart);
        localStorage.setItem('cart', JSON.stringify(currentCart));
    };
    CartService.prototype.countItemsCart = function () {
        var currentCart = this.cart.value;
        var totalItems = 0;
        currentCart.items.forEach(function (element) {
            totalItems += element.quantity;
        });
        return totalItems;
    };
    CartService.prototype.countCartTotal = function () {
        var currentCart = this.cart.value;
        var totalPrice = 0;
        currentCart.items.forEach(function (element) {
            totalPrice += element.product.price * element.quantity;
        });
        this.getBestOffer();
        return totalPrice;
    };
    CartService.prototype.getBestOffer = function () {
        var _this = this;
        var currentCart = this.cart.value;
        var url = '';
        currentCart.items.forEach(function (element, index) {
            url += element.product.isbn + ',';
        });
        if (url !== '') {
            this.apiService
                .getBestOffer(url)
                .subscribe(function (data) {
                return _this.computeBestOffer(data.offers, currentCart.totalPrice);
            });
        }
    };
    CartService.prototype.computeBestOffer = function (offers, totalPrice) {
        console.warn('computeBestOffer');
        var percentageOffer = 0;
        var minusOffer = 0;
        var sliceOffer = 0;
        var bestOffers = [];
        var currentCart = this.cart.value;
        offers.forEach(function (offer) {
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
        console.log('best offers', Math.max.apply(Math, bestOffers));
        currentCart.discount = Math.max.apply(Math, bestOffers);
        this.cart.next(currentCart);
    };
    CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\scova\Documents\sites\HenriPotier\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map