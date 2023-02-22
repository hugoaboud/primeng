import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'sizes-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Button provides <i>small</i> and <i>large</i> sizes as alternatives to the standard.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center flex-wrap gap-3 align-items-center">
            <p-button label="Small" icon="pi pi-check" styleClass="p-button-sm"></p-button>
            <p-button label="Normal" icon="pi pi-check" styleClass="p-button"></p-button>
            <p-button label="Large" icon="pi pi-check" styleClass="p-button-lg"></p-button>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class SizesDocComponent {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        basic: `
<p-button label="Small" icon="pi pi-check" styleClass="p-button-sm"></p-button>
<p-button label="Normal" icon="pi pi-check" styleClass="p-button" ></p-button>
<p-button label="Large" icon="pi pi-check" styleClass="p-button-lg"></p-button>`,

        html: `
<div class="card flex justify-content-center flex-wrap gap-3 align-items-center">
    <p-button label="Small" icon="pi pi-check" styleClass="p-button-sm"></p-button>
    <p-button label="Normal" icon="pi pi-check" styleClass="p-button" ></p-button>
    <p-button label="Large" icon="pi pi-check" styleClass="p-button-lg"></p-button>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './sizesdemo.html'
})
export class SizesDemo { }`
    };
}
