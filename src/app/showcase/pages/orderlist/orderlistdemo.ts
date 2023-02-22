import { Component } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    templateUrl: './orderlistdemo.html',
    styleUrls: ['./orderlistdemo.scss']
})
export class OrderListDemo {
    products: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsSmall().then((cars) => (this.products = cars));
    }
}
