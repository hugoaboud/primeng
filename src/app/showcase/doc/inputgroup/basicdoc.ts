import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'basic-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id"></app-docsectiontext>
        <div class="card flex flex-column md:flex-row gap-3">
            <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                    <i class="pi pi-user"></i>
                </span>
                <input pInputText placeholder="Username" />
            </div>
            <div class="p-inputgroup">
                <span class="p-inputgroup-addon">$</span>
                <input type="text" pInputText placeholder="Price" />
                <span class="p-inputgroup-addon">.00</span>
            </div>
            <div class="p-inputgroup">
                <span class="p-inputgroup-addon">www</span>
                <input type="text" pInputText placeholder="Website" />
            </div>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class BasicDocComponent {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        html: `
<div class="card flex flex-column md:flex-row gap-3">
    <div class="p-inputgroup">
        <span class="p-inputgroup-addon">
            <i class="pi pi-user"></i>
        </span>
        <input pInputText placeholder="Username" />
    </div>

    <div class="p-inputgroup">
        <span class="p-inputgroup-addon">$</span>
        <input type="text" pInputText placeholder="Price" />
        <span class="p-inputgroup-addon">.00</span>
    </div>

    <div class="p-inputgroup">
        <span class="p-inputgroup-addon">www</span>
        <input type="text" pInputText placeholder="Website" />
    </div>
</div>`,
        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './inputgroupdemo.html'
})

export class InputGroupDemo {
}`
    };
}
