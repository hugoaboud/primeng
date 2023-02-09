import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'checkbox-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Checkbox and RadioButton components can be combined with an input element under the same group.</p>
        </app-docsectiontext>
        <div class="card flex flex-column md:flex-row gap-3">
            <div class="p-inputgroup">
                <span class="p-inputgroup-addon"><p-checkbox value="value1"></p-checkbox></span>
                <input type="text" pInputText placeholder="Username" />
            </div>

            <div class="p-inputgroup">
                <input type="text" pInputText placeholder="Price" />
                <span class="p-inputgroup-addon"><p-radioButton name="category" value="price"></p-radioButton></span>
            </div>

            <div class="p-inputgroup">
                <span class="p-inputgroup-addon"><p-checkbox value="value1"></p-checkbox></span>
                <input type="text" pInputText placeholder="Website" />
                <span class="p-inputgroup-addon"><p-radioButton name="category" value="site"></p-radioButton></span>
            </div>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class CheckboxDocComponent {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        html: `
<div class="card flex flex-column md:flex-row gap-3">
    <div class="p-inputgroup">
        <span class="p-inputgroup-addon"><p-checkbox value="value1"></p-checkbox></span>
        <input type="text" pInputText placeholder="Username" />
    </div>
    <div class="p-inputgroup">
        <input type="text" pInputText placeholder="Price" />
        <span class="p-inputgroup-addon"><p-radioButton name="category" value="price"></p-radioButton></span>
    </div>
    <div class="p-inputgroup">
        <span class="p-inputgroup-addon"><p-checkbox value="value1"></p-checkbox></span>
        <input type="text" pInputText placeholder="Website" />
        <span class="p-inputgroup-addon"><p-radioButton name="category" value="site"></p-radioButton></span>
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
