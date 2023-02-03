import { Component, OnInit } from '@angular/core';
import { CarService } from '../../service/car.service';
import { Car } from '../domain/car';

@Component({
    templateUrl: './inplacedemo.html'
})
export class InplaceDemo implements OnInit {
    cars: Car[];

    constructor(private carService: CarService) {}

    ngOnInit() {
        this.carService.getCarsSmall().then((cars) => (this.cars = cars));
    }
}
