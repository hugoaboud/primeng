import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { default as MenuData } from 'src/assets/showcase/data/menu.json';
import { AppConfig } from '../../domain/appconfig';
import { AppConfigService } from '../../service/appconfigservice';
declare let gtag: Function;

export interface MenuItem {
    name?: string;
    icon?: string;
    children?: MenuItem[];
    routerLink?: string;
    href?: string;
}

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent {
    @Input() active: boolean;

    menu: MenuItem[];

    config: AppConfig;

    subscription: Subscription;

    constructor(private configService: AppConfigService) {
        this.menu = MenuData.data;

        this.config = this.configService.config;
        this.subscription = this.configService.configUpdate$.subscribe((config) => (this.config = config));
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
