import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Code } from '../../domain/code';

@Component({
    selector: 'custom-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Label of a menuitem both supports simple strings and html values as well. By default, html values are escaped, use <i>escape</i> property to allow html.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-menu [model]="items"></p-menu>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class CustomDocComponent implements OnInit {
    @Input() id: string;

    @Input() title: string;

    items!: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'Options',
                items: [
                    {
                        label: '<h2>Refresh</h2>',
                        escape: false,
                        icon: 'pi pi-refresh'
                    },
                    {
                        label: '<h2>Delete</h2>',
                        escape: false,
                        icon: 'pi pi-times'
                    }
                ]
            },
            {
                label: 'Navigate',
                items: [
                    {
                        label: 'Angular',
                        icon: 'pi pi-external-link',
                        url: 'http://angular.io'
                    },
                    {
                        label: 'Router',
                        icon: 'pi pi-upload',
                        routerLink: '/fileupload'
                    }
                ]
            }
        ];
    }

    code: Code = {
        basic: `
<p-menu [model]="items"></p-menu>`,

        html: `
<div class="card flex justify-content-center">
    <p-menu [model]="items"></p-menu>
</div>`,

        typescript: `
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    templateUrl: './menudemo.html'
})
export class MenuDemo implements OnInit {

    items!: MenuItem[];
    
    ngOnInit() {
        this.items = [
            {
                label: 'Options',
                items: [
                    {
                        label: '<h2>Update</h2>',
                        escape: false,
                        icon: 'pi pi-refresh'
                    },
                    {
                        label: '<h2>Delete</h2>',
                        escape: false,
                        icon: 'pi pi-times'
                    }
                ]
            },
            {
                label: 'Navigate',
                items: [
                    {
                        label: 'Angular',
                        icon: 'pi pi-external-link',
                        url: 'http://angular.io'
                    },
                    {
                        label: 'Router',
                        icon: 'pi pi-upload',
                        routerLink: '/fileupload'
                    }
                ]
            }
        ];
    }
}`,

        module: `
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenuDemo } from 'primeng/menu';

@NgModule({
    imports: [CommonModule, MenuModule],
    declarations: [MenuDemo]
})
export class MenuDocModule {}
`
    };
}
