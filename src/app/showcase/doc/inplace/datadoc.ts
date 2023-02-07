import { Component, Input } from '@angular/core';
import { Car } from '../../domain/car';
import { Code } from '../../domain/code';
import { CarService } from '../../service/car.service';

@Component({
    selector: 'data-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id"></app-docsectiontext>
        <div class="card">
            <p-inplace>
                <ng-template pTemplate="display">
                    <div class="inline-flex align-items-center">
                        <span class="pi pi-table" style="vertical-align: middle"></span>
                        <span class="ml-2">View Data</span>
                    </div>
                </ng-template>
                <ng-template pTemplate="content">
                    <p-table [value]="cars" responsiveLayout="scroll">
                        <ng-template pTemplate="header">
                            <tr>
                                <th>Vin</th>
                                <th>Year</th>
                                <th>Brand</th>
                                <th>Color</th>
                            </tr>
                        </ng-template>
                        <ng-template pTemplate="body" let-car>
                            <tr>
                                <td>{{ car.vin }}</td>
                                <td>{{ car.year }}</td>
                                <td>{{ car.brand }}</td>
                                <td>{{ car.color }}</td>
                            </tr>
                        </ng-template>
                    </p-table>
                </ng-template>
            </p-inplace>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class DataDocComponent {
    @Input() id: string;

    @Input() title: string;

    cars: Car[];

    constructor(private carService: CarService) {}

    ngOnInit() {
        this.carService.getCarsSmall().then((cars) => (this.cars = cars));
    }

    code: Code = {
        html: `
<div class="card">
    <p-inplace closable="closable" [style]="{'min-height':'33px'}">
        <ng-template pTemplate="display">
            Click to Edit
        </ng-template>
        <ng-template pTemplate="content">
            <input type="text" value="PrimeNG" pInputText>
        </ng-template>
    </p-inplace>
</div>`,
        typescript: `
import { Component } from '@angular/core';
import { Car } from '../../domain/car';
import { CarService } from '../../service/car.service';

@Component({
    templateUrl: './inplacedemo.html'
})

export class InplaceDemo {
    cars: Car[];

    constructor(private carService: CarService) {}

    ngOnInit() {
        this.carService.getCarsSmall().then((cars) => (this.cars = cars));
    }

}`
    };
}
