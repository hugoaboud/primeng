import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Code } from '../../domain/code';

@Component({
    selector: 'basic-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Breadcrumb provides contextual information about page hierarchy.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-breadcrumb [model]="items" [home]="home"></p-breadcrumb>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class BasicDocComponent implements OnInit {
    @Input() id: string;

    @Input() title: string;

    items: MenuItem[];

    home: MenuItem;

    ngOnInit() {
        this.items = [{ label: 'Computer' }, { label: 'Notebook' }, { label: 'Accessories' }, { label: 'Backpacks' }, { label: 'Item' }];

        this.home = { icon: 'pi pi-home', routerLink: '/' };
    }

    code: Code = {
        basic: `
<p-breadcrumb [model]="items" [home]="home"></p-breadcrumb>`,

        html: `
<div class="card flex justify-content-center">
    <p-breadcrumb [model]="items" [home]="home"></p-breadcrumb>
</div>`,

        typescript: `
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    templateUrl: './breadcrumbdemo.html'
})
export class BreadcrumbDemo implements OnInit {

    items: MenuItem[];

    home: MenuItem;

    ngOnInit() {
        this.items = [{ label: 'Computer' }, { label: 'Notebook' }, { label: 'Accessories' }, { label: 'Backpacks' }, { label: 'Item' }];

        this.home = { icon: 'pi pi-home', routerLink: '/' };
    }
}`,

        module: `
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { MenuDemo } from './menudemo';

@NgModule({
    imports: [CommonModule, RouterModule, BreadcrumbModule],
    declarations: [BreadcrumbDemo]
})
export class BreadcrumbDemoModule {}`
    };
}
