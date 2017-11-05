webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "app-root",
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_infinite_scroll__ = __webpack_require__("../../../../ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_card_card_component__ = __webpack_require__("../../../../../src/app/components/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_post_details_post_details_component__ = __webpack_require__("../../../../../src/app/components/post-details/post-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_404_page_not_found_component__ = __webpack_require__("../../../../../src/app/components/404-page/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_admin_admin_component__ = __webpack_require__("../../../../../src/app/components/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_gallery_post_gallery_post_component__ = __webpack_require__("../../../../../src/app/components/gallery-post/gallery-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_login_form_login_component__ = __webpack_require__("../../../../../src/app/components/login-form/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_media_form_media_form_component__ = __webpack_require__("../../../../../src/app/components/media-form/media-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_mousewheel_mousewheel_component__ = __webpack_require__("../../../../../src/app/components/mousewheel/mousewheel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_post_form_post_form_component__ = __webpack_require__("../../../../../src/app/components/post-form/post-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pipes_keep_html_pipe__ = __webpack_require__("../../../../../src/app/pipes/keep-html.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var appRoutes = [
    { path: "login", component: __WEBPACK_IMPORTED_MODULE_19__components_login_form_login_component__["a" /* LoginComponent */] },
    { path: "admin", component: __WEBPACK_IMPORTED_MODULE_17__components_admin_admin_component__["a" /* AdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__services_auth_guard_service__["a" /* AuthGuard */]] },
    // re-add canActivate: [AuthGuard] to admin path
    { path: "", component: __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */] },
    // { path: 'home', component: HomeComponent},
    { path: "post/:customURL", component: __WEBPACK_IMPORTED_MODULE_12__components_post_details_post_details_component__["a" /* PostDetailsComponent */] },
    { path: "**", component: __WEBPACK_IMPORTED_MODULE_16__components_404_page_not_found_component__["a" /* PageNotFoundComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_post_details_post_details_component__["a" /* PostDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_card_card_component__["a" /* CardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_mousewheel_mousewheel_component__["a" /* MousewheelComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_post_form_post_form_component__["a" /* PostFormComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_admin_admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_media_form_media_form_component__["a" /* MediaFormComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_login_form_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_404_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_gallery_post_gallery_post_component__["a" /* GalleryPostComponent */],
            __WEBPACK_IMPORTED_MODULE_23__pipes_keep_html_pipe__["a" /* EscapeHtmlPipe */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: true }),
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatRadioModule */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_infinite_scroll__["a" /* InfiniteScrollModule */],
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_22__components_post_form_post_form_component__["a" /* PostFormComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_media_form_media_form_component__["a" /* MediaFormComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_15__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_13__services_auth_guard_service__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/404-page/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".not-found{\r\n    width: 100%;    \r\n}\r\n.contain-not-found{\r\n    margin: 100px auto;\r\n    width: 320px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/404-page/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class='not-found'>\r\n    <div class='contain-not-found'>\r\n        <h1>DIADOZ presents...</h1>\r\n        <p>Wait this is the wrong page...</p>\r\n        <p><i>Not until we are lost do we begin to understand ourselves.     \r\n                \r\n               <br> - Henry David Thoreau</i></p>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/404-page/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "app-not-found",
        template: __webpack_require__("../../../../../src/app/components/404-page/not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/404-page/not-found.component.css")],
    })
], PageNotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*@import '~@angular/material/prebuilt-themes/deeppurple-amber.css';*/\r\n\r\n/*!* Rules for sizing the icon. *!*/\r\n/*.material-icons.md-18 { font-size: 18px; }*/\r\n/*.material-icons.md-24 { font-size: 24px; }*/\r\n/*.material-icons.md-36 { font-size: 36px; }*/\r\n/*.material-icons.md-48 { font-size: 48px; }*/\r\n\r\n/*!* Rules for using icons as black on a light background. *!*/\r\n/*.material-icons.md-dark { color: rgba(0, 0, 0, 0.54); }*/\r\n/*.material-icons.md-dark.md-inactive { color: rgba(0, 0, 0, 0.26); }*/\r\n\r\n/*!* Rules for using icons as white on a dark background. *!*/\r\n/*.material-icons.md-light { color: rgba(255, 255, 255, 1); }*/\r\n/*.material-icons.md-light.md-inactive { color: rgba(255, 255, 255, 0.3); }*/\r\n\r\n/*mat-sidenav {*/\r\n    /*width: 150px;*/\r\n/*}*/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<mat-sidenav-container>\r\n  <mat-sidenav #sidenav mode=\"side\" opened=\"true\">\r\n    <mat-nav-list>\r\n        <mat-list-item (click)='logOut()'> Log Out </mat-list-item>\r\n        <!-- <mat-divider></mat-divider>\r\n        <mat-list-item routerLink=\"/crisis-center\" routerLinkActive=\"active\"> Media </mat-list-item>\r\n        <mat-divider></mat-divider>\r\n        <mat-list-item routerLink=\"/crisis-center\" routerLinkActive=\"active\"> Entity </mat-list-item> -->\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n\r\n  <mat-button-toggle (click)=\"sidenav.toggle()\">\r\n      <i class=\"material-icons md-18 md-dark\">menu</i>\r\n  </mat-button-toggle>\r\n  <div>\r\n    <post-form></post-form>\r\n  </div>\r\n\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = (function () {
    function AdminComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.loggedIn = false;
    }
    AdminComponent.prototype.logOut = function () {
        this.authService.logout();
        if (!this.authService.isLoggedIn) {
            this.router.navigate(["/login"]);
        }
        // if (!this.authService.isLoggedIn) {
        //     // Get the redirect URL from our auth service
        //     // If no redirect has been set, use the default
        //     let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
        //     // Redirect the user
        //     this.router.navigate([redirect], { queryParams:{ user: userHandle } });
        //     // }
        // });
    };
    AdminComponent.prototype.mediaForm = function () {
        // this.showPost = false;
        // this.showMedia = true;
    };
    AdminComponent.prototype.entityForm = function () {
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "admin",
        template: __webpack_require__("../../../../../src/app/components/admin/admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/admin.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AdminComponent);

var _a, _b;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/card/card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Extra small devices (phones, less than 768px) */\r\n/* No media query since this is the default*/\r\n\r\n.art-card{\r\n  margin: 0px auto;\r\n  max-width: 600px;\r\n  min-height: 300px;\r\n  background-color: #fdfdfd;\r\n  box-shadow: .5px 1px 9px 1px #c7c7c7;\r\n}\r\n\r\n.art-card-containter{\r\n  margin: 0 auto;\r\n  padding: 20px;\r\n}\r\n\r\n.art-card-header{\r\n  font-family: \"Trebuchet MS\", Helvetica, sans-serif;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-size: 35px;\r\n  line-height: 40px;\r\n  font-weight: bolder;\r\n  margin: 0;\r\n  padding: 0px 0px 10px 0px;\r\n}\r\n\r\n.art-card-header .h1{\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\np.card-text-body {\r\n  font-family: \"Trebuchet MS\", Helvetica, sans-serif;\r\n  text-shadow: 0px 0px .01px gray;\r\n  word-spacing: .3px;\r\n  font-size: 15px;\r\n  line-height: 24px;\r\n  margin: 0;\r\n}\r\n\r\n/* Small devices (tablets, 768px and up) */\r\n@media (min-width: 768px) {\r\n\r\n\r\n}\r\n\r\n/* Medium devices (desktops, 992px and up) */\r\n@media (min-width: 992px) {\r\n\r\n  .art-card{\r\n    margin: 0px auto;\r\n    max-width: 600px;\r\n    min-height: 300px;\r\n    background-color: #fdfdfd;\r\n    box-shadow: .5px 1px 9px 1px #c7c7c7;\r\n  }\r\n\r\n  .art-card-containter{\r\n    margin: 0 auto;\r\n    padding: 20px;\r\n  }\r\n\r\n  .art-card-header{\r\n    font-family: \"Trebuchet MS\", Helvetica, sans-serif;\r\n    -webkit-font-smoothing: antialiased;\r\n    font-size: 35px;\r\n    line-height: 40px;\r\n    font-weight: bolder;\r\n    margin: 0;\r\n    padding: 0px 0px 10px 0px;\r\n  }\r\n\r\n  .art-card-header .h1{\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n\r\n  p.card-text-body {\r\n    font-family: \"Trebuchet MS\", Helvetica, sans-serif;\r\n    text-shadow: 0px 0px .01px gray;\r\n    word-spacing: .3px;\r\n    font-size: 15px;\r\n    line-height: 24px;\r\n    margin: 0;\r\n  }\r\n}\r\n\r\n/* Large devices (large desktops, 1200px and up) */\r\n@media (min-width: 1200px) {\r\n\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"art-card\">\r\n  <div class=\"art-card-containter\">\r\n    <div class=\"art-card-header\">\r\n      <p class=\"h1\">{{card.primaryContributor}}</p>\r\n      <p class=\"h1\"><em>{{card.title}}</em>, 2017</p>\r\n      <p class=\"h1\">{{card.primaryType}}</p>\r\n    </div>\r\n    <p class=\"card-text-body\">{{card.summary}}</p>\r\n    <!--<div class=\"support\">{{card.support}}</div>-->\r\n    <!--<div *ngFor=\"let artist of post.body.contributingArtists\" class=\"contributing-artists\">-->\r\n      <!--<p>{{artist}}</p>-->\r\n    <!--</div>-->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardComponent = (function () {
    function CardComponent() {
    }
    CardComponent.prototype.ngOnInit = function () {
        var data = this.card;
    };
    return CardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])("card"),
    __metadata("design:type", Object)
], CardComponent.prototype, "card", void 0);
CardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "app-card",
        template: __webpack_require__("../../../../../src/app/components/card/card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/card/card.component.css")],
    }),
    __metadata("design:paramtypes", [])
], CardComponent);

//# sourceMappingURL=card.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/gallery-post/gallery-post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/gallery-post/gallery-post.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  gallery-post works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/gallery-post/gallery-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalleryPostComponent = (function () {
    function GalleryPostComponent() {
    }
    GalleryPostComponent.prototype.ngOnInit = function () {
    };
    return GalleryPostComponent;
}());
GalleryPostComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "app-gallery-post",
        template: __webpack_require__("../../../../../src/app/components/gallery-post/gallery-post.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/gallery-post/gallery-post.component.css")],
    }),
    __metadata("design:paramtypes", [])
], GalleryPostComponent);

//# sourceMappingURL=gallery-post.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Extra small devices (phones, less than 768px) */\r\n/* No media query since this is the default*/\r\n/*.nav-wrapper{*/\r\n  /*position: fixed;*/\r\n  /*top: 0;*/\r\n/*}*/\r\n\r\n.diadoz-navbar{\r\n  position: relative;\r\n  width: 100vw;\r\n  height: 46px;\r\n  /*background-color: #ff1312;*/\r\n  /*margin-top: 10px;*/\r\n  display: block;\r\n  overflow: hidden;\r\n\r\n}\r\n\r\n.diadoz-navbar .diadoz-nav {\r\n  text-align: center;\r\n  /*background-color: red;*/\r\n\r\n}\r\n.diadoz-nav{\r\n\r\n  margin: auto;\r\n  padding: 0;\r\n\r\n}\r\n\r\n.diadoz-nav > ul{\r\n  height: 30px;\r\n}\r\n\r\n.diadoz-nav > li{\r\n  display: inline-block;\r\n  float: none;\r\n  vertical-align: middle;\r\n  height: 46px;\r\n  /*line-height:35px;*/\r\n\r\n\r\n}\r\n\r\n.diadoz-nav > li > a{\r\n  /*padding-left: 30px;*/\r\n  /*padding-right: 30px;*/\r\n  /*margin: auto;*/\r\n}\r\n\r\n/*.logo-container{*/\r\n  /*width: auto;*/\r\n  /*height: 8vh;*/\r\n  /*margin-top: auto !important;*/\r\n  /*margin-bottom: auto !important;*/\r\n\r\n  /*!*background-color: yellow;*!*/\r\n  /*!*position: absolute;*!*/\r\n\r\n/*}*/\r\n\r\n.logo-container img {\r\n  /*width: 100%;*/\r\n  display: inline-block;\r\n  height: 30px;\r\n  margin-top: 9px;\r\n  margin-bottom: auto;\r\n\r\n  /*background-color: red;*/\r\n\r\n}\r\n\r\n\r\n@media screen and (orientation: portrait) {\r\n\r\n  .diadoz-navbar{\r\n    background-color: white;\r\n    position: fixed;\r\n    z-index: 1;\r\n\r\n\r\n  }\r\n  .header-filler{\r\n    position: relative;\r\n    height: 46px;\r\n  }\r\n\r\n}\r\n\r\n/* Small devices (tablets, 768px and up) */\r\n@media (min-width: 768px) {\r\n\r\n\r\n}\r\n\r\n/* Medium devices (desktops, 992px and up) */\r\n@media (min-width: 992px) {\r\n\r\n}\r\n\r\n@media screen and (orientation: landscape){\r\n\r\n  .header-filler{\r\n    display: none;\r\n    height: 0;\r\n\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-wrapper\">\r\n  <div class=\"diadoz-navbar\">\r\n    <div class=\"logo-container\">\r\n      <ul class=\"diadoz-nav\">\r\n        <!--<li><a href=\"#\">YOUTUBE</a></li>-->\r\n        <!--<li><a href=\"#\">INSTAGRAM</a></li>-->\r\n        <!--<li><a href=\"#\">SHOP</a></li>-->\r\n        <li><a href=\"\"><img src=\"../../../assets/img/logo/diadoz-black-logo-2017.svg\" /></a></li>\r\n        <!--<li><a href=\"#\">EMAIL</a></li>-->\r\n        <!--<li><a href=\"#\">TWITTER</a></li>-->\r\n        <!--<li><a href=\"#\">SOUNDCLOUD</a></li>-->\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"header-filler\"></div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "app-header",
        template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/header/header.component.css")],
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Extra small devices (phones, less than 768px) */\r\n/* No media query since this is the default*/\r\n\r\n\r\n/*:root{}*/\r\na {\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n\r\n.logo-container {\r\n  position: relative;\r\n}\r\n\r\n.footer-banner {\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 9%;\r\n  bottom: 0;\r\n  overflow: hidden;\r\n  /*background-color: red;*/\r\n}\r\n\r\n.footer-banner img {\r\n  max-width: 100px;\r\n  /*width: 10%;*/\r\n  position: absolute;\r\n  /*left: 0;*/\r\n\r\n\r\n  right: 30px;\r\n  top: 0;\r\n  bottom: 0;\r\n  margin: 0 auto;\r\n\r\n\r\n  /*opacity: 0.3;*/\r\n  /*transition: opacity 0.5s;*/\r\n  /*transition-timing-function: ease;*/\r\n}\r\n\r\n.footer-banner img:hover {\r\n  opacity: 1.0;\r\n  transition: opacity 0.5s;\r\n  transition-timing-function: linear;\r\n}\r\n\r\n.tile-text {\r\n  /*from main.css BlockInfo*/\r\n  /*font-family: Harriet, \"Georgia\", serif;*/\r\n  /*width: 100%;*/\r\n  display: inline-block;\r\n  font-family: 'Montserrat', sans-serif;\r\n  font-size: 250%;\r\n  font-weight: bolder;\r\n  -webkit-font-smoothing: antialiased;\r\n  margin-top: 2%;\r\n  margin-left: 2%;\r\n  transition: text-shadow .5s;\r\n  transition-timing-function: ease;\r\n  text-transform: uppercase;\r\n\r\n  text-shadow: 0 0 2px rgba(255, 255, 255, 0.03),\r\n  0 0 2px rgba(255, 255, 255, 0.03),\r\n  0 0 2px rgba(255, 255, 255, 0.62),\r\n  0 0 2px rgba(255, 255, 255, 0.1),\r\n  0 0 2px rgba(255, 255, 255, 0.1),\r\n  0 0 2px rgba(255, 255, 255, 0.1),\r\n  0 0 2px rgba(255, 255, 255, 0.1),\r\n  0 0 2px rgba(255, 255, 255, 0.1);\r\n}\r\n\r\n.tile-text:hover {\r\n  text-shadow: none;\r\n}\r\n\r\n.tile-overlay {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  top: 0;\r\n  background-color: rgba(0, 0, 0, 0.35);\r\n  transition: background-color 0.5s;\r\n  transition-timing-function: linear;\r\n  margin: 0 auto;\r\n  padding: 0;\r\n  width: 100vw;\r\n  display: block;\r\n  /*color: yellow;*/\r\n}\r\n\r\n.tile-overlay:hover {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  background-color: rgba(0, 0, 0, 0.12);\r\n  width: 100%;\r\n}\r\n\r\n\r\n@media screen and (orientation: portrait) {\r\n\r\n  html {\r\n    height: 100%;\r\n    width: 100%;\r\n    margin: 0;\r\n    overflow-x: hidden;\r\n  }\r\n\r\n  body {\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-size: 62.5%;\r\n    background-color: red;\r\n  }\r\n\r\n\r\n\r\n  .body-container {\r\n    position: relative;\r\n    height: 100%;\r\n    margin: 0 auto;\r\n    padding: 0px;\r\n    background-color: deepskyblue;\r\n  }\r\n\r\n  .tile-container {\r\n    width: 100%;\r\n\r\n  }\r\n\r\n  .tile { /*this is the this that is fucking up the resize*/\r\n    width: 100%;\r\n    height: auto;\r\n    margin: 0;\r\n    position: relative;\r\n  }\r\n\r\n  .tile-photo {\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    /*margin: 0;*/\r\n  }\r\n\r\n}\r\n\r\n/* Small devices (tablets, 768px and up) */\r\n@media (min-width: 768px) {\r\n\r\n\r\n}\r\n\r\n/* Medium devices (desktops, 992px and up) */\r\n@media (min-width: 992px) {\r\n\r\n}\r\n\r\n/* Large devices (large desktops, 1200px and up) */\r\n@media (min-width: 1200px) {\r\n\r\n\r\n}\r\n\r\n@media screen and (orientation: landscape){\r\n\r\n  html {\r\n    overflow-y: hidden;\r\n  }\r\n\r\n  body{\r\n    height: 100vh;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .body-container {\r\n    /*Positionings*/\r\n    position: relative;\r\n\r\n    /*Spacing*/\r\n    margin: 0 auto;\r\n    display: block;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    /*padding: 0px;*/\r\n\r\n    /*Sizing*/\r\n    height: calc(100vh - 46px);\r\n\r\n    background-color: #649d71;\r\n  }\r\n\r\n  .tile-container {\r\n    /*Positioning*/\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: auto;\r\n    bottom: 0;\r\n    float: left;\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n\r\n    /*Spacing*/\r\n    margin: auto;\r\n    clear: both;\r\n\r\n    /*Sizing*/\r\n    min-width: 100px;\r\n    height: calc(100vh - 46px);\r\n\r\n    /*Color*/\r\n    /*background-color: darkgreen;*/\r\n  }\r\n\r\n  .tile {\r\n    /*Positioning*/\r\n    float: left;\r\n    height: calc(100vh - 46px);\r\n    position: relative;\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n\r\n    /*Spacing*/\r\n    margin: auto;\r\n    overflow-y: hidden;\r\n\r\n    /*Sizing*/\r\n    /*width: 100%;*/\r\n\r\n\r\n\r\n\r\n\r\n  }\r\n\r\n  .tile-photo {\r\n    height: 100%;\r\n  }\r\n\r\n  .tile-overlay {\r\n    width: 100%;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"body-container\"\r\n  infiniteScroll\r\n  [scrollWindow]=\"false\"\r\n  [horizontal]=\"true\"\r\n  [alwaysCallback]=\"true\"\r\n  (scrolled)=\"onScroll()\">\r\n  <!-- <div class=\"tile-container\"> -->\r\n    <!-- ngx -->\r\n    <div class=\"tile-container\">\r\n      <div class=\"tile\" *ngFor=\"let post of postArray\" id=\"tile{{post._id}}\">\r\n        <header class=\"tile-overlay\">\r\n          <p class=\"tile-text\">\r\n            <a [routerLink]=\"['/post', post.customURL]\" routerLinkActive=\"active\">\r\n              <strong>{{post.headline}}</strong>\r\n              <br>{{post.subHeadline}}\r\n            </a>\r\n          </p>\r\n        </header>\r\n        <img class=\"tile-photo\" src=\"/assets{{post.featuredImage}}\" /><!--{{post.primaryImage.filePath}} /assets/1.jpg-->\r\n      </div>\r\n    <!-- </div> -->\r\n  </div>\r\n</div>\r\n<!--<div class=\"footer-banner\">-->\r\n<!--<div class=\"logo-container\">-->\r\n  <!--<a routerLink=\"/home\" routerLinkActive=\"active\">-->\r\n    <!--<img src=\"{{logo}}\" />-->\r\n  <!--</a>-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n\r\n\r\n\r\n\r\n<!--<script type='text/javascript' src='../../../../../../public/main/js/jquery.mousewheel.min.js'></script>-->\r\n<!--<script src=\"../../../../../main/js/wheel-indicator.js\"></script>-->\r\n<!--<script src=\"../../../../../main/js/Horizontal-Scroll.js\"></script>-->\r\n<!--<script src=\"../js/Image-Resize.js\"></script>-->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(dataService) {
        this.dataService = dataService;
        // posts: Posts[];
        this.logo = "./assets/img/logo/diadoz-white-logo-2017.svg";
        // posts: any = [];
        this.postArray = [];
        this.scrollDistance = 2;
        this.throttle = 300;
        this.pageNumber = 1;
        this.addPosts(this.pageNumber);
    }
    HomeComponent.prototype.addPosts = function (page) {
        var _this = this;
        this.dataService.getPosts(page).subscribe(function (posts) {
            console.log(posts);
            _this.postArray = _this.postArray.concat(posts);
            _this.pageNumber++;
        });
    };
    HomeComponent.prototype.onScroll = function () {
        this.addPosts(this.pageNumber);
    };
    HomeComponent.prototype.ngOnInit = function () {
        // this.dataService.getPosts(##).subscribe((posts) => {
        //   console.log(posts);
        //   this.posts = posts;
        // });
        // Find matches
        var mql = window.matchMedia("(orientation: landscape)");
        // Add a media query change listener
        mql.addListener(function (m) {
            if (m.matches) {
                // alert("Changed to landscape");
                $(".body-container").mousewheel(function (event, delta) {
                    event.preventDefault();
                    // variable to check if MAC
                    var isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
                    if (isMac) {
                        this.scrollLeft -= (delta * .9);
                    }
                    else {
                        this.scrollLeft -= (delta * 150);
                    }
                });
            }
            else {
                // alert("Changed to portrait");
                $(".body-container").unbind();
            }
        });
        $(window).on("deviceorientation", function (event) {
            if (window.matchMedia("(orientation: portrait)").matches) {
                // alert("Device is in portrait mode");
                $(".body-container").unbind();
            }
            if (window.matchMedia("(orientation: landscape)").matches) {
                // alert("Device is in landscape mode");
                $(".body-container").mousewheel(function (event, delta) {
                    event.preventDefault();
                    // variable to check if MAC
                    var isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
                    if (isMac) {
                        this.scrollLeft -= (delta * .9);
                    }
                    else {
                        this.scrollLeft -= (delta * 150);
                    }
                });
            }
        });
        // image fit code
        //   .container {
        //       background-color: red;
        //       position: relative;
        //       width: 100%;
        //
        //       padding-top: 62.5%; /* 8:5 Aspect Ratio */
        //     }
        //
        // #im {
        //       position: absolute;
        //       top: 0;
        //       left: 0;
        //       right: 0;
        //       bottom: 0;
        //       background-image: url("/img/path");
        //       background-repeat: no-repeat;
        //       background-size: cover;
        //     }
        //     </style>
        //     </head>
        //     <body>
        //
        //     <h2>Maintain Aspect Ratio 8:5</h2>
        //     <p>Resize the window to see the effect.</p>
        //
        //     <div class="container">
        //     <div id="im"></div>
        //       </div>
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "app-home",
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login-form/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div>\r\n        <h1>Login</h1>\r\n        <form (ngSubmit)=\"onSubmit()\" #login=\"ngForm\">\r\n            <div class=\"form-group\">\r\n                <label for=\"userName\">Username</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"userName\" required\r\n                [(ngModel)] = 'model.userName' name='userName' #userName='ngModel'\r\n                #spy>\r\n                <div [hidden]=\"userName.valid || userName.pristine\"\r\n                class=\"alert alert-danger\">\r\n                    Username is required\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"password\">Password</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"password\" required\r\n                [(ngModel)] = 'model.password' name='password' #password='ngModel'\r\n                #spy>\r\n                <div [hidden]=\"password.valid || password.pristine\"\r\n                class=\"alert alert-danger\">\r\n                    password is required\r\n                </div>\r\n            </div>\r\n\r\n            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!login.form.valid\">Submit</button>\r\n        </form>\r\n    </div>\r\n</div>  "

/***/ }),

/***/ "../../../../../src/app/components/login-form/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.submitted = false;
        this.model = {
            userName: "",
            password: "",
        };
    }
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService.login(this.model).subscribe(function (user) {
            if (_this.authService.isLoggedIn) {
                // Get the redirect URL from our auth service
                // If no redirect has been set, use the default
                var redirect = _this.authService.redirectUrl ? _this.authService.redirectUrl : "/admin";
                var userHandle = user.firstName.trim() + " " + user.lastName.trim();
                // Redirect the user
                _this.router.navigate([redirect], { queryParams: { user: userHandle } });
            }
        });
        // this.submitted = true;
        // this.dataService.logIn(this.model).subscribe((model) => {
        //     console.log(model);
        //     if(model.loggedIn){
        //         this.router.navigate(['/post']);
        //     }
        // });
    };
    Object.defineProperty(LoginComponent.prototype, "diagnostic", {
        //TODO: Remove this when we're done
        get: function () {
            return JSON.stringify(this.model);
        },
        enumerable: true,
        configurable: true
    });
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "login",
        template: __webpack_require__("../../../../../src/app/components/login-form/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login-form/login.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login-form/login.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/media-form/media-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div [hidden]=\"submitted\">\r\n        <h1>Media Form</h1>\r\n        <form (ngSubmit)=\"onSubmit()\" #mediaForm=\"ngForm\">\r\n            <!-- TODO: Remove once implementation done -->\r\n            {{diagnostic}}\r\n            <div class=\"form-group\">\r\n                <label for=\"title\">Title</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"title\" required\r\n                [(ngModel)] = 'model.title' name='title' #title='ngModel'\r\n                #spy>\r\n                <div [hidden]=\"title.valid || title.pristine\"\r\n                class=\"alert alert-danger\">\r\n                    Title is required\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"primaryArtist\">Primary Artist</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"primaryArtist\" required\r\n                [(ngModel)] = 'model.primaryArtist' name='primaryArtist' #primaryArtist='ngModel'\r\n                #spy>\r\n                <div [hidden]=\"primaryArtist.valid || primaryArtist.pristine\"\r\n                class=\"alert alert-danger\">\r\n                    Primary Artist is required\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"primaryType\">Primary Type</label>\r\n                <select class=\"form-control\" id=\"primaryType\" required\r\n                [(ngModel)]='model.primaryType' name='primaryType'>\r\n                    <option *ngFor=\"let type of primaryType\" [value]=\"type\">{{type}}</option>\r\n                </select>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label  for=\"mediaTypes\">Media Types</label>\r\n                <input type=\"text\" id=\"mediaTypes\" [(ngModel)] = 'currentType' name='currentType'>\r\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"addMediaType()\">Add</button>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"body\">Post Body</label>\r\n                <textarea id='mediaTiny'\r\n                [(ngModel)]='model.body' name='body'></textarea>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"filePath\">File Path</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"filePath\"\r\n                [(ngModel)] = 'model.filePath' name='filePath' #filePath='ngModel'\r\n                #spy>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"url\">URL</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"url\"\r\n                [(ngModel)] = 'model.url' name='url' #url='ngModel'\r\n                #spy>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"embed\">Embed</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"embed\"\r\n                [(ngModel)] = 'model.embed' name='embed' #embed='ngModel'\r\n                #spy>\r\n            </div>\r\n            \r\n\r\n            <button *ngIf='showMain' type=\"button\" class=\"btn btn-default\" (click)=\"newMedia(); mediaForm.reset()\">Reset</button>\r\n            <button *ngIf='showMain' type=\"submit\" class=\"btn btn-success\" [disabled]=\"!mediaForm.form.valid\">Submit</button>\r\n            <button *ngIf='!showMain' type=\"submit\" class=\"btn btn-success\" [disabled]=\"!mediaForm.form.valid\" (click)=\"addMedia()\">Submit</button>\r\n\r\n        </form>\r\n    </div>\r\n    <!-- <div [hidden]=\"!submitted\">\r\n        <h2>You submitted the following:</h2>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Headline</div>\r\n            <div class=\"col-xs-9  pull-left\">{{ model.headline }}</div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Sub-Headline</div>\r\n            <div class=\"col-xs-9 pull-left\">{{ model.subHeadline }}</div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Post Type</div>\r\n            <div class=\"col-xs-9 pull-left\">{{ model.postType }}</div>\r\n        </div>\r\n        <br>\r\n        <button class=\"btn btn-primary\" (click)=\"submitted=false\">Edit</button>\r\n    </div> -->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/media-form/media-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__media__ = __webpack_require__("../../../../../src/app/components/media-form/media.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MediaFormComponent = (function () {
    function MediaFormComponent() {
        this.primaryType = ["Video", "Photography", "Audio"];
        this.bodyArea = "";
        this.currentType = "";
        this.todayDate = new Date();
        this.model = new __WEBPACK_IMPORTED_MODULE_1__media__["a" /* Media */]("", "", "", [], "", "", "", "");
        // title, primaryArtist, primaryType, mediaTypes, body, filePath, url, embed
        this.submitted = false;
        this.showMain = true;
    }
    MediaFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    MediaFormComponent.prototype.newMedia = function () {
        tinymce.activeEditor.setContent("");
        this.model = new __WEBPACK_IMPORTED_MODULE_1__media__["a" /* Media */]("", "", "", [], "", "", "", "");
    };
    MediaFormComponent.prototype.ngAfterViewInit = function () {
        tinymce.init({
            selector: "#mediaTiny",
            plugins: ["link", "paste", "table"],
            skin_url: "assets/skins/lightgray",
            branding: false,
        });
    };
    MediaFormComponent.prototype.addMediaType = function () {
        this.model.mediaTypes.push(this.currentType);
        this.currentType = "";
    };
    MediaFormComponent.prototype.addMedia = function () {
    };
    Object.defineProperty(MediaFormComponent.prototype, "diagnostic", {
        //TODO: Remove this when we're done
        get: function () {
            return JSON.stringify(this.model);
        },
        enumerable: true,
        configurable: true
    });
    return MediaFormComponent;
}());
MediaFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "media-form",
        template: __webpack_require__("../../../../../src/app/components/media-form/media-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/media-form/media.css")],
    })
], MediaFormComponent);

//# sourceMappingURL=media-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/media-form/media.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/media-form/media.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Media; });
var Media = (function () {
    function Media(title, primaryArtist, //id
        primaryType, mediaTypes, body, filePath, url, embed) {
        this.title = title;
        this.primaryArtist = primaryArtist;
        this.primaryType = primaryType;
        this.mediaTypes = mediaTypes;
        this.body = body;
        this.filePath = filePath;
        this.url = url;
        this.embed = embed;
    }
    return Media;
}());

//# sourceMappingURL=media.js.map

/***/ }),

/***/ "../../../../../src/app/components/mousewheel/mousewheel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/mousewheel/mousewheel.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  mousewheel works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/mousewheel/mousewheel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MousewheelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MousewheelComponent = (function () {
    function MousewheelComponent() {
    }
    MousewheelComponent.prototype.ngOnInit = function () {
    };
    return MousewheelComponent;
}());
MousewheelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "app-mousewheel",
        template: __webpack_require__("../../../../../src/app/components/mousewheel/mousewheel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/mousewheel/mousewheel.component.css")],
    }),
    __metadata("design:paramtypes", [])
], MousewheelComponent);

//# sourceMappingURL=mousewheel.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/post-details/post-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Extra small devices (phones, less than 768px) */\r\n/* No media query since this is the default*/\r\n\r\nhtml{\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\nbody{\r\n  margin: 0;\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n.container{\r\n  box-sizing: border-box;\r\n  display: block;\r\n  position: relative;\r\n  padding: 4px;\r\n  width: auto;\r\n  height: 100%;\r\n  background-color: white;\r\n}\r\n\r\n.column-body{\r\n  display: block;\r\n  margin: 0 auto;\r\n  width: 100%;\r\n  /*padding: 16px;*/\r\n\r\n}\r\n\r\n.sound-wrapper {\r\n  margin: 20px 0px 20px 0px;\r\n}\r\n\r\n.photo-header-wrapper {\r\n  width: 100%;\r\n  margin: 20px 0px 20px 0px;\r\n}\r\n\r\n.sound-wrapper {\r\n  margin: 20px 0px 20px 0px;\r\n}\r\n\r\n/*editorial*/\r\n.editorial-header{\r\n  font-family: \"Trebuchet MS\", Helvetica, sans-serif;\r\n  font-size: 35px;\r\n  margin: 0 auto;\r\n  max-width: 740px;\r\n  font-weight: bolder;\r\n}\r\n\r\n.photo-header-wrapper {\r\n  width: 100%;\r\n  margin: 20px 0px 20px 0px;\r\n}\r\n\r\n.editorial-body{\r\n  font-family: Georgia, serif;\r\n  font-size: 1.1em; /*1.063em = 17px*/\r\n  font-weight: 500; /*possibly < 300*/\r\n  font-style: normal;\r\n  letter-spacing: 0.01em;\r\n\r\n  line-height: 1.6em;\r\n\r\n  margin: 0 auto 20px auto;\r\n\r\n  max-width: 740px;\r\n  color: black;\r\n  text-rendering: optimizeLegibility;\r\n  -webkit-font-smoothing: antialiased;\r\n\r\n\r\n}\r\n/*video*/\r\n.video-wrapper{\r\n  position: relative;\r\n  padding-bottom: 56.25%; /* 16:9 */\r\n  /*padding-top: 25px;*/\r\n  height: 0;\r\n  margin: 20px 0px 20px 0px;\r\n}\r\n\r\n.video-wrapper iframe{\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.body-media {\r\n  width: 100%;\r\n  margin: 0 auto 20px auto;\r\n}\r\n\r\n:host ::ng-deep .body-media img {\r\n  width: 100%;\r\n}\r\n\r\n\r\n/* Small devices (tablets, 768px and up) */\r\n@media (min-width: 768px) {\r\n\r\n\r\n}\r\n\r\n/* Medium devices (desktops, 992px and up) */\r\n@media (min-width: 992px) {\r\n\r\n  .container{\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: white;\r\n  }\r\n\r\n  .column-body{\r\n    padding: 8px;\r\n    margin: 0 auto;\r\n    /*max-width: 750px;*/\r\n    background-color: white;\r\n  }\r\n\r\n  .sound-wrapper {\r\n    margin: 20px 0px 20px 0px;\r\n  }\r\n\r\n  /*editorial import*/\r\n\r\n  /*.column-body{*/\r\n    /*margin: 0 auto;*/\r\n    /*max-width: 70%;*/\r\n    /*background-color: white;*/\r\n  /*}*/\r\n\r\n  .editorial-body {\r\n    /*margin: 0 auto;*/\r\n    font-size: 21px;\r\n    max-width: 740px;\r\n    color: rgba(0,0,0,.8);\r\n    text-rendering: optimizeLegibility;\r\n    -webkit-font-smoothing: antialiased;\r\n    line-height: 1.4;\r\n    font-weight: 400;\r\n    font-style: normal;\r\n  }\r\n\r\n\r\n\r\n.fullWidth {\r\n  width: 100%;\r\n  z-index: 1;\r\n}\r\n\r\n.semiFullWidth {\r\n  width: 90%;\r\n}\r\n\r\n.halfWidth {\r\n  width: 75%;\r\n  background-color: orange;\r\n}\r\n\r\n.columnWidth{\r\n  max-width: 740px;\r\n}\r\n\r\n.halfColumnWidth{\r\n  max-width: calc(740px/2);\r\n\r\n}\r\n\r\n.miniColumnWidth{\r\n  max-width: calc(740px/3);\r\n}\r\n}\r\n/* Large devices (large desktops, 1200px and up) */\r\n@media (min-width: 1200px) {\r\n\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/post-details/post-details.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<div class=\"container\">\r\n  <!--<div class=\"column-body\">-->\r\n    <a href=\"https://twitter.com/share?ref_src=twsrc%5Etfw\" \r\n      class=\"twitter-share-button\" \r\n      data-via=\"@diadoz_\" \r\n      data-hashtags=\"DIADOZ\" \r\n      data-related=\"\"\r\n      data-show-count=\"false\">\r\n      Tweet\r\n    </a>\r\n    <div class=\"fb-share-button\" data-layout=\"button\" data-size=\"small\" data-mobile-iframe=\"false\"><a class=\"fb-xfbml-parse-ignore\" target=\"_blank\" href=\"https://www.facebook.com/sharer/sharer.php?u&amp;src=sdkpreparse\">Share</a></div>\r\n    \r\n    <div *ngFor=\"let data of post.body\">\r\n\r\n      <div *ngIf=\"data.class === 'card'\" class=\"body-media\">\r\n        <app-card [card]='data'></app-card>\r\n      </div>\r\n\r\n      <div *ngIf=\"data.class === 'media'\">\r\n        <div class=\"{{data.width}} body-media\">\r\n          <div [innerHTML]=\"data.embed | keepHtml\"></div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"data.class === 'text'\">\r\n        <div class=\"editorial-body body-media\">\r\n          <div [innerHTML]=\"data.text | keepHtml\"></div>\r\n        </div>\r\n      </div>\r\n    <!--</div>-->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/post-details/post-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostDetailsComponent = (function () {
    function PostDetailsComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
        this.post = {
            _id: 0,
            headline: "",
            subHeadline: "",
            featuredImage: "",
            customURL: "",
            postType: "",
            publishDate: "",
            published: false,
            publishedBy: "",
            body: [],
        };
    }
    PostDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.post$ = this.route.params
            .switchMap(function (params) {
            return _this.dataService.getPost(params.keys);
        })
            .subscribe(function (post) {
            return _this.post = post;
        });
    };
    return PostDetailsComponent;
}());
PostDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "app-post-details",
        template: __webpack_require__("../../../../../src/app/components/post-details/post-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/post-details/post-details.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === "function" && _b || Object])
], PostDetailsComponent);

var _a, _b;
//# sourceMappingURL=post-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/post-form/forms.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n}\r\n\r\n.ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n}\r\n\r\n.hide{\r\n    display: none;\r\n}\r\n\r\n/* move to admin? */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/post-form/post-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div [hidden]=\"submitted\">\r\n        <h1>Post Form</h1>\r\n        <form (ngSubmit)=\"onSubmit()\" #postForm=\"ngForm\">\r\n            <!-- TODO: Remove once implementation done -->\r\n            {{diagnostic}}\r\n            <div class=\"form-group\">\r\n                <label for=\"headline\">Headline</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"headline\" required\r\n                [(ngModel)] = 'model.headline' name='headline' #headline='ngModel'\r\n                #spy>\r\n                <div [hidden]=\"headline.valid || headline.pristine\"\r\n                class=\"alert alert-danger\">\r\n                    Headline is required\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"subHeadline\">Sub-Headline</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"subHeadline\"\r\n                [(ngModel)]='model.subHeadline' name='subHeadline'>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"postType\">Post Type</label>\r\n                <select class=\"form-control\" id=\"postType\" required\r\n                [(ngModel)]='model.postType' name='postType'>\r\n                    <option *ngFor=\"let type of postTypes\" [value]=\"type\">{{type}}</option>\r\n                </select>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"featuredImage\">Featured Image</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"featuredImage\"\r\n                [(ngModel)]='model.featuredImage' name='featuredImage'>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                    <label for=\"customURL\">Custom URL</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"customURL\"\r\n                    [(ngModel)]='model.customURL' name='customURL'>\r\n                </div>\r\n\r\n            <!-- body -->\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"publishDate\">Publish Date</label>\r\n                <mat-form-field class=\"example-full-width\">\r\n                        <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" name='publishDate'\r\n                        [(ngModel)]=\"model.publishDate\">\r\n                </mat-form-field>\r\n                \r\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                <mat-datepicker #picker></mat-datepicker>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <!-- <label for=\"published\">Published</label> -->\r\n                <mat-checkbox class=\"form-control\" name='published'\r\n                [(ngModel)]=\"model.published\">Published</mat-checkbox>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"publishedBy\">Published By</label>\r\n                {{model.publishedBy}}\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"body\">Post Body</label>\r\n                <mat-button-toggle (click)=\"toggleMedia()\">\r\n                        Media\r\n                        <i class=\"material-icons\">add</i>\r\n                    </mat-button-toggle>\r\n                    <mat-button-toggle (click)=\"toggleArtCard()\">\r\n                        Art Card\r\n                        <i class=\"material-icons\">add</i>\r\n                    </mat-button-toggle>\r\n                <mat-button-toggle (click)=\"toggleBody()\">\r\n                    Body\r\n                    <i class=\"material-icons\">add</i>\r\n                </mat-button-toggle>\r\n            </div>\r\n\r\n            <div id='mediaData' class='hide'>\r\n                    <label for=\"mediaTitle\">Title</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"mediaTitle\"\r\n                    [(ngModel)]=\"media.title\" name=title>\r\n                    <label for=\"embed\">Embed</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"embed\"\r\n                    [(ngModel)]=\"media.embed\" name=embed>\r\n                    <label for=\"width\">Width</label>\r\n                    <mat-radio-group [(ngModel)]=\"media.width\" name='width'>\r\n                        <mat-radio-button value=\"fullWidth\">Full-Width</mat-radio-button>\r\n                        <mat-radio-button value=\"semiFullWidth\">Semi-Full-Width</mat-radio-button>\r\n                        <mat-radio-button value=\"halfWidth\">Half-Width</mat-radio-button>\r\n                        <mat-radio-button value=\"columnWidth\">Column-Width</mat-radio-button>\r\n                        <mat-radio-button value=\"halfColumnWidth\">Half-Column-Width</mat-radio-button>\r\n                        <mat-radio-button value=\"miniColumnWidth\">Mini-Column-Width</mat-radio-button>\r\n                    </mat-radio-group>\r\n                    <!-- <input type=\"text\" class=\"form-control\" id=\"width\"\r\n                    [(ngModel)]=\"media.width\" name=width> -->\r\n                <mat-button-toggle (click)=\"addMedia()\">\r\n                        <i class=\"material-icons\">add</i>\r\n                </mat-button-toggle>\r\n            </div>\r\n            <div id='artCardData' class='hide'>\r\n                    <label for=\"artCardTitle\">Title</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"artCardTitle\"\r\n                    [(ngModel)]=\"artCard.title\" name=title>\r\n                    <label for=\"primaryContributor\">Primary Contributor</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"primaryContributor\"\r\n                    [(ngModel)]=\"artCard.primaryContributor\" name=primaryContributor>\r\n                    <label for=\"secondaryContributor\">Secondary Contributor</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"secondaryContributor\"\r\n                    [(ngModel)]=\"artCard.secondaryContributor\" name=secondaryContributor>\r\n                    <label for=\"primaryType\">Primary Type</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"primaryType\"\r\n                    [(ngModel)]=\"artCard.primaryType\" name=primaryType>\r\n                    <label for=\"summary\">Summary</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"summary\"\r\n                    [(ngModel)]=\"artCard.summary\" name=summary>\r\n                    <label for=\"support\">Support</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"support\"\r\n                    [(ngModel)]=\"artCard.support\" name=support>\r\n                    <label for=\"sources\">Sources</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"sources\"\r\n                    [(ngModel)]=\"source\" name=source>\r\n                    <mat-button-toggle (click)=\"addSource()\">\r\n                        <i class=\"material-icons\">add</i>\r\n                    </mat-button-toggle>\r\n                    <label for=\"contributingArtists\">Contributing Artists</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"contributingArtists\"\r\n                    [(ngModel)]=\"artist\" name=artist>\r\n                    <mat-button-toggle (click)=\"addArtist()\">\r\n                        <i class=\"material-icons\">add</i>\r\n                    </mat-button-toggle>\r\n                    <br>\r\n                <mat-button-toggle (click)=\"addArtCard()\">\r\n                        <i class=\"material-icons\">add</i>\r\n                </mat-button-toggle>\r\n            </div>\r\n            <div id='bodyData' class='hide'>\r\n                <textarea id='tiny'></textarea>\r\n                <mat-button-toggle (click)=\"addBody()\">\r\n                        <i class=\"material-icons\">add</i>\r\n                </mat-button-toggle>\r\n            </div>\r\n            \r\n            \r\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"newPost(); postForm.reset()\">Reset</button>\r\n            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!postForm.form.valid\">Review</button>\r\n        \r\n        </form>\r\n    </div>\r\n    <div [hidden]=\"!submitted\">\r\n        <h2>You submitted the following:</h2>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Headline</div>\r\n            <div class=\"col-xs-9  pull-left\">{{ model.headline }}</div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Sub-Headline</div>\r\n            <div class=\"col-xs-9 pull-left\">{{ model.subHeadline }}</div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Post Type</div>\r\n            <div class=\"col-xs-9 pull-left\">{{ model.postType }}</div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Featured Image</div>\r\n            <div class=\"col-xs-9 pull-left\">{{ model.featuredImage }}</div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Custom URL</div>\r\n            <div class=\"col-xs-9 pull-left\">/post/{{ model.customURL }}</div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Publish Date</div>\r\n            <div class=\"col-xs-9 pull-left\">{{ model.publishDate }}</div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Published</div>\r\n            <div class=\"col-xs-9 pull-left\">{{ model.published }}</div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Published By</div>\r\n            <div class=\"col-xs-9 pull-left\">{{ model.publishedBy }}</div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Sub-Headline</div>\r\n            <div class=\"col-xs-9 pull-left\">{{ model.subHeadline }}</div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">Body</div>\r\n            <li class=\"col-xs-9 pull-left\" *ngFor='let row of model.body'>{{ row }}</li>\r\n        </div>\r\n        <br>\r\n        <button class=\"btn btn-primary\" (click)=\"submitted=false\">Edit</button>\r\n        <button class=\"btn btn-primary\" (click)=\"sendData()\">Submit</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/post-form/post-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__post__ = __webpack_require__("../../../../../src/app/components/post-form/post.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostFormComponent = (function () {
    function PostFormComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
        this.postTypes = ["Article", "Gallery"];
        this.todayDate = new Date();
        this.submitted = false;
        this.model = new __WEBPACK_IMPORTED_MODULE_3__post__["a" /* Post */]("", this.postTypes[0], "", "", this.todayDate, false, "", "", []);
        // headline, postType, featuredImage, customURL, publishDate, published, publishedBy, subHeadline, body
        this.media = {
            class: "media",
            title: "",
            embed: "",
            width: "",
        };
        this.artCard = {
            class: "card",
            title: "",
            primaryContributor: "",
            secondaryContributor: "",
            primaryType: "",
            summary: "",
            support: "",
            sources: [],
            contributingArtists: [],
        };
        this.source = "";
        this.artist = "";
    }
    PostFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.model.publishedBy = params.user;
            console.log(_this.model.publishedBy + " is using the post form");
        });
    };
    PostFormComponent.prototype.slugify = function (text) {
        return text.toString().toLowerCase()
            .replace(/\s+/g, "-") // Replace spaces with -
            .replace(/[^\w\-]+/g, "") // Remove all non-word chars
            .replace(/\-\-+/g, "-") // Replace multiple - with single -
            .replace(/^-+/, "") // Trim - from start of text
            .replace(/-+$/, ""); // Trim - from end of text
    };
    PostFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (!this.model.customURL || this.model.customURL === "") {
            this.model.customURL = this.slugify(this.model.headline);
        }
    };
    PostFormComponent.prototype.sendData = function () {
        this.submitted = false;
        this.dataService.insertPost(this.model).subscribe(function (model) {
            console.log(model);
            //redirect to when successful post
        });
        this.newPost();
    };
    PostFormComponent.prototype.newPost = function () {
        var today = new Date();
        this.model = new __WEBPACK_IMPORTED_MODULE_3__post__["a" /* Post */]("", this.postTypes[0], "", "", today, false, this.model.publishedBy, "", []);
    };
    PostFormComponent.prototype.ngAfterViewInit = function () {
        tinymce.init({
            selector: "#tiny",
            plugins: ["link", "paste", "table"],
            skin_url: "assets/skins/lightgray",
            branding: false,
        });
    };
    PostFormComponent.prototype.toggleMedia = function () {
        var mediaDiv = document.getElementById("mediaData");
        mediaDiv.classList.toggle("hide");
        //hide all other toggled divs
        var bodyDiv = document.getElementById("bodyData");
        var artCardDiv = document.getElementById("artCardData");
        if (!artCardDiv.classList.contains("hide") || !bodyDiv.classList.contains("hide")) {
            artCardDiv.classList.add("hide");
            bodyDiv.classList.add("hide");
        }
    };
    PostFormComponent.prototype.toggleArtCard = function () {
        var artCardDiv = document.getElementById("artCardData");
        artCardDiv.classList.toggle("hide");
        // hide all other toggled divs
        var bodyDiv = document.getElementById("bodyData");
        var mediaDiv = document.getElementById("mediaData");
        if (!bodyDiv.classList.contains("hide") || !mediaDiv.classList.contains("hide")) {
            bodyDiv.classList.add("hide");
            mediaDiv.classList.add("hide");
        }
    };
    PostFormComponent.prototype.toggleBody = function () {
        var bodyDiv = document.getElementById("bodyData");
        bodyDiv.classList.toggle("hide");
        tinymce.activeEditor.setContent("");
        // hide all other toggled divs
        var artCardDiv = document.getElementById("artCardData");
        var mediaDiv = document.getElementById("mediaData");
        if (!artCardDiv.classList.contains("hide") || !mediaDiv.classList.contains("hide")) {
            artCardDiv.classList.add("hide");
            mediaDiv.classList.add("hide");
        }
    };
    PostFormComponent.prototype.addSource = function () {
        this.artCard.sources.push(this.source);
        this.source = "";
    };
    PostFormComponent.prototype.addArtist = function () {
        this.artCard.contributingArtists.push(this.artist);
        this.artist = "";
    };
    PostFormComponent.prototype.addMedia = function () {
        this.model.body.push(this.media);
        this.toggleMedia();
        // clear media input
    };
    PostFormComponent.prototype.addArtCard = function () {
        this.model.body.push(this.artCard);
        this.toggleArtCard();
        // clear art card input
    };
    PostFormComponent.prototype.addBody = function () {
        this.model.body.push({
            class: "text",
            text: tinymce.activeEditor.getContent(),
        });
        this.toggleBody();
    };
    Object.defineProperty(PostFormComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () {
            return JSON.stringify(this.model);
        },
        enumerable: true,
        configurable: true
    });
    return PostFormComponent;
}());
PostFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "post-form",
        template: __webpack_require__("../../../../../src/app/components/post-form/post-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/post-form/forms.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], PostFormComponent);

var _a, _b;
//# sourceMappingURL=post-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/post-form/post.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
var Post = (function () {
    function Post(headline, postType, featuredImage, //id
        customURL, publishDate, published, publishedBy, //id
        subHeadline, body) {
        this.headline = headline;
        this.postType = postType;
        this.featuredImage = featuredImage;
        this.customURL = customURL;
        this.publishDate = publishDate;
        this.published = published;
        this.publishedBy = publishedBy;
        this.subHeadline = subHeadline;
        this.body = body;
    }
    return Post;
}());

//# sourceMappingURL=post.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/keep-html.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EscapeHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EscapeHtmlPipe = (function () {
    function EscapeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    EscapeHtmlPipe.prototype.transform = function (content) {
        return this.sanitizer.bypassSecurityTrustHtml(content);
    };
    return EscapeHtmlPipe;
}());
EscapeHtmlPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({ name: "keepHtml", pure: false }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object])
], EscapeHtmlPipe);

var _a;
//# sourceMappingURL=keep-html.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        if (this.authService.isLoggedIn) {
            return true;
        }
        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;
        // Navigate to the login page with extras
        this.router.navigate(["/login"]);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.isLoggedIn = false;
    }
    AuthService.prototype.login = function (params) {
        var _this = this;
        // call server authentication (check to see if they are logged in)
        return this.http.post("/api/user/authenticate", { username: params.userName, password: params.password })
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var user = response.json();
            if (user.userName) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem("currentUser", JSON.stringify(user));
                _this.isLoggedIn = true;
            }
            return user;
        });
    };
    AuthService.prototype.logout = function () {
        this.isLoggedIn = false;
        this.http.get("/api/user/logout");
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    // public url: string = './assets/data/posts.json';
    function DataService(http) {
        this.http = http;
        console.log("DataService is connected...");
    }
    DataService.prototype.getPosts = function (page) {
        // return this.http.get('./assets/data/posts')
        return this.http.get("/api/post/", { params: { pageNumber: page } })
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.getPost = function (customURL) {
        // return this.http.get('./assets/data/posts')
        return this.http.get("/api/post/" + customURL)
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.insertPost = function (data) {
        // return this.http.get('./assets/data/posts')
        return this.http.post("/api/post/insert", data)
            .map(function (res) { return res; });
    };
    DataService.prototype.logIn = function (data) {
        // return this.http.get('./assets/data/posts')
        return this.http.post("/api/user/login", data)
            .map(function (res) { return res.json(); });
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map