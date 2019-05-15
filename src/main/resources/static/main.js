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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _ingredient_create_edit_ingredient_create_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ingredient-create-edit/ingredient-create-edit.component */ "./src/app/ingredient-create-edit/ingredient-create-edit.component.ts");
/* harmony import */ var _meal_create_edit_meal_create_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./meal-create-edit/meal-create-edit.component */ "./src/app/meal-create-edit/meal-create-edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'create-meal', component: _meal_create_edit_meal_create_edit_component__WEBPACK_IMPORTED_MODULE_4__["MealCreateEditComponent"] },
    { path: 'edit-meal/:id', component: _meal_create_edit_meal_create_edit_component__WEBPACK_IMPORTED_MODULE_4__["MealCreateEditComponent"] },
    { path: 'create-ingredient', component: _ingredient_create_edit_ingredient_create_edit_component__WEBPACK_IMPORTED_MODULE_3__["IngredientCreateEditComponent"] },
    { path: 'edit-ingredient/:id', component: _ingredient_create_edit_ingredient_create_edit_component__WEBPACK_IMPORTED_MODULE_3__["IngredientCreateEditComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container-fluid\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'frontend-desktop';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.constants.ts":
/*!**********************************!*\
  !*** ./src/app/app.constants.ts ***!
  \**********************************/
/*! exports provided: MEAL_API_URL, INGREDIENT_API_URL, INGREDIENT_DETAIL_API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEAL_API_URL", function() { return MEAL_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INGREDIENT_API_URL", function() { return INGREDIENT_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INGREDIENT_DETAIL_API_URL", function() { return INGREDIENT_DETAIL_API_URL; });
// const API_URL = environment.apiUrl;
var API_URL = 'https://meal-planner-rest-api.herokuapp.com/api/';
var MEAL_API_URL = API_URL + 'meals/';
var INGREDIENT_API_URL = API_URL + 'ingredients/';
var INGREDIENT_DETAIL_API_URL = API_URL + 'ingredient-details/';


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _ingredient_create_edit_ingredient_create_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ingredient-create-edit/ingredient-create-edit.component */ "./src/app/ingredient-create-edit/ingredient-create-edit.component.ts");
/* harmony import */ var _meal_create_edit_meal_create_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./meal-create-edit/meal-create-edit.component */ "./src/app/meal-create-edit/meal-create-edit.component.ts");
/* harmony import */ var _meal_list_meal_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./meal-list/meal-list.component */ "./src/app/meal-list/meal-list.component.ts");
/* harmony import */ var _ingredient_list_ingredient_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ingredient-list/ingredient-list.component */ "./src/app/ingredient-list/ingredient-list.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _ingredient_create_edit_ingredient_create_edit_component__WEBPACK_IMPORTED_MODULE_6__["IngredientCreateEditComponent"],
                _meal_create_edit_meal_create_edit_component__WEBPACK_IMPORTED_MODULE_7__["MealCreateEditComponent"],
                _meal_list_meal_list_component__WEBPACK_IMPORTED_MODULE_8__["MealListComponent"],
                _ingredient_list_ingredient_list_component__WEBPACK_IMPORTED_MODULE_9__["IngredientListComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-6\">\n    <button class=\"btn btn-success my-3\" routerLink=\"/create-meal\">Create Meal</button>\n    <app-meal-list></app-meal-list>\n  </div>\n  <div class=\"col-6\">\n    <button class=\"btn btn-success my-3\" routerLink=\"/create-ingredient\">Create Ingredient</button>\n    <app-ingredient-list></app-ingredient-list>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/ingredient-create-edit/ingredient-create-edit.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/ingredient-create-edit/ingredient-create-edit.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3 class=\"mb-5\">{{title}} IngredientDetail</h3>\n  <div class=\"input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\">Designation</span>\n    </div>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Tomato\" [(ngModel)]=\"ingredientDetail.designation\">\n  </div>\n  <div class=\"row pt-5\">\n    <div class=\"col-12 text-right\">\n      <button class=\"btn btn-lg btn-primary\" (click)=\"submitForm()\">Submit</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/ingredient-create-edit/ingredient-create-edit.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/ingredient-create-edit/ingredient-create-edit.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ingredient-create-edit/ingredient-create-edit.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/ingredient-create-edit/ingredient-create-edit.component.ts ***!
  \****************************************************************************/
/*! exports provided: IngredientCreateEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientCreateEditComponent", function() { return IngredientCreateEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_ingredient_detail_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/models/ingredient-detail.model */ "./src/app/shared/models/ingredient-detail.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_api_ingredient_detail_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/api/ingredient-detail-api.service */ "./src/app/shared/services/api/ingredient-detail-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IngredientCreateEditComponent = /** @class */ (function () {
    function IngredientCreateEditComponent(ingredientDetailApiService, router, activatedRoute) {
        this.ingredientDetailApiService = ingredientDetailApiService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.title = 'Create ';
    }
    IngredientCreateEditComponent.prototype.ngOnInit = function () {
        this.ingredientDetail = new _shared_models_ingredient_detail_model__WEBPACK_IMPORTED_MODULE_1__["IngredientDetail"]('');
        if (window.history.state.id) {
            this.title = 'Edit ';
            this.ingredientDetail.id = window.history.state.id;
            this.ingredientDetail.designation = window.history.state.designation;
        }
    };
    IngredientCreateEditComponent.prototype.submitForm = function () {
        var _this = this;
        if (this.ingredientDetail.designation !== '') {
            this.ingredientDetailApiService
                .create(this.ingredientDetail).subscribe(function (data) {
                _this.router.navigate(['']);
            });
        }
    };
    IngredientCreateEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ingredient-create-edit',
            template: __webpack_require__(/*! ./ingredient-create-edit.component.html */ "./src/app/ingredient-create-edit/ingredient-create-edit.component.html"),
            styles: [__webpack_require__(/*! ./ingredient-create-edit.component.scss */ "./src/app/ingredient-create-edit/ingredient-create-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_api_ingredient_detail_api_service__WEBPACK_IMPORTED_MODULE_3__["IngredientDetailApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], IngredientCreateEditComponent);
    return IngredientCreateEditComponent;
}());



/***/ }),

/***/ "./src/app/ingredient-list/ingredient-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/ingredient-list/ingredient-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n  <thead>\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Designation</th>\n      <th></th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let ingredientDetail of ingredientDetails\">\n      <td>{{ingredientDetail.id}}</td>\n      <td>{{ingredientDetail.designation}}</td>\n      <td><button class=\"btn btn-primary\" (click)=\"editIngredientDetail(ingredientDetail)\">Edit</button></td>\n      <td><button class=\"btn btn-danger\" (click)=\"deleteIngredientDetail(ingredientDetail)\">Delete</button></td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/ingredient-list/ingredient-list.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/ingredient-list/ingredient-list.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ingredient-list/ingredient-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/ingredient-list/ingredient-list.component.ts ***!
  \**************************************************************/
/*! exports provided: IngredientListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientListComponent", function() { return IngredientListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_api_ingredient_detail_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/api/ingredient-detail-api.service */ "./src/app/shared/services/api/ingredient-detail-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IngredientListComponent = /** @class */ (function () {
    function IngredientListComponent(ingredientDetailApiService, router) {
        this.ingredientDetailApiService = ingredientDetailApiService;
        this.router = router;
        this.ingredientDetails = [];
    }
    IngredientListComponent.prototype.ngOnInit = function () {
        this.getAllIngredientDetailsFromServer();
    };
    IngredientListComponent.prototype.getAllIngredientDetailsFromServer = function () {
        var _this = this;
        this.ingredientDetailApiService.getAll().subscribe(function (data) { return _this.ingredientDetails = data; });
    };
    IngredientListComponent.prototype.editIngredientDetail = function (ingredientDetail) {
        this.router.navigateByUrl('edit-ingredient/' + ingredientDetail.id, { state: ingredientDetail });
    };
    IngredientListComponent.prototype.deleteIngredientDetail = function (ingredientDetail) {
        var _this = this;
        this.ingredientDetailApiService.deleteBy(ingredientDetail.id).subscribe(function (data) { return _this.getAllIngredientDetailsFromServer(); });
    };
    IngredientListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ingredient-list',
            template: __webpack_require__(/*! ./ingredient-list.component.html */ "./src/app/ingredient-list/ingredient-list.component.html"),
            styles: [__webpack_require__(/*! ./ingredient-list.component.scss */ "./src/app/ingredient-list/ingredient-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_api_ingredient_detail_api_service__WEBPACK_IMPORTED_MODULE_1__["IngredientDetailApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], IngredientListComponent);
    return IngredientListComponent;
}());



/***/ }),

/***/ "./src/app/meal-create-edit/meal-create-edit.component.html":
/*!******************************************************************!*\
  !*** ./src/app/meal-create-edit/meal-create-edit.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3 class=\"mb-5\">{{title}} Meal</h3>\n  <div class=\"input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" style=\"width: 140px !important\">Designation</span>\n    </div>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Spaghetti Bolonese\" [(ngModel)]=\"meal.designation\">\n  </div>\n  <div class=\"input-group-prepend mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" style=\"width: 140px !important\">Recipe Url</span>\n    </div>\n    <input type=\"text\" class=\"form-control\" placeholder=\"https://google.com\" [(ngModel)]=\"meal.recipeUrl\">\n  </div>\n\n  <div class=\"input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <label class=\"input-group-text\" for=\"inputGroupSelect01\" style=\"width: 140px !important\">IngredientDetail</label>\n    </div>\n    <select class=\"custom-select mr-3\" id=\"inputGroupSelect01\" [(ngModel)]=\"toAddIngredient.ingredientDetail\">\n      <option [ngValue]=\"ingredientDetail\" *ngFor=\"let ingredientDetail of ingredientDetails\">{{ingredientDetail.designation}}</option>\n    </select>\n\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\" style=\"width: 140px !important\">Quantity</span>\n    </div>\n    <input type=\"number\" class=\"form-control mr-3\" [(ngModel)]=\"toAddIngredient.quantity\">\n\n    <div class=\"input-group-prepend\">\n      <label class=\"input-group-text\" for=\"inputGroupSelect01\" style=\"width: 140px !important\">Ingredient</label>\n    </div>\n    <select class=\"custom-select  mr-3\" id=\"inputGroupSelect01\" [(ngModel)]=\"toAddIngredient.unit\">\n      <option value=\"g\">Gramm</option>\n      <option value=\"kg\">Kilogramm</option>\n      <option value=\"pcs\">Pieces</option>\n      <option value=\"l\">Liter</option>\n    </select>\n\n    <button class=\"btn btn-success btn-sm\" (click)=\"addIngredient()\">Add</button>\n  </div>\n\n  <table class=\"table mt-3\">\n    <thead>\n      <tr>\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">Designation</th>\n        <th scope=\"col\">Quantity</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let ingredient of meal.ingredients; let i = index\">\n        <td>{{i + 1}}</td>\n        <td>{{ingredient.ingredientDetail.designation}}</td>\n        <td>{{ingredient.quantity}} {{ingredient.unit}}</td>\n        <td>\n          <button class=\"btn btn-danger\" (click)=\"removeIngredient(i)\">Löschen</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n\n  <div class=\"row pt-5\">\n    <div class=\"col-12 text-right\">\n      <button class=\"btn btn-lg btn-primary\" (click)=\"submitForm()\">Submit</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/meal-create-edit/meal-create-edit.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/meal-create-edit/meal-create-edit.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/meal-create-edit/meal-create-edit.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/meal-create-edit/meal-create-edit.component.ts ***!
  \****************************************************************/
/*! exports provided: MealCreateEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealCreateEditComponent", function() { return MealCreateEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_meal_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/models/meal.model */ "./src/app/shared/models/meal.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_api_meal_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/api/meal-api.service */ "./src/app/shared/services/api/meal-api.service.ts");
/* harmony import */ var _shared_models_ingredient_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/models/ingredient.model */ "./src/app/shared/models/ingredient.model.ts");
/* harmony import */ var _shared_services_api_ingredient_detail_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/api/ingredient-detail-api.service */ "./src/app/shared/services/api/ingredient-detail-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MealCreateEditComponent = /** @class */ (function () {
    function MealCreateEditComponent(mealApiService, ingredientDetailsApiService, router) {
        this.mealApiService = mealApiService;
        this.ingredientDetailsApiService = ingredientDetailsApiService;
        this.router = router;
        this.title = 'Create ';
        this.ingredientDetails = [];
    }
    MealCreateEditComponent.prototype.ngOnInit = function () {
        this.meal = new _shared_models_meal_model__WEBPACK_IMPORTED_MODULE_1__["Meal"]('', '', []);
        if (window.history.state.id) {
            this.title = 'Edit ';
            this.meal.id = window.history.state.id;
            this.meal.designation = window.history.state.designation;
            this.meal.recipeUrl = window.history.state.recipeUrl;
            this.meal.ingredients = window.history.state.ingredients;
        }
        this.toAddIngredient = new _shared_models_ingredient_model__WEBPACK_IMPORTED_MODULE_4__["Ingredient"](null, 0, 'g');
        this.getAllIngredientDetailsFromServer();
    };
    MealCreateEditComponent.prototype.getAllIngredientDetailsFromServer = function () {
        var _this = this;
        this.ingredientDetailsApiService.getAll().subscribe(function (data) { return _this.ingredientDetails = data; });
    };
    MealCreateEditComponent.prototype.submitForm = function () {
        var _this = this;
        if (this.meal.designation !== '') {
            this.mealApiService
                .create(this.meal).subscribe(function (data) {
                _this.router.navigate(['']);
            });
        }
    };
    MealCreateEditComponent.prototype.addIngredient = function () {
        this.meal.ingredients.push(this.toAddIngredient);
        this.toAddIngredient = new _shared_models_ingredient_model__WEBPACK_IMPORTED_MODULE_4__["Ingredient"](null, 0, 'g');
    };
    MealCreateEditComponent.prototype.removeIngredient = function (index) {
        this.meal.ingredients.splice(index, 1);
    };
    MealCreateEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-meal-create-edit',
            template: __webpack_require__(/*! ./meal-create-edit.component.html */ "./src/app/meal-create-edit/meal-create-edit.component.html"),
            styles: [__webpack_require__(/*! ./meal-create-edit.component.scss */ "./src/app/meal-create-edit/meal-create-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_api_meal_api_service__WEBPACK_IMPORTED_MODULE_3__["MealApiService"],
            _shared_services_api_ingredient_detail_api_service__WEBPACK_IMPORTED_MODULE_5__["IngredientDetailApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MealCreateEditComponent);
    return MealCreateEditComponent;
}());



/***/ }),

/***/ "./src/app/meal-list/meal-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/meal-list/meal-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n  <thead>\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Designation</th>\n      <th scope=\"col\">Url</th>\n      <th scope=\"col\">Ingredients</th>\n      <th></th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let meal of meals\">\n      <td>{{meal.id}}</td>\n      <td>{{meal.designation}}</td>\n      <td><a href=\"{{meal.recipeUrl}}\">{{meal.recipeUrl}}</a></td>\n      <td>{{meal.ingredients.length}}</td>\n      <td><button class=\"btn btn-primary\" (click)=\"editMeal(meal)\">Edit</button></td>\n      <td><button class=\"btn btn-danger\" (click)=\"deleteMeal(meal)\">Delete</button></td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/meal-list/meal-list.component.scss":
/*!****************************************************!*\
  !*** ./src/app/meal-list/meal-list.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/meal-list/meal-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/meal-list/meal-list.component.ts ***!
  \**************************************************/
/*! exports provided: MealListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealListComponent", function() { return MealListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_api_meal_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/api/meal-api.service */ "./src/app/shared/services/api/meal-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MealListComponent = /** @class */ (function () {
    function MealListComponent(mealApiService, router) {
        this.mealApiService = mealApiService;
        this.router = router;
        this.meals = [];
    }
    MealListComponent.prototype.ngOnInit = function () {
        this.getAllMealsFromServer();
    };
    MealListComponent.prototype.getAllMealsFromServer = function () {
        var _this = this;
        this.mealApiService.getAll().subscribe(function (data) { return _this.meals = data; });
    };
    MealListComponent.prototype.editMeal = function (meal) {
        this.router.navigateByUrl('edit-meal/' + meal.id, { state: meal });
    };
    MealListComponent.prototype.deleteMeal = function (meal) {
        var _this = this;
        this.mealApiService.deleteBy(meal.id).subscribe(function (data) { return _this.getAllMealsFromServer(); });
    };
    MealListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-meal-list',
            template: __webpack_require__(/*! ./meal-list.component.html */ "./src/app/meal-list/meal-list.component.html"),
            styles: [__webpack_require__(/*! ./meal-list.component.scss */ "./src/app/meal-list/meal-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_api_meal_api_service__WEBPACK_IMPORTED_MODULE_1__["MealApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MealListComponent);
    return MealListComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-danger mb-5\">\n  <a class=\"navbar-brand\" routerLink=\"/\">Mealplanner</a>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/models/ingredient-detail.model.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/models/ingredient-detail.model.ts ***!
  \**********************************************************/
/*! exports provided: IngredientDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientDetail", function() { return IngredientDetail; });
var IngredientDetail = /** @class */ (function () {
    function IngredientDetail(designation) {
        this.designation = designation;
    }
    return IngredientDetail;
}());



/***/ }),

/***/ "./src/app/shared/models/ingredient.model.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/models/ingredient.model.ts ***!
  \***************************************************/
/*! exports provided: Ingredient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ingredient", function() { return Ingredient; });
var Ingredient = /** @class */ (function () {
    function Ingredient(ingredientDetail, quantity, unit) {
        this.ingredientDetail = ingredientDetail;
        this.quantity = quantity;
        this.unit = unit;
    }
    return Ingredient;
}());



/***/ }),

/***/ "./src/app/shared/models/meal.model.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/models/meal.model.ts ***!
  \*********************************************/
/*! exports provided: Meal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Meal", function() { return Meal; });
var Meal = /** @class */ (function () {
    function Meal(designation, recipeUrl, ingredients) {
        this.designation = designation;
        this.recipeUrl = recipeUrl;
        this.ingredients = ingredients;
    }
    return Meal;
}());



/***/ }),

/***/ "./src/app/shared/services/api/ingredient-detail-api.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/services/api/ingredient-detail-api.service.ts ***!
  \**********************************************************************/
/*! exports provided: IngredientDetailApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientDetailApiService", function() { return IngredientDetailApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IngredientDetailApiService = /** @class */ (function () {
    function IngredientDetailApiService(http) {
        this.http = http;
    }
    IngredientDetailApiService.prototype.getAll = function () {
        return this.http.get(_app_constants__WEBPACK_IMPORTED_MODULE_1__["INGREDIENT_DETAIL_API_URL"]);
    };
    IngredientDetailApiService.prototype.getBy = function (id) {
        return this.http.get(_app_constants__WEBPACK_IMPORTED_MODULE_1__["INGREDIENT_DETAIL_API_URL"] + id);
    };
    IngredientDetailApiService.prototype.create = function (ingredientDetail) {
        return this.http.post(_app_constants__WEBPACK_IMPORTED_MODULE_1__["INGREDIENT_DETAIL_API_URL"], JSON.stringify(ingredientDetail), {
            headers: { 'Content-Type': 'application/json' }
        });
    };
    IngredientDetailApiService.prototype.update = function (ingredientDetail) {
        return this.http.put(_app_constants__WEBPACK_IMPORTED_MODULE_1__["INGREDIENT_DETAIL_API_URL"] + ingredientDetail.id, JSON.stringify(ingredientDetail), {
            headers: { 'Content-Type': 'application/json' }
        });
    };
    IngredientDetailApiService.prototype.deleteBy = function (id) {
        return this.http.delete(_app_constants__WEBPACK_IMPORTED_MODULE_1__["INGREDIENT_DETAIL_API_URL"] + id);
    };
    IngredientDetailApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], IngredientDetailApiService);
    return IngredientDetailApiService;
}());



/***/ }),

/***/ "./src/app/shared/services/api/meal-api.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/api/meal-api.service.ts ***!
  \*********************************************************/
/*! exports provided: MealApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealApiService", function() { return MealApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MealApiService = /** @class */ (function () {
    function MealApiService(http) {
        this.http = http;
    }
    MealApiService.prototype.getAll = function () {
        return this.http.get(src_app_app_constants__WEBPACK_IMPORTED_MODULE_1__["MEAL_API_URL"]);
    };
    MealApiService.prototype.getBy = function (id) {
        return this.http.get(src_app_app_constants__WEBPACK_IMPORTED_MODULE_1__["MEAL_API_URL"] + id);
    };
    MealApiService.prototype.create = function (meal) {
        return this.http.post(src_app_app_constants__WEBPACK_IMPORTED_MODULE_1__["MEAL_API_URL"], JSON.stringify(meal), {
            headers: { 'Content-Type': 'application/json' }
        });
    };
    MealApiService.prototype.update = function (meal) {
        return this.http.put(src_app_app_constants__WEBPACK_IMPORTED_MODULE_1__["MEAL_API_URL"] + meal.id, JSON.stringify(meal), {
            headers: { 'Content-Type': 'application/json' }
        });
    };
    MealApiService.prototype.deleteBy = function (id) {
        return this.http.delete(src_app_app_constants__WEBPACK_IMPORTED_MODULE_1__["MEAL_API_URL"] + id);
    };
    MealApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MealApiService);
    return MealApiService;
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
var environment = {
    production: false,
    apiUrl: 'http://localhost:8080/api/'
};


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

module.exports = __webpack_require__(/*! C:\Users\rogg\Documents\Meine Projekte\home-automation\mealplanner\mealplanner\src\main\frontend-desktop\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map