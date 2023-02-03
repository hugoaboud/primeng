import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { CarService } from '../service/car.service';
import { CountryService } from '../service/country.service';
import { EventService } from '../service/event.service';
import { NodeService } from '../service/node.service';

import { AppConfigService } from '../service/appconfig.service';
import { CustomerService } from '../service/customer.service';
import { IconService } from '../service/icon.service';
import { JsonService } from '../service/json.service';
import { PhotoService } from '../service/photo.service';
import { ProductService } from '../service/product.service';

import { LandingModule } from '../components/landing/landing.module';
import { AppMainComponent } from './app.main.component';
import { AppConfigModule } from './config/app.config.module';
import { AppDemoActionsModule } from './demoactions/app.demoactions.component';
import { AppDocSectionNavComponent } from './doc/docsectionnav/app.docsection-nav.component';
import { AppFooterComponent } from './footer/app.footer.component';
import { AppMenuModule } from './menu/app.menu.module';
import { AppNewsComponent } from './news/app.news.component';
import { AppTopbarModule } from './topbar/app.topbar.module';

@NgModule({
    declarations: [AppComponent, AppNewsComponent, AppFooterComponent, AppMainComponent, AppDocSectionNavComponent],
    imports: [FormsModule, ReactiveFormsModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule, LandingModule, AppDemoActionsModule, AppConfigModule, AppTopbarModule, AppMenuModule],
    providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }, CarService, CountryService, EventService, NodeService, IconService, CustomerService, PhotoService, JsonService, AppConfigService, ProductService],
    bootstrap: [AppComponent]
})
export class AppModule {}
