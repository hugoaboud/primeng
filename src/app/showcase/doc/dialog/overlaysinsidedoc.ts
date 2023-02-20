import { Component, Input, OnInit } from '@angular/core';
import { Code } from '../../domain/code';

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'overlaysinside-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>
                When dialog includes other components with overlays such as dropdown, the overlay part cannot exceed dialog boundaries due to overflow. In order to solve this, you can either append the overlay to the body by using
                <i>appendTo</i> property or allow overflow in dialog.
            </p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-button (click)="showDialog()" icon="pi pi-external-link" label="Show"></p-button>
            <p-dialog header="Header" [(visible)]="visible" [style]="{ width: '50vw' }">
                <div class="flex py-2 justify-content-center">
                    <p-dropdown appendTo="body" [options]="cities" [(ngModel)]="selectedCity" placeholder="Select a City" optionLabel="name"></p-dropdown>
                </div>
            </p-dialog>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class OverlaysInsideDocComponent implements OnInit {
    @Input() id: string;

    @Input() title: string;

    cities!: City[];

    selectedCity: City;

    visible!: boolean;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }

    showDialog() {
        this.visible = true;
    }

    code: Code = {
        basic: `
<p-button (click)="showDialog()" icon="pi pi-external-link" label="Show"></p-button>
<p-dialog header="Header" [(visible)]="visible" [style]="{ width: '50vw' }">
    <div class="flex py-2 justify-content-center">
        <p-dropdown appendTo="body" [options]="cities" [(ngModel)]="selectedCity" placeholder="Select a City" optionLabel="name"></p-dropdown>
    </div>
</p-dialog>`,

        html: `
<div class="card flex justify-content-center">
    <p-button (click)="showDialog()" icon="pi pi-external-link" label="Show"></p-button>
    <p-dialog header="Header" [(visible)]="visible" [style]="{ width: '50vw' }">
        <div class="flex py-2 justify-content-center">
            <p-dropdown appendTo="body" [options]="cities" [(ngModel)]="selectedCity" placeholder="Select a City" optionLabel="name"></p-dropdown>
        </div>
    </p-dialog>
</div>`,

        typescript: `
import { Component, OnInit } from '@angular/core';

interface City {
    name: string;
    code: string;
}

@Component({
    templateUrl: './dialogdemo.html'
})
export class DialogDemo implements OnInit {

    cities!: City[];

    selectedCity: City;

    visible!: boolean;

    ngOnInit() { 
        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
    }

    showDialog() {
        this.visible = true;
    }
}`,

        module: `
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { DialogDemo } from './dialogdemo';

@NgModule({
    imports: [CommonModule, DialogModule, FormsModule, ButtonModule, DropdownModule],
    declarations: [DialogDemo]
})
export class DialogDemoModule {}`
    };
}
