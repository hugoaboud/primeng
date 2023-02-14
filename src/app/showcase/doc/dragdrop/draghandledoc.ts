import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'draghandle-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p><i>dragHandle</i> is used to restrict dragging unless mousedown occurs on the specified element. Panel below can only be dragged using its header.</p>
        </app-docsectiontext>
        <div class="card">
            <div pDraggable dragHandle=".p-panel-header" class="w-15rem">
                <p-panel header="Drag Header"> Content </p-panel>
            </div>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class DragHandleDocComponent {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        basic: `
<div pDraggable dragHandle=".p-panel-header" class="w-15rem">
    <p-panel header="Drag Header">
        Content
    </p-panel>
</div>`,
        html: `
<div class="card">
    <div pDraggable dragHandle=".p-panel-header" class="w-15rem">
        <p-panel header="Drag Header">
            Content
        </p-panel>
    </div>
</div>`,
        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './dragdropdemo.html',
    styleUrls: ['./dragdropdemo.scss']
})

export class DragDropDemo {}`,
        module: `
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DragDropModule } from 'primeng/dragdrop';
import { PanelModule } from 'primeng/panel';
import { DragDropDemo } from './dragdropdemo';
import { DragDropDemoRoutingModule } from './dragdropdemo-routing.module';

@NgModule({
    imports: [CommonModule, DragDropDemoRoutingModule, DragDropModule, FormsModule, PanelModule],
    declarations: [DragDropDemo]
})
export class DragDropDemoModule {}`,
        scss: `
:host ::ng-deep {
    [pDraggable] {
        cursor: move;
    }
}`
    };
}
