import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Code } from '../../domain/code';

@Component({
    selector: 'basic-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>
                Dock requires a collection of menuitems as its <i>model</i>. Default location is <i>bottom</i> and other sides are also available when defined with the <i>position</i> property. Content of the dock component is defined by
                <i>item</i> template.
            </p>
        </app-docsectiontext>
        <div class="card">
            <div class="flex flex-wrap gap-3 mb-5">
                <p-radioButton *ngFor="let option of positionOptions" [name]="option.label" [value]="option.value" [label]="option.label" [(ngModel)]="position" [inputId]="label"></p-radioButton>
            </div>
            <div class="dock-window">
                <p-dock [model]="items" [position]="position">
                    <ng-template pTemplate="item" let-item>
                        <img [src]="item.icon" [alt]="item.label" width="100%" />
                    </ng-template>
                </p-dock>
            </div>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class BasicDocComponent implements OnInit {
    @Input() id: string;

    @Input() title: string;

    items: MenuItem[];

    position: string = 'top';

    positionOptions = [
        {
            label: 'Bottom',
            value: 'bottom'
        },
        {
            label: 'Top',
            value: 'top'
        },
        {
            label: 'Left',
            value: 'left'
        },
        {
            label: 'Right',
            value: 'right'
        }
    ];

    ngOnInit() {
        this.items = [
            {
                label: 'Finder',
                icon: 'assets/showcase/images/dock/finder.svg'
            },
            {
                label: 'App Store',
                icon: 'assets/showcase/images/dock/appstore.svg'
            },
            {
                label: 'Photos',
                icon: 'assets/showcase/images/dock/photos.svg'
            },
            {
                label: 'Trash',
                icon: 'assets/showcase/images/dock/trash.png'
            }
        ];
    }

    code: Code = {
        basic: `
<p-dock [model]="items" [position]="position">
    <ng-template pTemplate="item" let-item>
        <img [src]="item.icon" [alt]="item.label" width="100%" />
    </ng-template>
</p-dock>`,

        html: `
<div class="card">
    <div class="flex flex-wrap gap-3 mb-5">
        <p-radioButton *ngFor="let option of positionOptions" [name]="option.label" [value]="option.value" [label]="option.label" [(ngModel)]="position" [inputId]="label"></p-radioButton>
    </div>
    <div class="dock-window">
        <p-dock [model]="items" [position]="position">
            <ng-template pTemplate="item" let-item>
                <img [src]="item.icon" [alt]="item.label" width="100%" />
            </ng-template>
        </p-dock>
    </div>
</div>`,

        typescript: `
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    templateUrl: './dockdemo.html'
})
export class DockDemo implements OnInit {

    items: MenuItem[];

    position: string = 'top';

    positionOptions = [
        {
            label: 'Bottom',
            value: 'bottom'
        },
        {
            label: 'Top',
            value: 'top'
        },
        {
            label: 'Left',
            value: 'left'
        },
        {
            label: 'Right',
            value: 'right'
        }
    ];

    ngOnInit() {
        this.items = [
            {
                label: 'Finder',
                icon: 'assets/showcase/images/dock/finder.svg'
            },
            {
                label: 'App Store',
                icon: 'assets/showcase/images/dock/appstore.svg'
            },
            {
                label: 'Photos',
                icon: 'assets/showcase/images/dock/photos.svg'
            },
            {
                label: 'Trash',
                icon: 'assets/showcase/images/dock/trash.png'
            }
        ];
    }
}`,

        module: `
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DockModule } from 'primeng/dock';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DockDemo } from './dockdemo';

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule, DockModule, RadioButtonModule],
    declarations: [DockDemo]
})
export class DockDemoModule {}`
    };
}
