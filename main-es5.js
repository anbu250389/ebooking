(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/components/admin-bookings/admin-bookings.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/components/admin-bookings/admin-bookings.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5>Bookings</h5>\n<ng-container *ngIf=\"bookings$ | async as bookings\">\n  <bookings-list [bookings]=\"bookings\"></bookings-list>\n</ng-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/components/admin-orders/admin-orders.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/components/admin-orders/admin-orders.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Orders</h1>\n<ng-container *ngIf=\"orders$ | async as orders\">\n    <orders-list [orders]=\"orders\"></orders-list>\n</ng-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/components/admin-products/admin-products.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/components/admin-products/admin-products.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p><a routerLink=\"/admin/products/new\" class=\"btn btn-primary\">New Product</a></p>\n<p><input #query (keyup)=\"filter(query.value)\" placeholder=\"Search...\" type=\"text\" class=\"form-control\"></p>\n<data-table id=\"my-table\" [items]=\"items\" [itemCount]=\"itemCount\" (reload)=\"reloadItems($event)\">\n    <data-table-column>\n        [property] = \"'title'\"\n        [sortable] = \"true\"\n        [resizeable] = \"true\"\n        <ng-template #dataTableHeader let-item=\"item\">\n            <i>Title</i>\n        </ng-template>\n        <ng-template #dataTableCell let-item=\"item\">\n            {{ item.title }}\n        </ng-template>\n    </data-table-column>\n    <data-table-column>\n        [property] = \"'price'\"\n        [sortable] = \"true\"\n        [resizeable] = \"true\"\n        <ng-template #dataTableHeader let-item=\"item\">\n            <i>Price</i>\n        </ng-template>\n        <ng-template #dataTableCell let-item=\"item\">\n            {{ item.price | currency: 'USD':'symbol' }}\n        </ng-template>\n    </data-table-column>\n    <data-table-column>\n        [property] = \"key\"\n        <ng-template #dataTableCell let-item=\"item\">\n            <a [routerLink]=\"['/admin/products/', item.key]\">Edit</a>\n        </ng-template>\n    </data-table-column>\n</data-table>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/components/airport-form/airport-form.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/components/airport-form/airport-form.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5>Airports</h5>\n<div class=\"row\">\n  <div class=\"col-md-8\">\n    <div class=\"row\" *ngIf=\"airports$ | async as airports\">\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th>City</th>\n            <th>Code</th>\n            <th>Country</th>\n            <th>Title</th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let airport of airports\">\n            <td>\n              {{ airport.city}}\n            </td>\n            <td>\n              {{ airport.code}}\n            </td>\n            <td>\n              {{ airport.country}}\n            </td>\n            <td>\n              {{ airport.title}}\n            </td>\n            <td>\n              <button class=\"btn btn-danger\"><i class=\"fa fa-remove\" area-hidden=\"true\"></i></button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <form #f=\"ngForm\" (ngSubmit)=\"save(f.value)\">\n      <div class=\"form-group\">\n        <label for=\"title\">Title</label>\n        <input #title=\"ngModel\" [(ngModel)]=\"airport.title\" name=\"title\" type=\"text\" id=\"title\" class=\"form-control\"\n          required>\n        <div class=\"alert alert-danger\" *ngIf=\"submitted && title.invalid\">\n          Title is required.\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"code\">Code</label>\n        <input #code=\"ngModel\" [(ngModel)]=\"airport.code\" name=\"code\" type=\"text\" id=\"code\" class=\"form-control\"\n          required>\n        <div class=\"alert alert-danger\" *ngIf=\"submitted && code.invalid\">\n          Code is required.\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"city\">City</label>\n        <input #city=\"ngModel\" [(ngModel)]=\"airport.city\" name=\"city\" type=\"text\" id=\"city\" class=\"form-control\"\n          required>\n        <div class=\"alert alert-danger\" *ngIf=\"submitted && city.invalid\">\n          City is required.\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"country\">Country</label>\n        <input #country=\"ngModel\" [(ngModel)]=\"airport.country\" name=\"country\" type=\"text\" id=\"country\"\n          class=\"form-control\" required>\n        <div class=\"alert alert-danger\" *ngIf=\"submitted && country.invalid\">\n          Country is required.\n        </div>\n      </div>\n      <button class=\"btn btn-block btn-primary\">Save</button>\n\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/components/flight-form/flight-form.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/components/flight-form/flight-form.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5>Flights</h5>\n<div class=\"row\">\n  <div class=\"col-md-8\">\n    <div class=\"row\" *ngIf=\"flights$ | async as flights\">\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th>Logo</th>\n            <th>Airline</th>\n            <th>Code</th>\n            <th>Flight</th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let flight of flights\">\n            <td>\n              <div [style.backgroundImage]=\"'url('+ flight.imageUrl +')'\" class=\"thumbnail\"></div>\n            </td>\n            <td>\n              {{ flight.airline}}\n            </td>\n            <td>\n              {{ flight.code}}\n            </td>\n            <td>\n              {{ flight.title}}\n            </td>\n            <td>\n              <button class=\"btn btn-danger\"><i class=\"fa fa-remove\" area-hidden=\"true\"></i></button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <form #f=\"ngForm\" (ngSubmit)=\"save(f.value)\">\n      <div class=\"form-group\">\n        <label for=\"airline\">Airline</label>\n        <select #airline=\"ngModel\" [(ngModel)]=\"flight.airline\" name=\"airline\" id=\"airline\" class=\"form-control\"\n          required>\n          <option value=\"\"></option>\n          <option *ngFor=\"let c of airlines$ | async\" [value]=\"c.key\">{{ c.name }}</option>\n        </select>\n        <div class=\"alert alert-danger\" *ngIf=\"submitted && airline.invalid\">\n          Airline is required.\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"title\">Title</label>\n        <input #title=\"ngModel\" [(ngModel)]=\"flight.title\" name=\"title\" type=\"text\" id=\"title\" class=\"form-control\"\n          required>\n        <div class=\"alert alert-danger\" *ngIf=\"submitted && title.invalid\">\n          Title is required.\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"code\">Code</label>\n        <input #code=\"ngModel\" [(ngModel)]=\"flight.code\" name=\"code\" type=\"text\" id=\"code\" class=\"form-control\"\n          required>\n        <div class=\"alert alert-danger\" *ngIf=\"submitted && code.invalid\">\n          Code is required.\n        </div>\n      </div>\n      <!-- <div class=\"row col-md-12 pr-0 mr-0\">\n        <div class=\"col-md-6 pl-0 pr-0 mr-0\">\n          <h6>Departure</h6>\n        </div>\n        <div class=\"col-md-6 pl-0 pr-0 mr-0\">\n          <h6>Arrival</h6>\n        </div>\n        <div class=\"col-md-6 pl-0 pr-0 mr-0\">\n          <div class=\"col-md-12 pl-0 pr-0 mr-0\">\n            <div class=\"col-md-12 pl-0 mr-0\">\n              <div class=\"form-group \">\n                <label for=\"source\">City</label>\n                <input #source=\"ngModel\" [(ngModel)]=\"flight.source\" name=\"source\" type=\"text\" id=\"source\"\n                  class=\"form-control\" required>\n                <div class=\"alert alert-danger\" *ngIf=\"source.touched && source.invalid\">\n                  City is required.\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12 pl-0 mr-0\">\n              <div class=\"form-group\">\n                <label for=\"departure\">Time</label>\n                <input #departure=\"ngModel\" [(ngModel)]=\"flight.departure\" name=\"departure\" type=\"text\" id=\"departure\"\n                  class=\"form-control\" required>\n                <div class=\"alert alert-danger\" *ngIf=\"departure.touched && departure.invalid\">\n                  Time is required.\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6 pl-0 pr-0 mr-0\">\n          <div class=\"col-md-12 pl-0 pr-0 mr-0\">\n            <div class=\"col-md-12 pl-0 mr-0\">\n              <div class=\"form-group\">\n                <label for=\"destination\">City</label>\n                <input #destination=\"ngModel\" [(ngModel)]=\"flight.destination\" name=\"destination\" type=\"text\"\n                  id=\"destination\" class=\"form-control\" required>\n                <div class=\"alert alert-danger\" *ngIf=\"destination.touched && destination.invalid\">\n                  City is required.\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12 pl-0 mr-0\">\n              <div class=\"form-group\">\n                <label for=\"arrival\">Time</label>\n                <input #arrival=\"ngModel\" [(ngModel)]=\"flight.arrival\" name=\"arrival\" type=\"text\" id=\"arrival\"\n                  class=\"form-control\" required>\n                <div class=\"alert alert-danger\" *ngIf=\"arrival.touched && arrival.invalid\">\n                  Time is required.\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"price\">Price</label>\n        <div class=\"input-group\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">$</span>\n          </div>\n          <input #price=\"ngModel\" [(ngModel)]=\"flight.price\" name=\"price\" type=\"number\" id=\"price\" class=\"form-control\"\n            required [min]=\"0\">\n        </div>\n        <div class=\"alert alert-danger\" *ngIf=\"price.touched && price.invalid\">\n          <div *ngIf=\"price.errors.required\">Price is required.</div>\n          <div *ngIf=\"price.errors.min\">Price should be 0 or higher.</div>\n        </div>\n      </div> -->\n      <div class=\"form-group\">\n        <label for=\"imageUrl\">Image URL</label>\n        <input #imageUrl=\"ngModel\" [(ngModel)]=\"flight.imageUrl\" name=\"imageUrl\" type=\"text\" id=\"imageUrl\"\n          class=\"form-control\" required url>\n        <div class=\"alert alert-danger\" *ngIf=\"submitted && imageUrl.invalid\">\n          <div *ngIf=\"imageUrl.errors.required\">Image URL is required.</div>\n          <div *ngIf=\"imageUrl.errors.url\">Please enter a valid Image URL.</div>\n        </div>\n      </div>\n      <button class=\"btn btn-block btn-primary\">Save</button>\n    </form>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/components/flight-schedule/flight-schedule.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/components/flight-schedule/flight-schedule.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5>Flight Schedule</h5>\n<div class=\"row\">\n  <div class=\"col-md-8\">\n    <div class=\"row\" *ngIf=\"schedules$ | async as schedules\">\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th colspan=\"2\" style=\"text-align: center\">Flight</th>\n            <th>Departure</th>\n            <th>Arrival</th>\n            <th>Fare</th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let schedule of schedules\">\n            <td>\n              <div [style.backgroundImage]=\"'url('+ schedule.flight.imageUrl +')'\" class=\"thumbnail\"></div>\n            </td>\n            <td>\n              <p>{{ schedule.flight.title}}</p>\n            </td>\n            <td>\n              <h6>{{ schedule.departure_date | date: 'longDate' }} {{ schedule.departure_time}}</h6>\n              <p class=\"airport\">{{ schedule.departure.city}}</p>\n            </td>\n            <td>\n              <h6>{{ schedule.arrival_date | date: 'longDate' }} {{ schedule.arrival_time}}</h6>\n              <p class=\"airport\">{{ schedule.arrival.city}}</p>\n            </td>\n            <td>\n              <h6>{{ schedule.ticket_fare | currency:'INR'}}</h6>\n            </td>\n            <td>\n              <button class=\"btn btn-danger\"><i class=\"fa fa-remove\" area-hidden=\"true\"></i></button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <form #f=\"ngForm\" (ngSubmit)=\"save(f.value)\">\n      <div class=\"form-group\">\n        <label for=\"flight\">Flight</label>\n        <select #flight=\"ngModel\" [(ngModel)]=\"schedule.flight\" name=\"flight\" id=\"flight\" class=\"form-control\" required>\n          <option value=\"\"></option>\n          <option *ngFor=\"let c of flights$ | async\" [ngValue]=\"c\">{{ c.title }}</option>\n        </select>\n        <div class=\"alert alert-danger\" *ngIf=\"submitted && flight.invalid\">\n          Flight is required.\n        </div>\n      </div>\n      <div class=\"row col-md-12 pr-0 mr-0\">\n        <div class=\"col-md-6 pl-0 pr-0 mr-0\">\n          Departure\n        </div>\n        <div class=\"col-md-6 pl-0 pr-0 mr-0\">\n          Arrival\n        </div>\n        <div class=\"col-md-12\">&nbsp;</div>\n        <div class=\"col-md-6 pl-0 pr-0 mr-0\">\n          <div class=\"col-md-12 pl-0 pr-0 mr-0\">\n            <div class=\"col-md-12 pl-0 mr-0\">\n              <div class=\"form-group \">\n                <label for=\"departure\">City</label>\n                <select #departure=\"ngModel\" [(ngModel)]=\"schedule.departure\" name=\"departure\" id=\"departure\"\n                  class=\"form-control\" required>\n                  <option value=\"\"></option>\n                  <option *ngFor=\"let c of airports$ | async\" [ngValue]=\"c\">{{ c.city }}</option>\n                </select>\n                <div class=\"alert alert-danger\" *ngIf=\"submitted && departure.invalid\">\n                  City is required.\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12 pl-0 mr-0\">\n              <div class=\"form-group\">\n                <label for=\"departure_date\">Date</label>\n                <div class=\"input-group\">\n                  <input #departure_date=\"ngModel\" [(ngModel)]=\"schedule.departure_date\" name=\"departure_date\"\n                    type=\"text\" id=\"departure_date\" class=\"form-control\" required ngbDatepicker #d=\"ngbDatepicker\"\n                    placeholder=\"YYYY-MM-DD\">\n                  <div class=\"input-group-append\">\n                    <button class=\"btn btn-outline-secondary\" (click)=\"d.toggle()\" type=\"button\">\n                      <i class=\"fa fa-calendar\" area-hidden=\"true\"></i>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12 pl-0 mr-0\">\n              <div class=\"form-group\">\n                <label for=\"departure_time\">Time</label>\n                <input #departure_time=\"ngModel\" [(ngModel)]=\"schedule.departure_time\" name=\"departure_time\" type=\"text\"\n                  id=\"departure_time\" class=\"form-control\" placeholder=\"HH:MM\" required>\n                <div class=\"alert alert-danger\" *ngIf=\"submitted && departure_time.invalid\">\n                  Time is required.\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6 pl-0 pr-0 mr-0\">\n          <div class=\"col-md-12 pl-0 pr-0 mr-0\">\n            <div class=\"col-md-12 pl-0 mr-0\">\n              <div class=\"form-group\">\n                <label for=\"arrival\">City</label>\n                <select #arrival=\"ngModel\" [(ngModel)]=\"schedule.arrival\" name=\"arrival\" id=\"arrival\"\n                  class=\"form-control\" required>\n                  <option value=\"\"></option>\n                  <option *ngFor=\"let c of airports$ | async\" [ngValue]=\"c\">{{ c.city }}</option>\n                </select>\n                <div class=\"alert alert-danger\" *ngIf=\"submitted && arrival.invalid\">\n                  City is required.\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12 pl-0 mr-0\">\n              <div class=\"form-group\">\n                <label for=\"arrival_date\">Date</label>\n                <div class=\"input-group\">\n                  <input #arrival_date=\"ngModel\" [(ngModel)]=\"schedule.arrival_date\" name=\"arrival_date\" type=\"text\"\n                    id=\"arrival_date\" class=\"form-control\" required ngbDatepicker #d1=\"ngbDatepicker\"\n                    placeholder=\"YYYY-MM-DD\">\n                  <div class=\"input-group-append\">\n                    <button class=\"btn btn-outline-secondary\" (click)=\"d1.toggle()\" type=\"button\">\n                      <i class=\"fa fa-calendar\" area-hidden=\"true\"></i>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12 pl-0 mr-0\">\n              <div class=\"form-group\">\n                <label for=\"arrival_time\">Time</label>\n                <input #arrival_time=\"ngModel\" [(ngModel)]=\"schedule.arrival_time\" name=\"arrival_time\" type=\"text\"\n                  id=\"arrival_time\" class=\"form-control\" placeholder=\"HH:MM\" required>\n                <div class=\"alert alert-danger\" *ngIf=\"submitted && arrival_time.invalid\">\n                  Time is required.\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"ticket_fare\">Ticket Fare</label>\n        <div class=\"input-group\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">$</span>\n          </div>\n          <input #ticket_fare=\"ngModel\" [(ngModel)]=\"schedule.ticket_fare\" name=\"ticket_fare\" type=\"number\"\n            id=\"ticket_fare\" class=\"form-control\" required [min]=\"0\">\n        </div>\n        <div class=\"alert alert-danger\" *ngIf=\"submitted && ticket_fare.invalid\">\n          <div *ngIf=\"ticket_fare.errors.required\">Ticket fare is required.</div>\n          <div *ngIf=\"ticket_fare.errors.min\">Ticket fare should be 0 or higher.</div>\n        </div>\n      </div>\n      <button class=\"btn btn-block btn-primary\">Save</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/components/product-form/product-form.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/components/product-form/product-form.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6\">\n        <form #f=\"ngForm\" (ngSubmit)=\"save(f.value)\">\n            <div class=\"form-group\">\n                <label for=\"title\">Title</label>\n                <input #title=\"ngModel\" [(ngModel)]=\"product.title\" name=\"title\" type=\"text\" id=\"title\"\n                    class=\"form-control\" required>\n                <div class=\"alert alert-danger\" *ngIf=\"title.touched && title.invalid\">\n                    Title is required.\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"price\">Price</label>\n                <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">$</span>\n                    </div>\n                    <input #price=\"ngModel\" [(ngModel)]=\"product.price\" name=\"price\" type=\"number\" id=\"price\"\n                        class=\"form-control\" required [min]=\"0\">\n                </div>\n                <div class=\"alert alert-danger\" *ngIf=\"price.touched && price.invalid\">\n                    <div *ngIf=\"price.errors.required\">Price is required.</div>\n                    <div *ngIf=\"price.errors.min\">Price should be 0 or higher.</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"category\">Category</label>\n                <select #category=\"ngModel\" [(ngModel)]=\"product.category\" name=\"category\" id=\"category\"\n                    class=\"form-control\" required>\n                    <option value=\"\"></option>\n                    <option *ngFor=\"let c of categories$ | async\" [value]=\"c.key\">{{ c.name }}</option>\n                </select>\n                <div class=\"alert alert-danger\" *ngIf=\"category.touched && category.invalid\">\n                    Category is required.\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"imageUrl\">Image URL</label>\n                <input #imageUrl=\"ngModel\" [(ngModel)]=\"product.imageUrl\" name=\"imageUrl\" type=\"text\" id=\"imageUrl\"\n                    class=\"form-control\" required url>\n                <div class=\"alert alert-danger\" *ngIf=\"imageUrl.touched && imageUrl.invalid\">\n                    <div *ngIf=\"imageUrl.errors.required\">Image URL is required.</div>\n                    <div *ngIf=\"imageUrl.errors.url\">Please enter a valid Image URL.</div>\n                </div>\n            </div>\n            <button class=\"btn btn-primary mr-1\">Save</button>\n            <button type=\"button\" (click)=\"delete()\" class=\"btn btn-danger mr-1\">Delete</button>\n            <button type=\"button\" (click)=\"viewList()\" class=\"btn btn-secondary\">View List</button>\n\n        </form>\n    </div>\n\n    <div class=\"col-md-6\">\n        <product-card [product]=product [show-actions]=\"false\"></product-card>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bs-navbar></bs-navbar>\n<main role=\"main\" class=\"container\">\n  <router-outlet></router-outlet>\n</main>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/components/bs-navbar/bs-navbar.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/components/bs-navbar/bs-navbar.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light bg-light fixed-top\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" routerLink=\"/\"><i class=\"fa fa-plane\" area-hidden=\"true\"></i></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\"\n      aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" routerLink=\"/flights\">\n            <div class=\"appName\">eBooking</div>\n          </a>\n        </li>\n      </ul>\n      <ul class=\"navbar-nav\">\n        <ng-template #anonymousUser>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n          </li>\n        </ng-template>\n        <li *ngIf=\"appUser; else anonymousUser\" ngbDropdown class=\"nav-item dropdown\">\n          <a ngbDropdownToggle class=\"nav-link dropdown-toggle\" id=\"dropdown01\" data-toggle=\"dropdown\"\n            aria-haspopup=\"true\" aria-expanded=\"false\">{{ appUser.name }}</a>\n          <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\n            <a class=\"dropdown-item\" routerLink=\"/my/bookings\">My Bookings</a>\n            <ng-container *ngIf=\"appUser.isAdmin\">\n              <a class=\"dropdown-item\" routerLink=\"/admin/bookings\">Manage Bookings</a>\n              <a class=\"dropdown-item\" routerLink=\"/admin/flight-schedule\">Manage Schedules</a>\n              <a class=\"dropdown-item\" routerLink=\"/admin/flights\">Manage Flights</a>\n              <a class=\"dropdown-item\" routerLink=\"/admin/airports\">Manage Airports</a>\n            </ng-container>\n            <a class=\"dropdown-item\" (click)=\"logout()\">Log Out</a>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/components/home/home.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/components/home/home.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>home works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/components/login/login.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/components/login/login.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: 15% auto 0 auto; text-align: center;\">\n  <button (click)=\"login()\" class=\"btn btn-danger btn-lg\">\n    <i class=\"fa fa-google\" area-hidden=\"true\"></i> Login with Google\n  </button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/bookings-list/bookings-list.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/bookings-list/bookings-list.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Customer Name</th>\n      <th>Mobile</th>\n      <th>Email</th>\n      <th>Booking Date</th>\n      <th>Fare</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let booking of bookings\">\n      <td>{{ booking.customer.name }}</td>\n      <td>{{ booking.customer.mobile }}</td>\n      <td>{{ booking.customer.email }}</td>\n      <td>{{ booking.dateBooked | date: 'fullDate' }}</td>\n      <td>{{ booking.schedule.ticket_fare | currency: 'INR':'symbol' }}</td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/orders-list/orders-list.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/orders-list/orders-list.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n    <thead>\n        <tr>\n            <th>Customer</th>\n            <th>Date</th>\n            <th></th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let order of orders\">\n            <td>{{ order.shipping.name }}</td>\n            <td>{{ order.datePlaced | date: longDate }}</td>\n            <td>\n                <a routerLink=\"/\">View</a>\n            </td>\n        </tr>\n    </tbody>\n</table>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/product-card/product-card.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/product-card/product-card.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"product.title\" class=\"card\">\n    <img [src]=\"product.imageUrl\" class=\"card-img-top\" [alt]=\"product.imageUrl\" *ngIf=\"product.imageUrl\">\n    <div class=\"card-body\">\n        <h5 class=\"card-title\">{{ product.title }}</h5>\n        <p class=\"card-text\">{{ product.price | currency:'USD':'symbol' }}</p>\n    </div>\n    <div *ngIf=\"showActions && shoppingCart\" class=\"card-footer\">\n        <button *ngIf=\"shoppingCart.getQuantity(product) === 0; else updateQuantity\" href=\"#\"\n            class=\"btn btn-secondary btn-block\" (click)=\"addToCart()\">Add to\n            Cart</button>\n        <ng-template #updateQuantity>\n            <product-quantity [product]=\"product\" [shopping-cart]=\"shoppingCart\"></product-quantity>\n        </ng-template>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/product-quantity/product-quantity.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/product-quantity/product-quantity.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters\">\n    <div class=\"col-2\"><button (click)=\"removeFromCart()\" class=\"btn btn-secondary btn-block\">-</button>\n    </div>\n    <div class=\"col text-center quantity\">{{ shoppingCart.getQuantity(product) }} in cart</div>\n    <div class=\"col-2\"><button (click)=\"addToCart()\" class=\"btn btn-secondary btn-block\">+</button></div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shopping/components/booking-summary/booking-summary.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shopping/components/booking-summary/booking-summary.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5>Booking Summary</h5>\n<div class=\"row\">\n  <div class=\"col-9\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"card-text\">\n          <div class=\"float-right\">\n            <h6>Ticket Fare: {{ schedule.ticket_fare | currency: 'INR':'symbol' }}</h6>\n          </div>\n          <h5>{{ schedule.departure?.city }} - {{ schedule.arrival?.city }}</h5>\n          <p> Departure: {{ schedule.departure_date | date: 'fullDate' }}</p>\n          <div class=\"row col-12\">\n            <div class=\"col-2\">\n              <div [style.backgroundImage]=\"'url('+ schedule.flight?.imageUrl +')'\" class=\"thumbnail\"></div>\n            </div>\n            <div class=\"col-4\">\n              <h5>{{ schedule.flight?.airline }}</h5>\n              <p>{{ schedule.flight?.title }}</p>\n            </div>\n            <div class=\"col-3\">\n              <h5>{{ schedule.departure_time }}</h5>\n              <h6>{{ schedule.departure_date | date: 'longDate' }}</h6>\n              <p class=\"airport\">{{ schedule.departure?.city }}</p>\n              <p class=\"airport\">{{ schedule.departure?.title }}</p>\n            </div>\n            <div class=\"col-3\">\n              <h5>{{ schedule.arrival_time }}</h5>\n              <h6>{{ schedule.arrival_date | date: 'longDate' }}</h6>\n              <p class=\"airport\">{{ schedule.arrival?.city }}</p>\n              <p class=\"airport\">{{ schedule.arrival?.title }}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-3\">\n    <form #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"name\">Traveller Name</label>\n        <input #name=\"ngModel\" [(ngModel)]=\"customer.name\" name=\"name\" type=\"text\" id=\"name\" class=\"form-control\"\n          required>\n        <div class=\"alert alert-danger\" *ngIf=\"name.touched && name.invalid\">\n          Name is required.\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"mobile\">Mobile</label>\n        <input #mobile=\"ngModel\" [(ngModel)]=\"customer.mobile\" name=\"mobile\" type=\"text\" id=\"mobile\"\n          class=\"form-control\" required>\n        <div class=\"alert alert-danger\" *ngIf=\"mobile.touched && mobile.invalid\">\n          Mobile is required.\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"email\">Email Address</label>\n        <input #email=\"ngModel\" [(ngModel)]=\"customer.email\" name=\"email\" type=\"text\" id=\"email\" class=\"form-control\"\n          required>\n        <div class=\"alert alert-danger\" *ngIf=\"email.touched && email.invalid\">\n          Email address is required.\n        </div>\n      </div>\n      <button class=\"btn btn-block btn-primary\" type=\"button\" (click)=\"save(f.value)\">Confim Booking</button>\n    </form>\n    <!-- <div class=\"card\">\n      <div class=\"card-body\">\n         <ul class=\"list-group list-group-flush pl-0 pr-0\">\n          <li class=\"list-group-item pl-0 pr-0\">\n            Base Fare <div class=\"float-right\">\n              {{ 2849 | currency: 'INR':'symbol' }}</div>\n          </li>\n          <li class=\"list-group-item pl-0 pr-0\">\n            Fee & Surcharges <div class=\"float-right\">\n              {{ 936 | currency: 'INR':'symbol' }}</div>\n          </li>\n          <li class=\"list-group-item pl-0 pr-0\">\n            Other Services <div class=\"float-right\">\n              {{ 5 | currency: 'INR':'symbol' }}</div>\n          </li>\n          <li class=\"list-group-item font-weight-bold pl-0 pr-0\">\n            Total <div class=\"float-right\">{{ 3790 | currency: 'USD':'symbol' }}</div>\n          </li>\n        </ul>      \n      </div>\n    </div>-->\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shopping/components/check-out/check-out.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shopping/components/check-out/check-out.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Shipping</h1>\n<div class=\"row\" *ngIf=\"cart$ | async as cart\">\n    <div class=\"col-6\">\n        <shipping-form [shopping-cart]=\"cart\"></shipping-form>\n    </div>\n    <div class=\"col-6\">\n        <shopping-cart-summary [shopping-cart]=\"cart\">\n        </shopping-cart-summary>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shopping/components/flights/flights.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shopping/components/flights/flights.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-3\">\n    <div class=\"row col-md-12 sticky-top\">\n      <h5>Plan my journey</h5>\n      <div class=\"col-md-12 pl-0 pr-0\">\n        <div class=\"card pl-0 pr-0\">\n          <div class=\"card-body\">\n            <div class=\"card-text\">\n              <form #f=\"ngForm\">\n                <div class=\"form-group\">\n                  <label for=\"source\">From</label>\n                  <select #source=\"ngModel\" [(ngModel)]=\"flight.source\" name=\"source\" id=\"source\" class=\"form-control\"\n                    required>\n                    <option value=\"\"></option>\n                    <option *ngFor=\"let c of airports$ | async\" [value]=\"c.city\">{{ c.city }}</option>\n                  </select>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"destination\">To</label>\n                  <select #destination=\"ngModel\" [(ngModel)]=\"flight.destination\" name=\"destination\" id=\"destination\"\n                    class=\"form-control\" required>\n                    <option value=\"\"></option>\n                    <option *ngFor=\"let c of airports$ | async\" [value]=\"c.city\">{{ c.city }}</option>\n                  </select>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"departure\">Departure</label>\n                  <div class=\"input-group\">\n                    <input #departure=\"ngModel\" [(ngModel)]=\"flight.departure\" name=\"departure\" type=\"text\"\n                      id=\"departure\" class=\"form-control\" required ngbDatepicker #d=\"ngbDatepicker\">\n                    <div class=\"input-group-append\">\n                      <button class=\"btn btn-outline-secondary\" (click)=\"d.toggle()\" type=\"button\">\n                        <i class=\"fa fa-calendar\" area-hidden=\"true\"></i>\n                      </button>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"class\">Class</label>\n                  <select #class=\"ngModel\" [(ngModel)]=\"flight.class\" name=\"class\" id=\"class\" class=\"form-control\"\n                    required>\n                    <option value=\"\"></option>\n                    <option value=\"Economy\">Economy</option>\n                    <option value=\"Premium Economy\">Premium Economy</option>\n                    <option value=\"Business\">Business</option>\n                  </select>\n                </div>\n                <button class=\"btn btn-block btn-primary\" type=\"button\" (click)=\"find(f.value)\">Find Flights</button>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col\">\n    <div *ngIf=\"filteredSchedules.length > 0\">\n      <h5>List of flights</h5>\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th colspan=\"2\" style=\"text-align: center\">Flight</th>\n            <th>Departure</th>\n            <th>Arrival</th>\n            <th>Fare</th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let schedule of filteredSchedules\">\n            <td>\n              <div [style.backgroundImage]=\"'url('+ schedule.flight.imageUrl +')'\" class=\"thumbnail\"></div>\n            </td>\n            <td>\n              <p>{{ schedule.flight.title}}</p>\n            </td>\n            <td>\n              <h6>{{ schedule.departure_date | date: 'longDate' }} {{ schedule.departure_time}}</h6>\n              <p class=\"airport\">{{ schedule.departure.city}}</p>\n            </td>\n            <td>\n              <h6>{{ schedule.arrival_date | date: 'longDate' }} {{ schedule.arrival_time}}</h6>\n              <p class=\"airport\">{{ schedule.arrival.city}}</p>\n            </td>\n            <td>\n              <h6>{{ schedule.ticket_fare | currency:'INR'}}</h6>\n            </td>\n            <td>\n              <button class=\"btn btn-primary\" (click)=\"book(schedule)\">Book</button>\n              <!-- <i class=\"fa fa-plane\"\n                  area-hidden=\"true\"></i> -->\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shopping/components/my-bookings/my-bookings.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shopping/components/my-bookings/my-bookings.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5>Bookings</h5>\n<ng-container *ngIf=\"bookings$ | async as bookings\">\n  <bookings-list [bookings]=\"bookings\"></bookings-list>\n</ng-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shopping/components/my-orders/my-orders.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shopping/components/my-orders/my-orders.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Orders</h1>\n<ng-container *ngIf=\"orders$ | async as orders\">\n    <orders-list [orders]=\"orders\"></orders-list>\n</ng-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shopping/components/order-success/order-success.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shopping/components/order-success/order-success.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>order-success works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shopping/components/products/product-filter/product-filter.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shopping/components/products/product-filter/product-filter.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sticky-top\">\n    <ul class=\"list-group\">\n        <a routerLink=\"/\" [class.active]=\"!category\" class=\"list-group-item list-group-item-action\">\n            All Categories\n        </a>\n        <a *ngFor=\"let c of categories$ | async\" routerLink=\"/\" [queryParams]=\"{ category: c.key }\"\n            class=\"list-group-item list-group-item-action\" [class.active]=\"category === c.key\">\n            {{ c.name }}\n        </a>\n    </ul>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shopping/components/products/products.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shopping/components/products/products.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-3\">\n        <product-filter [category]=\"category\"></product-filter>\n    </div>\n    <div class=\"col\">\n        <div class=\"row\" *ngIf=\"cart$ | async as cart\">\n            <ng-container *ngFor=\"let p of filteredProducts; let i=index\">\n                <div class=\"col\">\n                    <product-card [product]=\"p\" [shopping-cart]=\"cart\"></product-card>\n                </div>\n                <div *ngIf=\"(i + 1) % 2 === 0\" class=\"w-100\"></div>\n            </ng-container>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shopping/components/shipping-form/shipping-form.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shopping/components/shipping-form/shipping-form.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\">\n    <div class=\"form-group\">\n        <label for=\"name\">Name</label>\n        <input #name=\"ngModel\" [(ngModel)]=\"shipping.name\" name=\"name\" type=\"text\" class=\"form-control\" required>\n        <div class=\"alert alert-danger\" *ngIf=\"name.touched && name.invalid\">\n            <div *ngIf=\"name.errors.required\">Name is required.</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"\">Address</label>\n        <input #addressLine1=\"ngModel\" [(ngModel)]=\"shipping.addressLine1\" name=\"addressLine1\" type=\"text\"\n            class=\"form-control\" required>\n        <div class=\"alert alert-danger\" *ngIf=\"addressLine1.touched && addressLine1.invalid\">\n            <div *ngIf=\"addressLine1.errors.required\">Address Line 1 is required.</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"\"></label>\n        <input #addressLine2=\"ngModel\" [(ngModel)]=\"shipping.addressLine2\" ngModel name=\"addressLine2\" type=\"text\"\n            class=\"form-control\" required>\n        <div class=\"alert alert-danger\" *ngIf=\"addressLine2.touched && addressLine2.invalid\">\n            <div *ngIf=\"addressLine2.errors.required\">Address Line 2 is required.</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"city\">City</label>\n        <input #city=\"ngModel\" [(ngModel)]=\"shipping.city\" name=\"city\" type=\"text\" class=\"form-control\" required>\n        <div class=\"alert alert-danger\" *ngIf=\"city.touched && city.invalid\">\n            <div *ngIf=\"city.errors.required\">City is required.</div>\n        </div>\n    </div>\n    <button [disabled]=\"!f.valid\" (click)=\"placeOrder()\" class=\"btn btn-primary mr-1\">Place Order</button>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shopping/components/shopping-cart-summary/shopping-cart-summary.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shopping/components/shopping-cart-summary/shopping-cart-summary.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Order Summary</h5>\n    <p class=\"card-text\">You have {{ cart.totalItemsCount }} items in your shopping cart.</p>\n    <ul class=\"list-group list-group-flush\">\n      <li class=\"list-group-item\" *ngFor=\"let item of cart.items\">\n        {{ item.quantity }} x {{ item.title }} <div class=\"float-right\">\n          {{ item.totalPrice | currency: 'USD':'symbol' }}</div>\n      </li>\n      <li class=\"list-group-item font-weight-bold\">\n        Total <div class=\"float-right\">{{ cart.totalPrice | currency: 'USD':'symbol' }}</div>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shopping/components/shopping-cart/shopping-cart.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shopping/components/shopping-cart/shopping-cart.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Shopping Cart</h1>\n<div class=\"card\" *ngIf=\"cart\" style=\"width: 80%;\">\n    <div class=\"card-body\">\n        <p>You have {{ cart.totalItemsCount }} items in your shopping cart.\n            <button *ngIf=\"cart.items.length\" (click)=\"clearCart()\" class=\"float-right btn btn-light btn-sm\">\n                Clear Shopping Cart\n            </button>\n        </p>\n    </div>\n    <table class=\"table\">\n        <thead>\n            <tr>\n                <th></th>\n                <th>Product</th>\n                <th class=\"text-center\" style=\"width:230px;\">Quantity</th>\n                <th class=\"text-right\" style=\"width:200px;\">Price</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let item of cart.items\">\n                <td>\n                    <div [style.backgroundImage]=\"'url('+ item.imageUrl +')'\" class=\"thumbnail\"></div>\n                </td>\n                <td>{{ item.title }}</td>\n                <td>\n                    <product-quantity [product]=\"item\" [shopping-cart]=\"cart\"></product-quantity>\n                </td>\n                <td class=\"text-right\">{{ item.totalPrice | currency: 'USD':'symbol' }}</td>\n            </tr>\n        </tbody>\n        <tfoot>\n            <tr>\n                <th></th>\n                <th></th>\n                <th></th>\n                <th class=\"text-right\">{{ cart.totalPrice | currency: 'USD':'symbol' }}</th>\n            </tr>\n            <tr>\n                <th colspan=\"4\">\n                    <a *ngIf=\"cart.items.length\" routerLink=\"/check-out\" class=\"btn btn-primary\">Check Out</a>\n                </th>\n            </tr>\n\n        </tfoot>\n    </table>\n\n</div>"

/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular5_data_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular5-data-table */ "./node_modules/angular5-data-table/esm5/angular5-data-table.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/admin-products/admin-products.component */ "./src/app/admin/components/admin-products/admin-products.component.ts");
/* harmony import */ var _components_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/admin-orders/admin-orders.component */ "./src/app/admin/components/admin-orders/admin-orders.component.ts");
/* harmony import */ var _components_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/product-form/product-form.component */ "./src/app/admin/components/product-form/product-form.component.ts");
/* harmony import */ var _shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/services/auth-guard.service */ "./src/app/shared/services/auth-guard.service.ts");
/* harmony import */ var _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/admin-auth-guard.service */ "./src/app/admin/services/admin-auth-guard.service.ts");
/* harmony import */ var _shopping_shopping_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shopping/shopping.module */ "./src/app/shopping/shopping.module.ts");
/* harmony import */ var _components_airport_form_airport_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/airport-form/airport-form.component */ "./src/app/admin/components/airport-form/airport-form.component.ts");
/* harmony import */ var _components_flight_form_flight_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/flight-form/flight-form.component */ "./src/app/admin/components/flight-form/flight-form.component.ts");
/* harmony import */ var _components_flight_schedule_flight_schedule_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/flight-schedule/flight-schedule.component */ "./src/app/admin/components/flight-schedule/flight-schedule.component.ts");
/* harmony import */ var _components_admin_bookings_admin_bookings_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/admin-bookings/admin-bookings.component */ "./src/app/admin/components/admin-bookings/admin-bookings.component.ts");

















var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_7__["AdminProductsComponent"],
                _components_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_8__["AdminOrdersComponent"],
                _components_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_9__["ProductFormComponent"],
                _components_airport_form_airport_form_component__WEBPACK_IMPORTED_MODULE_13__["AirportFormComponent"],
                _components_flight_form_flight_form_component__WEBPACK_IMPORTED_MODULE_14__["FlightFormComponent"],
                _components_flight_schedule_flight_schedule_component__WEBPACK_IMPORTED_MODULE_15__["FlightScheduleComponent"],
                _components_admin_bookings_admin_bookings_component__WEBPACK_IMPORTED_MODULE_16__["AdminBookingsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shopping_shopping_module__WEBPACK_IMPORTED_MODULE_12__["ShoppingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                angular5_data_table__WEBPACK_IMPORTED_MODULE_4__["DataTableModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: 'admin/airports',
                        component: _components_airport_form_airport_form_component__WEBPACK_IMPORTED_MODULE_13__["AirportFormComponent"],
                        canActivate: [_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"], _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AdminAuthGuard"]]
                    },
                    {
                        path: 'admin/flights',
                        component: _components_flight_form_flight_form_component__WEBPACK_IMPORTED_MODULE_14__["FlightFormComponent"],
                        canActivate: [_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"], _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AdminAuthGuard"]]
                    },
                    {
                        path: 'admin/flight-schedule',
                        component: _components_flight_schedule_flight_schedule_component__WEBPACK_IMPORTED_MODULE_15__["FlightScheduleComponent"],
                        canActivate: [_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"], _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AdminAuthGuard"]]
                    },
                    {
                        path: 'admin/bookings',
                        component: _components_admin_bookings_admin_bookings_component__WEBPACK_IMPORTED_MODULE_16__["AdminBookingsComponent"],
                        canActivate: [_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"], _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AdminAuthGuard"]]
                    }
                ])
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/components/admin-bookings/admin-bookings.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/admin/components/admin-bookings/admin-bookings.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvYWRtaW4tYm9va2luZ3MvYWRtaW4tYm9va2luZ3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/components/admin-bookings/admin-bookings.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/components/admin-bookings/admin-bookings.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AdminBookingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminBookingsComponent", function() { return AdminBookingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_booking_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/booking.service */ "./src/app/shared/services/booking.service.ts");



var AdminBookingsComponent = /** @class */ (function () {
    function AdminBookingsComponent(bookingService) {
        this.bookingService = bookingService;
        this.bookings$ = this.bookingService.getBookings();
    }
    AdminBookingsComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_booking_service__WEBPACK_IMPORTED_MODULE_2__["BookingService"] }
    ]; };
    AdminBookingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'admin-bookings',
            template: __webpack_require__(/*! raw-loader!./admin-bookings.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/components/admin-bookings/admin-bookings.component.html"),
            styles: [__webpack_require__(/*! ./admin-bookings.component.css */ "./src/app/admin/components/admin-bookings/admin-bookings.component.css")]
        })
    ], AdminBookingsComponent);
    return AdminBookingsComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/admin-orders/admin-orders.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/admin/components/admin-orders/admin-orders.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvYWRtaW4tb3JkZXJzL2FkbWluLW9yZGVycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/components/admin-orders/admin-orders.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/components/admin-orders/admin-orders.component.ts ***!
  \*************************************************************************/
/*! exports provided: AdminOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminOrdersComponent", function() { return AdminOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/order.service */ "./src/app/shared/services/order.service.ts");



var AdminOrdersComponent = /** @class */ (function () {
    function AdminOrdersComponent(orderService) {
        this.orderService = orderService;
        this.orders$ = this.orderService.getOrders();
    }
    AdminOrdersComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"] }
    ]; };
    AdminOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'admin-orders',
            template: __webpack_require__(/*! raw-loader!./admin-orders.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/components/admin-orders/admin-orders.component.html"),
            styles: [__webpack_require__(/*! ./admin-orders.component.css */ "./src/app/admin/components/admin-orders/admin-orders.component.css")]
        })
    ], AdminOrdersComponent);
    return AdminOrdersComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/admin-products/admin-products.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/admin/components/admin-products/admin-products.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvYWRtaW4tcHJvZHVjdHMvYWRtaW4tcHJvZHVjdHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/components/admin-products/admin-products.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/components/admin-products/admin-products.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AdminProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProductsComponent", function() { return AdminProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var angular5_data_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular5-data-table */ "./node_modules/angular5-data-table/esm5/angular5-data-table.js");




var AdminProductsComponent = /** @class */ (function () {
    function AdminProductsComponent(productService) {
        var _this = this;
        this.productService = productService;
        this.items = [];
        this.subscription = this.productService.getAll().subscribe(function (p) {
            _this.products = p;
            _this.initializeTable(_this.products);
        });
    }
    AdminProductsComponent.prototype.initializeTable = function (products) {
        var _this = this;
        this.tableResource = new angular5_data_table__WEBPACK_IMPORTED_MODULE_3__["DataTableResource"](products);
        this.tableResource.query({ offset: 0 })
            .then(function (items) { return _this.items = items; });
        this.tableResource.count()
            .then(function (count) { return _this.itemCount = count; });
    };
    AdminProductsComponent.prototype.reloadItems = function (params) {
        var _this = this;
        if (!this.tableResource)
            return;
        this.tableResource.query(params)
            .then(function (items) { return _this.items = items; });
    };
    AdminProductsComponent.prototype.filter = function (query) {
        var filteredProducts = (query) ?
            this.products.filter(function (p) { return p.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()); }) :
            this.products;
        this.initializeTable(filteredProducts);
    };
    AdminProductsComponent.prototype.ngOnInit = function () {
    };
    AdminProductsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AdminProductsComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }
    ]; };
    AdminProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'admin-products',
            template: __webpack_require__(/*! raw-loader!./admin-products.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/components/admin-products/admin-products.component.html"),
            styles: [__webpack_require__(/*! ./admin-products.component.css */ "./src/app/admin/components/admin-products/admin-products.component.css")]
        })
    ], AdminProductsComponent);
    return AdminProductsComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/airport-form/airport-form.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/admin/components/airport-form/airport-form.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvYWlycG9ydC1mb3JtL2FpcnBvcnQtZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/components/airport-form/airport-form.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/components/airport-form/airport-form.component.ts ***!
  \*************************************************************************/
/*! exports provided: AirportFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirportFormComponent", function() { return AirportFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_airport_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/airport.service */ "./src/app/shared/services/airport.service.ts");




var AirportFormComponent = /** @class */ (function () {
    function AirportFormComponent(router, route, airportService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.airportService = airportService;
        this.airport = {};
        this.submitted = false;
        this.airports$ = this.airportService.getAll();
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) {
            this.airportService.get(this.id).subscribe(function (p) { return _this.airport = p; });
        }
    }
    AirportFormComponent.prototype.save = function (product) {
        this.submitted = true;
        if (this.id)
            this.airportService.update(this.id, product);
        else
            this.airportService.create(product);
        this.submitted = false;
        this.airport = {};
        //this.router.navigate(['/admin/airports']);
    };
    AirportFormComponent.prototype.delete = function () {
        if (!confirm('Are you sure you want to delete this entry?'))
            return;
        this.airportService.delete(this.id);
        this.router.navigate(['/admin/airports']);
    };
    AirportFormComponent.prototype.viewList = function () {
        this.router.navigate(['/admin/airports']);
    };
    AirportFormComponent.prototype.ngOnInit = function () {
    };
    AirportFormComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_shared_services_airport_service__WEBPACK_IMPORTED_MODULE_3__["AirportService"] }
    ]; };
    AirportFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'airport-form',
            template: __webpack_require__(/*! raw-loader!./airport-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/components/airport-form/airport-form.component.html"),
            styles: [__webpack_require__(/*! ./airport-form.component.css */ "./src/app/admin/components/airport-form/airport-form.component.css")]
        })
    ], AirportFormComponent);
    return AirportFormComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/flight-form/flight-form.component.css":
/*!************************************************************************!*\
  !*** ./src/app/admin/components/flight-form/flight-form.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".thumbnail {\r\n  width: 50px;\r\n  height: 50px;\r\n  border-radius: 100%;\r\n  background-size: cover;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9mbGlnaHQtZm9ybS9mbGlnaHQtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9mbGlnaHQtZm9ybS9mbGlnaHQtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRodW1ibmFpbCB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/admin/components/flight-form/flight-form.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admin/components/flight-form/flight-form.component.ts ***!
  \***********************************************************************/
/*! exports provided: FlightFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightFormComponent", function() { return FlightFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_flight_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/flight.service */ "./src/app/shared/services/flight.service.ts");
/* harmony import */ var src_app_shared_services_airline_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/airline.service */ "./src/app/shared/services/airline.service.ts");





var FlightFormComponent = /** @class */ (function () {
    function FlightFormComponent(router, route, airlineService, flightService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.airlineService = airlineService;
        this.flightService = flightService;
        this.flight = {};
        this.submitted = false;
        this.airlines$ = this.airlineService.getAll();
        this.flights$ = this.flightService.getAll();
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) {
            this.flightService.get(this.id).subscribe(function (p) { return _this.flight = p; });
        }
    }
    FlightFormComponent.prototype.save = function (product) {
        this.submitted = true;
        if (this.id)
            this.flightService.update(this.id, product);
        else
            this.flightService.create(product);
        this.submitted = false;
        this.flight = {};
        //this.router.navigate(['/admin/flights']);
    };
    FlightFormComponent.prototype.delete = function () {
        if (!confirm('Are you sure you want to delete this entry?'))
            return;
        this.flightService.delete(this.id);
        this.router.navigate(['/admin/flights']);
    };
    FlightFormComponent.prototype.viewList = function () {
        this.router.navigate(['/admin/flights']);
    };
    FlightFormComponent.prototype.ngOnInit = function () {
    };
    FlightFormComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_shared_services_airline_service__WEBPACK_IMPORTED_MODULE_4__["AirlineService"] },
        { type: src_app_shared_services_flight_service__WEBPACK_IMPORTED_MODULE_3__["FlightService"] }
    ]; };
    FlightFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'flight-form',
            template: __webpack_require__(/*! raw-loader!./flight-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/components/flight-form/flight-form.component.html"),
            styles: [__webpack_require__(/*! ./flight-form.component.css */ "./src/app/admin/components/flight-form/flight-form.component.css")]
        })
    ], FlightFormComponent);
    return FlightFormComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/flight-schedule/flight-schedule.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/admin/components/flight-schedule/flight-schedule.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".thumbnail {\r\n  width: 50px;\r\n  height: 50px;\r\n  border-radius: 100%;\r\n  background-size: cover;\r\n}\r\n\r\n.airport {\r\n  font-size: 14px;\r\n  font-style: italic;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9mbGlnaHQtc2NoZWR1bGUvZmxpZ2h0LXNjaGVkdWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9mbGlnaHQtc2NoZWR1bGUvZmxpZ2h0LXNjaGVkdWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGh1bWJuYWlsIHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uYWlycG9ydCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/admin/components/flight-schedule/flight-schedule.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/components/flight-schedule/flight-schedule.component.ts ***!
  \*******************************************************************************/
/*! exports provided: FlightScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightScheduleComponent", function() { return FlightScheduleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_airport_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/airport.service */ "./src/app/shared/services/airport.service.ts");
/* harmony import */ var src_app_shared_services_flight_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/flight.service */ "./src/app/shared/services/flight.service.ts");




var FlightScheduleComponent = /** @class */ (function () {
    function FlightScheduleComponent(airportService, flightService) {
        this.airportService = airportService;
        this.flightService = flightService;
        this.schedule = {};
        this.submitted = false;
        this.flights$ = this.flightService.getAll();
        this.airports$ = this.airportService.getAll();
        this.schedules$ = this.flightService.getSchedules();
    }
    FlightScheduleComponent.prototype.ngOnInit = function () {
    };
    FlightScheduleComponent.prototype.save = function (schedule) {
        this.submitted = true;
        delete schedule.flight['key'];
        delete schedule.departure['key'];
        delete schedule.arrival['key'];
        var departure_date = schedule.departure_date.year.toString() + '-' + schedule.departure_date.month.toString() + '-' + schedule.departure_date.day.toString();
        var arrival_date = schedule.arrival_date.year.toString() + '-' + schedule.arrival_date.month.toString() + '-' + schedule.arrival_date.day.toString();
        schedule.departure_date = departure_date;
        schedule.arrival_date = arrival_date;
        this.flightService.saveSchedule(schedule);
        this.submitted = false;
        this.schedule = {};
    };
    FlightScheduleComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_airport_service__WEBPACK_IMPORTED_MODULE_2__["AirportService"] },
        { type: src_app_shared_services_flight_service__WEBPACK_IMPORTED_MODULE_3__["FlightService"] }
    ]; };
    FlightScheduleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'flight-schedule',
            template: __webpack_require__(/*! raw-loader!./flight-schedule.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/components/flight-schedule/flight-schedule.component.html"),
            styles: [__webpack_require__(/*! ./flight-schedule.component.css */ "./src/app/admin/components/flight-schedule/flight-schedule.component.css")]
        })
    ], FlightScheduleComponent);
    return FlightScheduleComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/product-form/product-form.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/admin/components/product-form/product-form.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvcHJvZHVjdC1mb3JtL3Byb2R1Y3QtZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/components/product-form/product-form.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/components/product-form/product-form.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProductFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFormComponent", function() { return ProductFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/category.service */ "./src/app/shared/services/category.service.ts");
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ProductFormComponent = /** @class */ (function () {
    function ProductFormComponent(router, route, categoryService, productService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.categoryService = categoryService;
        this.productService = productService;
        this.product = {};
        this.categories$ = this.categoryService.getAll();
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) {
            this.productService.get(this.id).subscribe(function (p) { return _this.product = p; });
        }
    }
    ProductFormComponent.prototype.save = function (product) {
        if (this.id)
            this.productService.update(this.id, product);
        else
            this.productService.create(product);
        this.router.navigate(['/admin/products']);
    };
    ProductFormComponent.prototype.delete = function () {
        if (!confirm('Are you sure you want to delete this product?'))
            return;
        this.productService.delete(this.id);
        this.router.navigate(['/admin/products']);
    };
    ProductFormComponent.prototype.viewList = function () {
        this.router.navigate(['/admin/products']);
    };
    ProductFormComponent.prototype.ngOnInit = function () {
    };
    ProductFormComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: src_app_shared_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
        { type: src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }
    ]; };
    ProductFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'product-form',
            template: __webpack_require__(/*! raw-loader!./product-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/components/product-form/product-form.component.html"),
            styles: [__webpack_require__(/*! ./product-form.component.css */ "./src/app/admin/components/product-form/product-form.component.css")]
        })
    ], ProductFormComponent);
    return ProductFormComponent;
}());



/***/ }),

/***/ "./src/app/admin/services/admin-auth-guard.service.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/services/admin-auth-guard.service.ts ***!
  \************************************************************/
/*! exports provided: AdminAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAuthGuard", function() { return AdminAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AdminAuthGuard = /** @class */ (function () {
    function AdminAuthGuard(auth, userService) {
        this.auth = auth;
        this.userService = userService;
    }
    AdminAuthGuard.prototype.canActivate = function () {
        return this.auth.appUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (appUser) { return appUser.isAdmin; }));
    };
    AdminAuthGuard.ctorParameters = function () { return [
        { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
    ]; };
    AdminAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AdminAuthGuard);
    return AdminAuthGuard;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/services/user.service */ "./src/app/shared/services/user.service.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(userService, auth, router) {
        this.userService = userService;
        this.auth = auth;
        this.title = 'eBooking';
        auth.user$.subscribe(function (user) {
            if (!user)
                return;
            userService.save(user);
            var returnUrl = localStorage.getItem('returnUrl');
            if (!returnUrl)
                return;
            localStorage.removeItem('returnUrl');
            router.navigateByUrl(returnUrl);
        });
    }
    AppComponent.ctorParameters = function () { return [
        { type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
/* harmony import */ var _admin_services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/services/admin-auth-guard.service */ "./src/app/admin/services/admin-auth-guard.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/components/login/login.component */ "./src/app/core/components/login/login.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shopping_components_flights_flights_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shopping/components/flights/flights.component */ "./src/app/shopping/components/flights/flights.component.ts");
/* harmony import */ var _shopping_shopping_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shopping/shopping.module */ "./src/app/shopping/shopping.module.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"],
                _admin_admin_module__WEBPACK_IMPORTED_MODULE_6__["AdminModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                _shopping_shopping_module__WEBPACK_IMPORTED_MODULE_13__["ShoppingModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: '', component: _shopping_components_flights_flights_component__WEBPACK_IMPORTED_MODULE_12__["FlightsComponent"] },
                    { path: 'login', component: _core_components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] }
                ])
            ],
            providers: [
                _admin_services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AdminAuthGuard"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/components/bs-navbar/bs-navbar.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/core/components/bs-navbar/bs-navbar.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-toggle {\r\n  cursor: pointer;\r\n}\r\n\r\n.appName {\r\n  font-style: italic;\r\n  font-weight: bold;\r\n  color: #c1d62e;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2JzLW5hdmJhci9icy1uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvYnMtbmF2YmFyL2JzLW5hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYXBwTmFtZSB7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjYzFkNjJlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/core/components/bs-navbar/bs-navbar.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/components/bs-navbar/bs-navbar.component.ts ***!
  \******************************************************************/
/*! exports provided: BsNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsNavbarComponent", function() { return BsNavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/shopping-cart.service */ "./src/app/shared/services/shopping-cart.service.ts");




var BsNavbarComponent = /** @class */ (function () {
    function BsNavbarComponent(auth, cartService) {
        this.auth = auth;
        this.cartService = cartService;
    }
    BsNavbarComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.auth.appUser$.subscribe(function (appUser) { return _this.appUser = appUser; });
                        _a = this;
                        return [4 /*yield*/, this.cartService.getCart()];
                    case 1:
                        _a.subscription = (_b.sent())
                            .subscribe(function (cart) { return _this.cart = cart; });
                        return [2 /*return*/];
                }
            });
        });
    };
    BsNavbarComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    BsNavbarComponent.prototype.logout = function () {
        this.auth.logout();
    };
    BsNavbarComponent.ctorParameters = function () { return [
        { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartService"] }
    ]; };
    BsNavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bs-navbar',
            template: __webpack_require__(/*! raw-loader!./bs-navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/components/bs-navbar/bs-navbar.component.html"),
            styles: [__webpack_require__(/*! ./bs-navbar.component.css */ "./src/app/core/components/bs-navbar/bs-navbar.component.css")]
        })
    ], BsNavbarComponent);
    return BsNavbarComponent;
}());



/***/ }),

/***/ "./src/app/core/components/home/home.component.css":
/*!*********************************************************!*\
  !*** ./src/app/core/components/home/home.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/core/components/home/home.component.ts":
/*!********************************************************!*\
  !*** ./src/app/core/components/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/core/components/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/core/components/login/login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/core/components/login/login.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/components/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/components/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth) {
        this.auth = auth;
    }
    LoginComponent.prototype.login = function () {
        this.auth.login();
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/core/components/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_bs_navbar_bs_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/bs-navbar/bs-navbar.component */ "./src/app/core/components/bs-navbar/bs-navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/core/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/core/components/login/login.component.ts");







var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_bs_navbar_bs_navbar_component__WEBPACK_IMPORTED_MODULE_4__["BsNavbarComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
            ],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([])
            ],
            exports: [
                _components_bs_navbar_bs_navbar_component__WEBPACK_IMPORTED_MODULE_4__["BsNavbarComponent"]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/shared/components/bookings-list/bookings-list.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/components/bookings-list/bookings-list.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Jvb2tpbmdzLWxpc3QvYm9va2luZ3MtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/components/bookings-list/bookings-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/bookings-list/bookings-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: BookingsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsListComponent", function() { return BookingsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BookingsListComponent = /** @class */ (function () {
    function BookingsListComponent() {
    }
    BookingsListComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("bookings")
    ], BookingsListComponent.prototype, "bookings", void 0);
    BookingsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bookings-list',
            template: __webpack_require__(/*! raw-loader!./bookings-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/bookings-list/bookings-list.component.html"),
            styles: [__webpack_require__(/*! ./bookings-list.component.css */ "./src/app/shared/components/bookings-list/bookings-list.component.css")]
        })
    ], BookingsListComponent);
    return BookingsListComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/orders-list/orders-list.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/orders-list/orders-list.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL29yZGVycy1saXN0L29yZGVycy1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/orders-list/orders-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/orders-list/orders-list.component.ts ***!
  \************************************************************************/
/*! exports provided: OrdersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersListComponent", function() { return OrdersListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrdersListComponent = /** @class */ (function () {
    function OrdersListComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("orders")
    ], OrdersListComponent.prototype, "orders", void 0);
    OrdersListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'orders-list',
            template: __webpack_require__(/*! raw-loader!./orders-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/orders-list/orders-list.component.html"),
            styles: [__webpack_require__(/*! ./orders-list.component.css */ "./src/app/shared/components/orders-list/orders-list.component.css")]
        })
    ], OrdersListComponent);
    return OrdersListComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/product-card/product-card.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/product-card/product-card.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card { \r\n    margin-bottom: 30px;\r\n  }\r\n  \r\n  .card-footer {\r\n    padding: 0;\r\n    background: #fff;\r\n  }\r\n  \r\n  .card-footer button {\r\n    cursor: pointer;\r\n    text-transform: uppercase;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcHJvZHVjdC1jYXJkL3Byb2R1Y3QtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGVBQWU7SUFDZix5QkFBeUI7RUFDM0IiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wcm9kdWN0LWNhcmQvcHJvZHVjdC1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7IFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1mb290ZXIgYnV0dG9uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/product-card/product-card.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/product-card/product-card.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProductCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardComponent", function() { return ProductCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/shopping-cart.service */ "./src/app/shared/services/shopping-cart.service.ts");



var ProductCardComponent = /** @class */ (function () {
    function ProductCardComponent(cartService) {
        this.cartService = cartService;
        this.showActions = true;
    }
    ProductCardComponent.prototype.addToCart = function () {
        this.cartService.addToCart(this.product);
    };
    ProductCardComponent.ctorParameters = function () { return [
        { type: _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("product")
    ], ProductCardComponent.prototype, "product", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("show-actions")
    ], ProductCardComponent.prototype, "showActions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("shopping-cart")
    ], ProductCardComponent.prototype, "shoppingCart", void 0);
    ProductCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'product-card',
            template: __webpack_require__(/*! raw-loader!./product-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/product-card/product-card.component.html"),
            styles: [__webpack_require__(/*! ./product-card.component.css */ "./src/app/shared/components/product-card/product-card.component.css")]
        })
    ], ProductCardComponent);
    return ProductCardComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/product-quantity/product-quantity.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/product-quantity/product-quantity.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".quantity {\r\n    height: 37px;\r\n    line-height: 37px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcHJvZHVjdC1xdWFudGl0eS9wcm9kdWN0LXF1YW50aXR5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0VBQ25CIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcHJvZHVjdC1xdWFudGl0eS9wcm9kdWN0LXF1YW50aXR5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucXVhbnRpdHkge1xyXG4gICAgaGVpZ2h0OiAzN3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM3cHg7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/product-quantity/product-quantity.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/product-quantity/product-quantity.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProductQuantityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductQuantityComponent", function() { return ProductQuantityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/shopping-cart.service */ "./src/app/shared/services/shopping-cart.service.ts");



var ProductQuantityComponent = /** @class */ (function () {
    function ProductQuantityComponent(cartService) {
        this.cartService = cartService;
    }
    ProductQuantityComponent.prototype.addToCart = function () {
        this.cartService.addToCart(this.product);
    };
    ProductQuantityComponent.prototype.removeFromCart = function () {
        this.cartService.removeFromCart(this.product);
    };
    ProductQuantityComponent.ctorParameters = function () { return [
        { type: _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("product")
    ], ProductQuantityComponent.prototype, "product", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("shopping-cart")
    ], ProductQuantityComponent.prototype, "shoppingCart", void 0);
    ProductQuantityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'product-quantity',
            template: __webpack_require__(/*! raw-loader!./product-quantity.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/product-quantity/product-quantity.component.html"),
            styles: [__webpack_require__(/*! ./product-quantity.component.css */ "./src/app/shared/components/product-quantity/product-quantity.component.css")]
        })
    ], ProductQuantityComponent);
    return ProductQuantityComponent;
}());



/***/ }),

/***/ "./src/app/shared/models/order.ts":
/*!****************************************!*\
  !*** ./src/app/shared/models/order.ts ***!
  \****************************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony import */ var _shopping_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shopping-cart */ "./src/app/shared/models/shopping-cart.ts");

var Order = /** @class */ (function () {
    function Order(userId, shipping, shoppingCart) {
        this.userId = userId;
        this.shipping = shipping;
        this.datePlaced = new Date().getDate();
        this.items = shoppingCart.items.map(function (i) {
            return {
                product: {
                    title: i.title,
                    imageUrl: i.imageUrl,
                    price: i.price
                },
                quantity: i.quantity,
                totalPrice: i.totalPrice
            };
        });
    }
    Order.ctorParameters = function () { return [
        null,
        { type: undefined },
        { type: _shopping_cart__WEBPACK_IMPORTED_MODULE_0__["ShoppingCart"] }
    ]; };
    return Order;
}());



/***/ }),

/***/ "./src/app/shared/models/shopping-cart-item.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/models/shopping-cart-item.ts ***!
  \*****************************************************/
/*! exports provided: ShoppingCartItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartItem", function() { return ShoppingCartItem; });
var ShoppingCartItem = /** @class */ (function () {
    function ShoppingCartItem(init) {
        Object.assign(this, init);
    }
    Object.defineProperty(ShoppingCartItem.prototype, "totalPrice", {
        get: function () {
            return this.price * this.quantity;
        },
        enumerable: true,
        configurable: true
    });
    ShoppingCartItem.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return ShoppingCartItem;
}());



/***/ }),

/***/ "./src/app/shared/models/shopping-cart.ts":
/*!************************************************!*\
  !*** ./src/app/shared/models/shopping-cart.ts ***!
  \************************************************/
/*! exports provided: ShoppingCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCart", function() { return ShoppingCart; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shopping_cart_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopping-cart-item */ "./src/app/shared/models/shopping-cart-item.ts");


var ShoppingCart = /** @class */ (function () {
    function ShoppingCart(itemsMap) {
        this.itemsMap = itemsMap;
        this.items = [];
        if (!this.itemsMap)
            return;
        for (var productId in itemsMap["items"]) {
            var item = itemsMap["items"][productId];
            this.items.push(new _shopping_cart_item__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartItem"](tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { key: productId })));
        }
    }
    ShoppingCart.prototype.getQuantity = function (product) {
        if (!this.itemsMap.items)
            return 0;
        var item = this.itemsMap.items[product.key];
        return item ? item.quantity : 0;
    };
    Object.defineProperty(ShoppingCart.prototype, "totalPrice", {
        get: function () {
            var sum = 0;
            if (!this.items)
                return sum;
            for (var productId in this.items) {
                sum += this.items[productId].totalPrice;
            }
            return sum;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShoppingCart.prototype, "totalItemsCount", {
        get: function () {
            var count = 0;
            if (!this.itemsMap)
                return count;
            for (var productId in this.itemsMap["items"]) {
                count += this.itemsMap["items"][productId].quantity;
            }
            return count;
        },
        enumerable: true,
        configurable: true
    });
    ShoppingCart.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return ShoppingCart;
}());



/***/ }),

/***/ "./src/app/shared/services/airline.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/airline.service.ts ***!
  \****************************************************/
/*! exports provided: AirlineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineService", function() { return AirlineService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var AirlineService = /** @class */ (function () {
    function AirlineService(db) {
        this.db = db;
    }
    AirlineService.prototype.getAll = function () {
        this.airlineRef = this.db.list('/airlines');
        return this.airlines$ = this.airlineRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (c) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: c.payload.key }, c.payload.val())); });
        }));
    };
    AirlineService.ctorParameters = function () { return [
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
    ]; };
    AirlineService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AirlineService);
    return AirlineService;
}());



/***/ }),

/***/ "./src/app/shared/services/airport.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/airport.service.ts ***!
  \****************************************************/
/*! exports provided: AirportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirportService", function() { return AirportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var AirportService = /** @class */ (function () {
    function AirportService(db) {
        this.db = db;
    }
    AirportService.prototype.create = function (airport) {
        return this.db.list('/airports').push(airport);
    };
    AirportService.prototype.getAll = function () {
        this.airportRef = this.db.list('/airports');
        return this.airports$ = this.airportRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (c) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: c.payload.key }, c.payload.val())); });
        }));
    };
    AirportService.prototype.get = function (airportId) {
        return this.db.object('/airports/' + airportId).valueChanges();
    };
    AirportService.prototype.update = function (airportId, airport) {
        return this.db.object('/airports/' + airportId).update(airport);
    };
    AirportService.prototype.delete = function (airportId) {
        return this.db.object('/airports/' + airportId).remove();
    };
    AirportService.ctorParameters = function () { return [
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
    ]; };
    AirportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AirportService);
    return AirportService;
}());



/***/ }),

/***/ "./src/app/shared/services/auth-guard.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/auth-guard.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, route) {
        this.auth = auth;
        this.route = route;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.auth.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            if (user)
                return true;
            _this.route.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }));
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user.service */ "./src/app/shared/services/user.service.ts");








var AuthService = /** @class */ (function () {
    function AuthService(router, userService, afAuth, route) {
        this.router = router;
        this.userService = userService;
        this.afAuth = afAuth;
        this.route = route;
        this.user$ = afAuth.authState;
    }
    AuthService.prototype.login = function () {
        var returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
        localStorage.setItem('returnUrl', returnUrl);
        this.afAuth.auth.signInWithRedirect(new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider());
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('returnUrl');
        this.afAuth.auth.signOut();
        this.router.navigate(['/login']);
    };
    Object.defineProperty(AuthService.prototype, "appUser$", {
        get: function () {
            var _this = this;
            return this.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (user) {
                if (user)
                    return _this.userService.get(user.uid);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
            }));
        },
        enumerable: true,
        configurable: true
    });
    AuthService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/services/booking.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/booking.service.ts ***!
  \****************************************************/
/*! exports provided: BookingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingService", function() { return BookingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");



var BookingService = /** @class */ (function () {
    function BookingService(db) {
        this.db = db;
    }
    BookingService.prototype.saveBooking = function (booking) {
        return this.db.list('/bookings').push(booking);
    };
    BookingService.prototype.getBookings = function () {
        return this.db.list('/bookings').valueChanges();
    };
    BookingService.prototype.getBookingsByUser = function (userId) {
        return this.db.list('/bookings', function (ref) {
            return ref.orderByChild('userId').equalTo(userId);
        }).valueChanges();
    };
    BookingService.ctorParameters = function () { return [
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
    ]; };
    BookingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], BookingService);
    return BookingService;
}());



/***/ }),

/***/ "./src/app/shared/services/category.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/category.service.ts ***!
  \*****************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var CategoryService = /** @class */ (function () {
    function CategoryService(db) {
        this.db = db;
    }
    CategoryService.prototype.getAll = function () {
        this.categoryRef = this.db.list('/categories');
        return this.categories$ = this.categoryRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (c) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: c.payload.key }, c.payload.val())); });
        }));
    };
    CategoryService.ctorParameters = function () { return [
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
    ]; };
    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/shared/services/data.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/data.service.ts ***!
  \*************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var DataService = /** @class */ (function () {
    function DataService() {
        this.schedule = {};
        this.defaultData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.schedule);
        this.currentData = this.defaultData.asObservable();
    }
    DataService.prototype.sendData = function (schedule) {
        this.defaultData.next(schedule);
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/shared/services/flight.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/flight.service.ts ***!
  \***************************************************/
/*! exports provided: FlightService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightService", function() { return FlightService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var FlightService = /** @class */ (function () {
    function FlightService(db) {
        this.db = db;
    }
    FlightService.prototype.create = function (flight) {
        return this.db.list('/flights').push(flight);
    };
    FlightService.prototype.getAll = function () {
        this.flightRef = this.db.list('/flights');
        return this.flights$ = this.flightRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (c) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: c.payload.key }, c.payload.val())); });
        }));
    };
    FlightService.prototype.get = function (flightId) {
        return this.db.object('/flights/' + flightId).valueChanges();
    };
    FlightService.prototype.update = function (flightId, flight) {
        return this.db.object('/flights/' + flightId).update(flight);
    };
    FlightService.prototype.delete = function (flightId) {
        return this.db.object('/flights/' + flightId).remove();
    };
    FlightService.prototype.saveSchedule = function (schedule) {
        return this.db.list('/schedules').push(schedule);
    };
    FlightService.prototype.getSchedules = function () {
        this.scheduleRef = this.db.list('/schedules');
        return this.schedules$ = this.scheduleRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (c) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: c.payload.key }, c.payload.val())); });
        }));
    };
    FlightService.ctorParameters = function () { return [
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
    ]; };
    FlightService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], FlightService);
    return FlightService;
}());



/***/ }),

/***/ "./src/app/shared/services/order.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/order.service.ts ***!
  \**************************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shopping-cart.service */ "./src/app/shared/services/shopping-cart.service.ts");




var OrderService = /** @class */ (function () {
    function OrderService(cartService, db) {
        this.cartService = cartService;
        this.db = db;
    }
    OrderService.prototype.placeOrder = function (order) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                result = this.db.list('/orders').push(order);
                this.cartService.clearCart();
                return [2 /*return*/, result];
            });
        });
    };
    OrderService.prototype.getOrders = function () {
        return this.db.list('/orders').valueChanges();
    };
    OrderService.prototype.getOrdersByUser = function (userId) {
        return this.db.list('/orders', function (ref) {
            return ref.orderByChild('userId').equalTo(userId);
        }).valueChanges();
    };
    OrderService.ctorParameters = function () { return [
        { type: _shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartService"] },
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
    ]; };
    OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/app/shared/services/product.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/product.service.ts ***!
  \****************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ProductService = /** @class */ (function () {
    function ProductService(db) {
        this.db = db;
    }
    ProductService.prototype.create = function (product) {
        return this.db.list('/products').push(product);
    };
    ProductService.prototype.getAll = function () {
        this.productRef = this.db.list('/products');
        return this.products$ = this.productRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (c) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: c.payload.key }, c.payload.val())); });
        }));
    };
    ProductService.prototype.get = function (productId) {
        return this.db.object('/products/' + productId).valueChanges();
    };
    ProductService.prototype.update = function (productId, product) {
        return this.db.object('/products/' + productId).update(product);
    };
    ProductService.prototype.delete = function (productId) {
        return this.db.object('/products/' + productId).remove();
    };
    ProductService.ctorParameters = function () { return [
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
    ]; };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/shared/services/shopping-cart.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/shopping-cart.service.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingCartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartService", function() { return ShoppingCartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_shopping_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/shopping-cart */ "./src/app/shared/models/shopping-cart.ts");





var ShoppingCartService = /** @class */ (function () {
    function ShoppingCartService(db) {
        this.db = db;
    }
    ShoppingCartService.prototype.getCart = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var cartId;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOrCreateCartId()];
                    case 1:
                        cartId = _a.sent();
                        return [4 /*yield*/, this.db.object('/shopping-carts/' + cartId).snapshotChanges()
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (item) { return new _models_shopping_cart__WEBPACK_IMPORTED_MODULE_4__["ShoppingCart"](item.payload.val()); }))];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ShoppingCartService.prototype.addToCart = function (product) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.updateItem(product, 1);
                return [2 /*return*/];
            });
        });
    };
    ShoppingCartService.prototype.removeFromCart = function (product) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.updateItem(product, -1);
                return [2 /*return*/];
            });
        });
    };
    ShoppingCartService.prototype.clearCart = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var cartId;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOrCreateCartId()];
                    case 1:
                        cartId = _a.sent();
                        this.db.object('/shopping-carts/' + cartId + '/items').remove();
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartService.prototype.create = function () {
        return this.db.list("/shopping-carts").push({
            dateCreated: new Date().getTime()
        });
    };
    ShoppingCartService.prototype.getOrCreateCartId = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var cartId, result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cartId = localStorage.getItem('cartId');
                        if (cartId)
                            return [2 /*return*/, cartId];
                        return [4 /*yield*/, this.create()];
                    case 1:
                        result = _a.sent();
                        localStorage.setItem('cartId', result.key);
                        return [2 /*return*/, result.key];
                }
            });
        });
    };
    ShoppingCartService.prototype.getItem = function (cartId, productId) {
        return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
    };
    ShoppingCartService.prototype.updateItem = function (product, change) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var cartId, item$;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOrCreateCartId()];
                    case 1:
                        cartId = _a.sent();
                        item$ = this.getItem(cartId, product.key);
                        item$.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (item) {
                            if (item.payload.exists()) {
                                var quantity_1;
                                item.payload.ref.once("value")
                                    .then(function (snapshot) {
                                    snapshot.forEach(function (childSnapshot) {
                                        var key = childSnapshot.key;
                                        var childData = childSnapshot.val();
                                        if (key === "quantity" && childData)
                                            quantity_1 = childData;
                                    });
                                })
                                    .then(function () {
                                    if (isNaN(quantity_1))
                                        quantity_1 = 0;
                                    quantity_1 = quantity_1 + change;
                                    if (quantity_1 === 0)
                                        item$.remove();
                                    else
                                        item$.update({
                                            title: product.title,
                                            imageUrl: product.imageUrl,
                                            price: product.price,
                                            quantity: quantity_1
                                        });
                                });
                            }
                            else
                                item$.update({
                                    title: product.title,
                                    imageUrl: product.imageUrl,
                                    price: product.price,
                                    quantity: 1
                                });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartService.ctorParameters = function () { return [
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
    ]; };
    ShoppingCartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ShoppingCartService);
    return ShoppingCartService;
}());



/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");



var UserService = /** @class */ (function () {
    function UserService(db) {
        this.db = db;
    }
    UserService.prototype.save = function (user) {
        this.db.object('/users/' + user.uid).update({
            name: user.displayName,
            email: user.email
        });
    };
    UserService.prototype.get = function (uid) {
        return this.db.object('/users/' + uid).valueChanges();
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular5_data_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular5-data-table */ "./node_modules/angular5-data-table/esm5/angular5-data-table.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/orders-list/orders-list.component */ "./src/app/shared/components/orders-list/orders-list.component.ts");
/* harmony import */ var _components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/product-card/product-card.component */ "./src/app/shared/components/product-card/product-card.component.ts");
/* harmony import */ var _components_product_quantity_product_quantity_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/product-quantity/product-quantity.component */ "./src/app/shared/components/product-quantity/product-quantity.component.ts");
/* harmony import */ var _services_airport_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/airport.service */ "./src/app/shared/services/airport.service.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/shared/services/auth-guard.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/category.service */ "./src/app/shared/services/category.service.ts");
/* harmony import */ var _services_flight_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/flight.service */ "./src/app/shared/services/flight.service.ts");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/order.service */ "./src/app/shared/services/order.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/shopping-cart.service */ "./src/app/shared/services/shopping-cart.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _services_airline_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/airline.service */ "./src/app/shared/services/airline.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _components_bookings_list_bookings_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/bookings-list/bookings-list.component */ "./src/app/shared/components/bookings-list/bookings-list.component.ts");
























var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_10__["ProductCardComponent"],
                _components_product_quantity_product_quantity_component__WEBPACK_IMPORTED_MODULE_11__["ProductQuantityComponent"],
                _components_orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_9__["OrdersListComponent"],
                _components_bookings_list_bookings_list_component__WEBPACK_IMPORTED_MODULE_23__["BookingsListComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ng2_validation__WEBPACK_IMPORTED_MODULE_8__["CustomFormsModule"],
                angular5_data_table__WEBPACK_IMPORTED_MODULE_7__["DataTableModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuthModule"],
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabaseModule"],
            ],
            exports: [
                _components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_10__["ProductCardComponent"],
                _components_product_quantity_product_quantity_component__WEBPACK_IMPORTED_MODULE_11__["ProductQuantityComponent"],
                _components_orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_9__["OrdersListComponent"],
                _components_bookings_list_bookings_list_component__WEBPACK_IMPORTED_MODULE_23__["BookingsListComponent"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ng2_validation__WEBPACK_IMPORTED_MODULE_8__["CustomFormsModule"],
                angular5_data_table__WEBPACK_IMPORTED_MODULE_7__["DataTableModule"].forRoot().ngModule,
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuthModule"],
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabaseModule"],
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"],
                _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_20__["UserService"],
                _services_category_service__WEBPACK_IMPORTED_MODULE_15__["CategoryService"],
                _services_product_service__WEBPACK_IMPORTED_MODULE_18__["ProductService"],
                _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_19__["ShoppingCartService"],
                _services_order_service__WEBPACK_IMPORTED_MODULE_17__["OrderService"],
                _services_airport_service__WEBPACK_IMPORTED_MODULE_12__["AirportService"],
                _services_flight_service__WEBPACK_IMPORTED_MODULE_16__["FlightService"],
                _services_airline_service__WEBPACK_IMPORTED_MODULE_21__["AirlineService"],
                _services_data_service__WEBPACK_IMPORTED_MODULE_22__["DataService"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shopping/components/booking-summary/booking-summary.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/shopping/components/booking-summary/booking-summary.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".thumbnail {\r\n  width: 50px;\r\n  height: 50px;\r\n  border-radius: 100%;\r\n  background-size: cover;\r\n}\r\n\r\n.airport {\r\n  font-size: 14px;\r\n  font-style: italic;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcHBpbmcvY29tcG9uZW50cy9ib29raW5nLXN1bW1hcnkvYm9va2luZy1zdW1tYXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvc2hvcHBpbmcvY29tcG9uZW50cy9ib29raW5nLXN1bW1hcnkvYm9va2luZy1zdW1tYXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGh1bWJuYWlsIHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uYWlycG9ydCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/shopping/components/booking-summary/booking-summary.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shopping/components/booking-summary/booking-summary.component.ts ***!
  \**********************************************************************************/
/*! exports provided: BookingSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingSummaryComponent", function() { return BookingSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var src_app_shared_services_booking_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/booking.service */ "./src/app/shared/services/booking.service.ts");






var BookingSummaryComponent = /** @class */ (function () {
    function BookingSummaryComponent(router, authService, dataService, bookingService) {
        this.router = router;
        this.authService = authService;
        this.dataService = dataService;
        this.bookingService = bookingService;
        this.schedule = {};
        this.customer = {};
    }
    BookingSummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userSubscription = this.authService.user$.subscribe(function (user) { return _this.userId = user.uid; });
        this.dataService.currentData.subscribe(function (schedule) {
            _this.schedule = schedule;
            if (Object.keys(_this.schedule).length === 0)
                return _this.router.navigate(["flights"]);
        });
    };
    BookingSummaryComponent.prototype.ngOnDestroy = function () {
        this.userSubscription.unsubscribe();
    };
    BookingSummaryComponent.prototype.save = function (customer) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var booking;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        booking = {
                            dateBooked: new Date().getTime(),
                            customer: customer,
                            schedule: this.schedule,
                            userId: this.userId
                        };
                        return [4 /*yield*/, this.bookingService.saveBooking(booking)];
                    case 1:
                        _a.sent();
                        this.router.navigate(["flights"]);
                        return [2 /*return*/];
                }
            });
        });
    };
    BookingSummaryComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
        { type: src_app_shared_services_booking_service__WEBPACK_IMPORTED_MODULE_5__["BookingService"] }
    ]; };
    BookingSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'booking-summary',
            template: __webpack_require__(/*! raw-loader!./booking-summary.component.html */ "./node_modules/raw-loader/index.js!./src/app/shopping/components/booking-summary/booking-summary.component.html"),
            styles: [__webpack_require__(/*! ./booking-summary.component.css */ "./src/app/shopping/components/booking-summary/booking-summary.component.css")]
        })
    ], BookingSummaryComponent);
    return BookingSummaryComponent;
}());



/***/ }),

/***/ "./src/app/shopping/components/check-out/check-out.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/shopping/components/check-out/check-out.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nL2NvbXBvbmVudHMvY2hlY2stb3V0L2NoZWNrLW91dC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shopping/components/check-out/check-out.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shopping/components/check-out/check-out.component.ts ***!
  \**********************************************************************/
/*! exports provided: CheckOutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckOutComponent", function() { return CheckOutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/shopping-cart.service */ "./src/app/shared/services/shopping-cart.service.ts");



var CheckOutComponent = /** @class */ (function () {
    function CheckOutComponent(cartService) {
        this.cartService = cartService;
    }
    CheckOutComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.cartService.getCart()];
                    case 1:
                        _a.cart$ = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CheckOutComponent.ctorParameters = function () { return [
        { type: _shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartService"] }
    ]; };
    CheckOutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'check-out',
            template: __webpack_require__(/*! raw-loader!./check-out.component.html */ "./node_modules/raw-loader/index.js!./src/app/shopping/components/check-out/check-out.component.html"),
            styles: [__webpack_require__(/*! ./check-out.component.css */ "./src/app/shopping/components/check-out/check-out.component.css")]
        })
    ], CheckOutComponent);
    return CheckOutComponent;
}());



/***/ }),

/***/ "./src/app/shopping/components/flights/flights.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/shopping/components/flights/flights.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".thumbnail {\r\n  width: 50px;\r\n  height: 50px;\r\n  border-radius: 100%;\r\n  background-size: cover;\r\n}\r\n\r\n.card {\r\n  margin-bottom: 80px;\r\n}\r\n\r\n.airport {\r\n  font-size: 14px;\r\n  font-style: italic;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcHBpbmcvY29tcG9uZW50cy9mbGlnaHRzL2ZsaWdodHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9zaG9wcGluZy9jb21wb25lbnRzL2ZsaWdodHMvZmxpZ2h0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRodW1ibmFpbCB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbn1cclxuXHJcbi5haXJwb3J0IHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shopping/components/flights/flights.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shopping/components/flights/flights.component.ts ***!
  \******************************************************************/
/*! exports provided: FlightsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightsComponent", function() { return FlightsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_flight_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/flight.service */ "./src/app/shared/services/flight.service.ts");
/* harmony import */ var src_app_shared_services_airport_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/airport.service */ "./src/app/shared/services/airport.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/data.service */ "./src/app/shared/services/data.service.ts");






var FlightsComponent = /** @class */ (function () {
    function FlightsComponent(router, airportService, flightService, dataService) {
        this.router = router;
        this.airportService = airportService;
        this.flightService = flightService;
        this.dataService = dataService;
        this.flight = {};
        this.schedules = [];
        this.filteredSchedules = [];
        this.airports$ = this.airportService.getAll();
    }
    FlightsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.flightService.getSchedules().subscribe(function (p) {
            _this.schedules = p;
        });
    };
    FlightsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    FlightsComponent.prototype.find = function (search) {
        var departure_date = search.departure.year.toString() + '-' + search.departure.month.toString() + '-' + search.departure.day.toString();
        if (search.source && search.destination && departure_date) {
            this.filteredSchedules = this.schedules.filter(function (p) {
                return (p.departure.city === search.source && p.arrival.city === search.destination && p.departure_date === departure_date);
            });
        }
        else {
            this.filteredSchedules = [];
        }
    };
    FlightsComponent.prototype.book = function (schedule) {
        delete schedule.key;
        this.dataService.sendData(schedule);
        this.router.navigate(["flight-summary"]);
    };
    FlightsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_shared_services_airport_service__WEBPACK_IMPORTED_MODULE_3__["AirportService"] },
        { type: src_app_shared_services_flight_service__WEBPACK_IMPORTED_MODULE_2__["FlightService"] },
        { type: src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }
    ]; };
    FlightsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'flights',
            template: __webpack_require__(/*! raw-loader!./flights.component.html */ "./node_modules/raw-loader/index.js!./src/app/shopping/components/flights/flights.component.html"),
            styles: [__webpack_require__(/*! ./flights.component.css */ "./src/app/shopping/components/flights/flights.component.css")]
        })
    ], FlightsComponent);
    return FlightsComponent;
}());



/***/ }),

/***/ "./src/app/shopping/components/my-bookings/my-bookings.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/shopping/components/my-bookings/my-bookings.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nL2NvbXBvbmVudHMvbXktYm9va2luZ3MvbXktYm9va2luZ3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shopping/components/my-bookings/my-bookings.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shopping/components/my-bookings/my-bookings.component.ts ***!
  \**************************************************************************/
/*! exports provided: MyBookingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyBookingsComponent", function() { return MyBookingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_services_booking_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/booking.service */ "./src/app/shared/services/booking.service.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");





var MyBookingsComponent = /** @class */ (function () {
    function MyBookingsComponent(authService, bookingService) {
        var _this = this;
        this.authService = authService;
        this.bookingService = bookingService;
        this.bookings$ = this.authService.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (user) { return _this.bookingService.getBookingsByUser(user.uid); }));
    }
    MyBookingsComponent.ctorParameters = function () { return [
        { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: src_app_shared_services_booking_service__WEBPACK_IMPORTED_MODULE_3__["BookingService"] }
    ]; };
    MyBookingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'my-bookings',
            template: __webpack_require__(/*! raw-loader!./my-bookings.component.html */ "./node_modules/raw-loader/index.js!./src/app/shopping/components/my-bookings/my-bookings.component.html"),
            styles: [__webpack_require__(/*! ./my-bookings.component.css */ "./src/app/shopping/components/my-bookings/my-bookings.component.css")]
        })
    ], MyBookingsComponent);
    return MyBookingsComponent;
}());



/***/ }),

/***/ "./src/app/shopping/components/my-orders/my-orders.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/shopping/components/my-orders/my-orders.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nL2NvbXBvbmVudHMvbXktb3JkZXJzL215LW9yZGVycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shopping/components/my-orders/my-orders.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shopping/components/my-orders/my-orders.component.ts ***!
  \**********************************************************************/
/*! exports provided: MyOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrdersComponent", function() { return MyOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _shared_services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/order.service */ "./src/app/shared/services/order.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var MyOrdersComponent = /** @class */ (function () {
    function MyOrdersComponent(authService, orderService) {
        var _this = this;
        this.authService = authService;
        this.orderService = orderService;
        this.orders$ = this.authService.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) { return _this.orderService.getOrdersByUser(user.uid); }));
    }
    MyOrdersComponent.ctorParameters = function () { return [
        { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _shared_services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"] }
    ]; };
    MyOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'my-orders',
            template: __webpack_require__(/*! raw-loader!./my-orders.component.html */ "./node_modules/raw-loader/index.js!./src/app/shopping/components/my-orders/my-orders.component.html"),
            styles: [__webpack_require__(/*! ./my-orders.component.css */ "./src/app/shopping/components/my-orders/my-orders.component.css")]
        })
    ], MyOrdersComponent);
    return MyOrdersComponent;
}());



/***/ }),

/***/ "./src/app/shopping/components/order-success/order-success.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/shopping/components/order-success/order-success.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nL2NvbXBvbmVudHMvb3JkZXItc3VjY2Vzcy9vcmRlci1zdWNjZXNzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shopping/components/order-success/order-success.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shopping/components/order-success/order-success.component.ts ***!
  \******************************************************************************/
/*! exports provided: OrderSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSuccessComponent", function() { return OrderSuccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderSuccessComponent = /** @class */ (function () {
    function OrderSuccessComponent() {
    }
    OrderSuccessComponent.prototype.ngOnInit = function () {
    };
    OrderSuccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'order-success',
            template: __webpack_require__(/*! raw-loader!./order-success.component.html */ "./node_modules/raw-loader/index.js!./src/app/shopping/components/order-success/order-success.component.html"),
            styles: [__webpack_require__(/*! ./order-success.component.css */ "./src/app/shopping/components/order-success/order-success.component.css")]
        })
    ], OrderSuccessComponent);
    return OrderSuccessComponent;
}());



/***/ }),

/***/ "./src/app/shopping/components/products/product-filter/product-filter.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/shopping/components/products/product-filter/product-filter.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sticky-top {\r\n    top: 80px;    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcHBpbmcvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0LWZpbHRlci9wcm9kdWN0LWZpbHRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvc2hvcHBpbmcvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0LWZpbHRlci9wcm9kdWN0LWZpbHRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0aWNreS10b3Age1xyXG4gICAgdG9wOiA4MHB4OyAgICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shopping/components/products/product-filter/product-filter.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/shopping/components/products/product-filter/product-filter.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ProductFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFilterComponent", function() { return ProductFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/category.service */ "./src/app/shared/services/category.service.ts");



var ProductFilterComponent = /** @class */ (function () {
    function ProductFilterComponent(categoryService) {
        this.categoryService = categoryService;
        this.categories$ = this.categoryService.getAll();
    }
    ProductFilterComponent.prototype.ngOnInit = function () {
    };
    ProductFilterComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("category")
    ], ProductFilterComponent.prototype, "category", void 0);
    ProductFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'product-filter',
            template: __webpack_require__(/*! raw-loader!./product-filter.component.html */ "./node_modules/raw-loader/index.js!./src/app/shopping/components/products/product-filter/product-filter.component.html"),
            styles: [__webpack_require__(/*! ./product-filter.component.css */ "./src/app/shopping/components/products/product-filter/product-filter.component.css")]
        })
    ], ProductFilterComponent);
    return ProductFilterComponent;
}());



/***/ }),

/***/ "./src/app/shopping/components/products/products.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/shopping/components/products/products.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shopping/components/products/products.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shopping/components/products/products.component.ts ***!
  \********************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/shopping-cart.service */ "./src/app/shared/services/shopping-cart.service.ts");






var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(route, productService, cartService) {
        this.route = route;
        this.productService = productService;
        this.cartService = cartService;
        this.products = [];
        this.filteredProducts = [];
    }
    ProductsComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.cartService.getCart()];
                    case 1:
                        _a.cart$ = _b.sent();
                        this.populateProducts();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductsComponent.prototype.populateProducts = function () {
        var _this = this;
        this.productService
            .getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (products) {
            _this.products = products;
            return _this.route.queryParamMap;
        }))
            .subscribe(function (params) {
            _this.category = params.get('category');
            _this.applyFilter();
        });
    };
    ProductsComponent.prototype.applyFilter = function () {
        var _this = this;
        this.filteredProducts = (this.category) ?
            this.products.filter(function (p) { return p.category === _this.category; }) :
            this.products;
    };
    ProductsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
        { type: _shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_5__["ShoppingCartService"] }
    ]; };
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'products',
            template: __webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/index.js!./src/app/shopping/components/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/shopping/components/products/products.component.css")]
        })
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/shopping/components/shipping-form/shipping-form.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/shopping/components/shipping-form/shipping-form.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nL2NvbXBvbmVudHMvc2hpcHBpbmctZm9ybS9zaGlwcGluZy1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shopping/components/shipping-form/shipping-form.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shopping/components/shipping-form/shipping-form.component.ts ***!
  \******************************************************************************/
/*! exports provided: ShippingFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingFormComponent", function() { return ShippingFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _shared_services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/order.service */ "./src/app/shared/services/order.service.ts");
/* harmony import */ var _shared_models_order__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/models/order */ "./src/app/shared/models/order.ts");






var ShippingFormComponent = /** @class */ (function () {
    function ShippingFormComponent(router, authService, orderService) {
        this.router = router;
        this.authService = authService;
        this.orderService = orderService;
        this.shipping = {};
    }
    ShippingFormComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.userSubscription = this.authService.user$.subscribe(function (user) { return _this.userId = user.uid; });
                return [2 /*return*/];
            });
        });
    };
    ShippingFormComponent.prototype.ngOnDestroy = function () {
        this.userSubscription.unsubscribe();
    };
    ShippingFormComponent.prototype.placeOrder = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var order, result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        order = new _shared_models_order__WEBPACK_IMPORTED_MODULE_5__["Order"](this.userId, this.shipping, this.cart);
                        return [4 /*yield*/, this.orderService.placeOrder(order)];
                    case 1:
                        result = _a.sent();
                        this.router.navigate(['/order-success/', result.key]);
                        return [2 /*return*/];
                }
            });
        });
    };
    ShippingFormComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _shared_services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("shopping-cart")
    ], ShippingFormComponent.prototype, "cart", void 0);
    ShippingFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'shipping-form',
            template: __webpack_require__(/*! raw-loader!./shipping-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/shopping/components/shipping-form/shipping-form.component.html"),
            styles: [__webpack_require__(/*! ./shipping-form.component.css */ "./src/app/shopping/components/shipping-form/shipping-form.component.css")]
        })
    ], ShippingFormComponent);
    return ShippingFormComponent;
}());



/***/ }),

/***/ "./src/app/shopping/components/shopping-cart-summary/shopping-cart-summary.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/shopping/components/shopping-cart-summary/shopping-cart-summary.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nL2NvbXBvbmVudHMvc2hvcHBpbmctY2FydC1zdW1tYXJ5L3Nob3BwaW5nLWNhcnQtc3VtbWFyeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shopping/components/shopping-cart-summary/shopping-cart-summary.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/shopping/components/shopping-cart-summary/shopping-cart-summary.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ShoppingCartSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartSummaryComponent", function() { return ShoppingCartSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShoppingCartSummaryComponent = /** @class */ (function () {
    function ShoppingCartSummaryComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("shopping-cart")
    ], ShoppingCartSummaryComponent.prototype, "cart", void 0);
    ShoppingCartSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'shopping-cart-summary',
            template: __webpack_require__(/*! raw-loader!./shopping-cart-summary.component.html */ "./node_modules/raw-loader/index.js!./src/app/shopping/components/shopping-cart-summary/shopping-cart-summary.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart-summary.component.css */ "./src/app/shopping/components/shopping-cart-summary/shopping-cart-summary.component.css")]
        })
    ], ShoppingCartSummaryComponent);
    return ShoppingCartSummaryComponent;
}());



/***/ }),

/***/ "./src/app/shopping/components/shopping-cart/shopping-cart.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/shopping/components/shopping-cart/shopping-cart.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".thumbnail {\r\n    width: 80px;\r\n    height: 80px;\r\n    border-radius: 100%;\r\n    background-size: cover;\r\n}\r\n\r\n.card { \r\n    margin-bottom: 80px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcHBpbmcvY29tcG9uZW50cy9zaG9wcGluZy1jYXJ0L3Nob3BwaW5nLWNhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nL2NvbXBvbmVudHMvc2hvcHBpbmctY2FydC9zaG9wcGluZy1jYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGh1bWJuYWlsIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5jYXJkIHsgXHJcbiAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/shopping/components/shopping-cart/shopping-cart.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shopping/components/shopping-cart/shopping-cart.component.ts ***!
  \******************************************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/shopping-cart.service */ "./src/app/shared/services/shopping-cart.service.ts");



var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(cartService) {
        this.cartService = cartService;
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.cartService.getCart()];
                    case 1:
                        _a.subscription = (_b.sent()).subscribe(function (cart) { return _this.cart = cart; });
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ShoppingCartComponent.prototype.clearCart = function () {
        this.cartService.clearCart();
    };
    ShoppingCartComponent.ctorParameters = function () { return [
        { type: _shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartService"] }
    ]; };
    ShoppingCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'shopping-cart',
            template: __webpack_require__(/*! raw-loader!./shopping-cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/shopping/components/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart.component.css */ "./src/app/shopping/components/shopping-cart/shopping-cart.component.css")]
        })
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "./src/app/shopping/shopping.module.ts":
/*!*********************************************!*\
  !*** ./src/app/shopping/shopping.module.ts ***!
  \*********************************************/
/*! exports provided: ShoppingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingModule", function() { return ShoppingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/auth-guard.service */ "./src/app/shared/services/auth-guard.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/check-out/check-out.component */ "./src/app/shopping/components/check-out/check-out.component.ts");
/* harmony import */ var _components_flights_flights_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/flights/flights.component */ "./src/app/shopping/components/flights/flights.component.ts");
/* harmony import */ var _components_my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/my-orders/my-orders.component */ "./src/app/shopping/components/my-orders/my-orders.component.ts");
/* harmony import */ var _components_order_success_order_success_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/order-success/order-success.component */ "./src/app/shopping/components/order-success/order-success.component.ts");
/* harmony import */ var _components_products_product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/products/product-filter/product-filter.component */ "./src/app/shopping/components/products/product-filter/product-filter.component.ts");
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/products/products.component */ "./src/app/shopping/components/products/products.component.ts");
/* harmony import */ var _components_shipping_form_shipping_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/shipping-form/shipping-form.component */ "./src/app/shopping/components/shipping-form/shipping-form.component.ts");
/* harmony import */ var _components_shopping_cart_summary_shopping_cart_summary_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/shopping-cart-summary/shopping-cart-summary.component */ "./src/app/shopping/components/shopping-cart-summary/shopping-cart-summary.component.ts");
/* harmony import */ var _components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/shopping-cart/shopping-cart.component */ "./src/app/shopping/components/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _components_booking_summary_booking_summary_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/booking-summary/booking-summary.component */ "./src/app/shopping/components/booking-summary/booking-summary.component.ts");
/* harmony import */ var _components_my_bookings_my_bookings_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/my-bookings/my-bookings.component */ "./src/app/shopping/components/my-bookings/my-bookings.component.ts");
















var ShoppingModule = /** @class */ (function () {
    function ShoppingModule() {
    }
    ShoppingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_products_products_component__WEBPACK_IMPORTED_MODULE_10__["ProductsComponent"],
                _components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_13__["ShoppingCartComponent"],
                _components_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_5__["CheckOutComponent"],
                _components_order_success_order_success_component__WEBPACK_IMPORTED_MODULE_8__["OrderSuccessComponent"],
                _components_my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_7__["MyOrdersComponent"],
                _components_products_product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_9__["ProductFilterComponent"],
                _components_shopping_cart_summary_shopping_cart_summary_component__WEBPACK_IMPORTED_MODULE_12__["ShoppingCartSummaryComponent"],
                _components_shipping_form_shipping_form_component__WEBPACK_IMPORTED_MODULE_11__["ShippingFormComponent"],
                _components_flights_flights_component__WEBPACK_IMPORTED_MODULE_6__["FlightsComponent"],
                _components_booking_summary_booking_summary_component__WEBPACK_IMPORTED_MODULE_14__["BookingSummaryComponent"],
                _components_my_bookings_my_bookings_component__WEBPACK_IMPORTED_MODULE_15__["MyBookingsComponent"],
            ],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    { path: 'products', component: _components_products_products_component__WEBPACK_IMPORTED_MODULE_10__["ProductsComponent"] },
                    { path: 'shopping-cart', component: _components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_13__["ShoppingCartComponent"] },
                    { path: 'check-out', component: _components_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_5__["CheckOutComponent"], canActivate: [_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
                    { path: 'order-success/:id', component: _components_order_success_order_success_component__WEBPACK_IMPORTED_MODULE_8__["OrderSuccessComponent"], canActivate: [_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
                    { path: 'my/orders', component: _components_my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_7__["MyOrdersComponent"], canActivate: [_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
                    { path: 'flights', component: _components_flights_flights_component__WEBPACK_IMPORTED_MODULE_6__["FlightsComponent"], canActivate: [_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
                    { path: 'flight-summary', component: _components_booking_summary_booking_summary_component__WEBPACK_IMPORTED_MODULE_14__["BookingSummaryComponent"], canActivate: [_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
                    { path: 'my/bookings', component: _components_my_bookings_my_bookings_component__WEBPACK_IMPORTED_MODULE_15__["MyBookingsComponent"], canActivate: [_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
                ])
            ]
        })
    ], ShoppingModule);
    return ShoppingModule;
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
    production: false,
    firebase: {
        apiKey: "AIzaSyDj6W3h82lTt0k7HVSGD1RlF8DnqO6LaDU",
        authDomain: "oshop-2dffa.firebaseapp.com",
        databaseURL: "https://oshop-2dffa.firebaseio.com",
        projectId: "oshop-2dffa",
        storageBucket: "",
        messagingSenderId: "199184580385",
        appId: "1:199184580385:web:648a7e0c9debdf32"
    }
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

module.exports = __webpack_require__(/*! D:\MyFiles\eBooking\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map