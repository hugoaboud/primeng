import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/product.service';

@Component({
    templateUrl: './tabletemplatingdemo.html'
})
export class TableTemplatingDemo implements OnInit {
    products: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsSmall().then((data) => (this.products = data));
    }
}
