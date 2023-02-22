import { Component, OnInit } from '@angular/core';
import { Customer } from '../../domain/customer';
import { Product } from '../../domain/product';
import { CustomerService } from '../../service/customerservice';
import { ProductService } from '../../service/productservice';

@Component({
    templateUrl: './tablecolresizedemo.html'
})
export class TableColResizeDemo implements OnInit {
    products: Product[];

    customers: Customer[];

    constructor(private productService: ProductService, private customerService: CustomerService) {}

    ngOnInit() {
        this.productService.getProductsSmall().then((data) => (this.products = data));
        this.customerService.getCustomersLarge().then((customers) => (this.customers = customers));
    }
}
