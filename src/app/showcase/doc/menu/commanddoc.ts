import { Component, Input, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Code } from '../../domain/code';

@Component({
    selector: 'command-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>The function to invoke when an item is clicked is defined using the <i>command</i> property.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-toast></p-toast>
            <p-menu [model]="items"></p-menu>
        </div>
        <app-code [code]="code"></app-code>
    </div>`,
    providers: [MessageService]
})
export class CommandDocComponent implements OnInit {
    @Input() id: string;

    @Input() title: string;

    items: MenuItem[];

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.items = [
            {
                label: 'Update',
                icon: 'pi pi-refresh',
                command: () => {
                    this.update();
                }
            },
            {
                label: 'Delete',
                icon: 'pi pi-times',
                command: () => {
                    this.delete();
                }
            }
        ];
    }

    update() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
    }

    delete() {
        this.messageService.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
    }

    code: Code = {
        basic: `
<p-toast></p-toast>
<p-menu [model]="items"></p-menu>`,

        html: `
<div class="card flex justify-content-center">
    <p-menu [model]="items"></p-menu>
</div>`,

        typescript: `
import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
    templateUrl: './menudemo.html',
    providers: [MessageService]
})
export class MenuDemo implements OnInit {

    items: MenuItem[];

    constructor(private messageService: MessageService) {}
    
    ngOnInit() {
        this.items = [
            {
                label: 'Update',
                icon: 'pi pi-refresh',
                command: () => {
                    this.update();
                }
            },
            {
                label: 'Delete',
                icon: 'pi pi-times',
                command: () => {
                    this.delete();
                }
            }
        ];
    }

    update() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
    }

    delete() {
        this.messageService.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
    }
}`,

        module: `
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { MenuDemo } from 'primeng/menu';

@NgModule({
    imports: [CommonModule, MenuModule, ToastModule],
    declarations: [MenuDemo]
})
export class MenuDocModule {}
`
    };
}
