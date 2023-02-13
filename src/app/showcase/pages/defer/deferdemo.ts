import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { EventsDocComponent } from '../../doc/defer/eventsdoc';
import { BasicDocComponent } from '../../doc/defer/basicdoc';
import { ImportDocComponent } from '../../doc/defer/importdoc';
import { DataTableDocComponent } from '../../doc/defer/datatabledoc';
import { CarService } from '../../service/car.service';
import { Car } from '../domain/car';

@Component({
    templateUrl: './deferdemo.html',
    providers: [MessageService]
})
export class DeferDemo {
    cars: Car[];

    constructor(private carService: CarService, private messageService: MessageService) {}

    initData() {
        this.messageService.add({ severity: 'success', summary: 'Data Initialized', detail: 'Render Completed' });
        this.carService.getCarsSmall().then((cars) => (this.cars = cars));
    }

    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDocComponent,
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDocComponent,
        },
        {
            id: 'datatable',
            label: 'DataTable',
            component: DataTableDocComponent,
        }
    ];

    apiDocs = [
        {
            id: 'events',
            label: 'Events',
            component: EventsDocComponent
        },
        {
            id: 'api',
            label: 'API',
            doc: [{ name: 'Defer', pathname: '/modules/defer.html' }]
        }
    ];
}
