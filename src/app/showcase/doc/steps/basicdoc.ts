import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Code } from '../../domain/code';

@Component({
    selector: 'basic-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Steps requires a collection of menuitems as its <i>model</i>.</p>
        </app-docsectiontext>
        <div class="card">
            <p-steps [model]="items" [readonly]="true"></p-steps>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class BasicDocComponent implements OnInit {
    @Input() id: string;

    @Input() title: string;

    items!: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'Personal',
                routerLink: 'personal'
            },
            {
                label: 'Seat',
                routerLink: 'seat'
            },
            {
                label: 'Payment',
                routerLink: 'payment'
            },
            {
                label: 'Confirmation',
                routerLink: 'confirmation'
            }
        ];
    }

    code: Code = {
        basic: `
<p-steps [model]="items" [readonly]="true"></p-steps>`,

        html: `
<div class="card">
    <p-steps [model]="items" [readonly]="true"></p-steps>
</div>`,

        typescript: `
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    templateUrl: './stepsdemo.html'
})
export class StepsDemo implements OnInit {

    items!: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'Personal',
                routerLink: 'personal'
            },
            {
                label: 'Seat',
                routerLink: 'seat'
            },
            {
                label: 'Payment',
                routerLink: 'payment'
            },
            {
                label: 'Confirmation',
                routerLink: 'confirmation'
            }
        ];
    }
}`,

        module: `
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StepsModule } from 'primeng/steps';
import { StepsDemo } from './stepsdemo';

@NgModule({
    imports: [CommonModule, StepsModule],
    declarations: [SlideMenuDemo]
})
export class StepsDemoModule {}`
    };
}
