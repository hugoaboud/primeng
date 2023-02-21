import { Component, Input, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Code } from '../../domain/code';

@Component({
    selector: 'tooltip-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Items display a tooltip on hober when a standalone <a href="#" [routerLink]="['/tooltip']">Tooltip</a> is present with a target that matches the items.</p>
        </app-docsectiontext>
        <div class="card">
            <div style="height: 350px; position: relative;" class="speeddial-tooltip-demo">
                <p-toast></p-toast>
                <p-speedDial [model]="leftTooltipItems" className="speeddial-right" direction="up"></p-speedDial>
                <p-speedDial [model]="tooltipItems" className="speeddial-left" direction="up"></p-speedDial>
            </div>
        </div>
        <app-code [code]="code"></app-code>
    </div>`,
    providers: [MessageService]
})
export class TooltipDocComponent implements OnInit {
    @Input() id: string;

    @Input() title: string;

    tooltipItems: MenuItem[];

    leftTooltipItems: MenuItem[];

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.tooltipItems = [
            {
                tooltip: 'Add',
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                tooltip: 'Update',
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                tooltip: 'Delete',
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                tooltip: 'Upload',
                icon: 'pi pi-upload',
                routerLink: ['/fileupload']
            },
            {
                tooltip: 'Angular Website',
                icon: 'pi pi-external-link',
                url: 'http://angular.io'
            }
        ];

        this.leftTooltipItems = [
            {
                tooltip: 'Add',
                icon: 'pi pi-pencil',
                tooltipPosition: 'left',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                tooltip: 'Update',
                icon: 'pi pi-refresh',
                tooltipPosition: 'left',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                tooltip: 'Delete',
                icon: 'pi pi-trash',
                tooltipPosition: 'left',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                tooltip: 'Upload',
                icon: 'pi pi-upload',
                tooltipPosition: 'left',
                routerLink: ['/fileupload']
            },
            {
                tooltip: 'Angular Website',
                icon: 'pi pi-external-link',
                tooltipPosition: 'left',
                url: 'http://angular.io'
            }
        ];
    }

    code: Code = {
        basic: `
<p-speedDial [model]="leftTooltipItems" className="speeddial-right" direction="up"></p-speedDial>
<p-speedDial [model]="tooltipItems" className="speeddial-left" direction="up"></p-speedDial>`,

        html: `
<div class="card">
    <div style="height: 350px; position: relative;" class="speeddial-tooltip-demo">
        <p-toast></p-toast>
        <p-speedDial [model]="leftTooltipItems" className="speeddial-right" direction="up"></p-speedDial>
        <p-speedDial [model]="tooltipItems" className="speeddial-left" direction="up"></p-speedDial>
    </div>
</div>`,

        typescript: `
import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
    templateUrl: './tooltipdemo.html',
    providers: [MessageService]
})
export class TooltipDemo implements OnInit {
    tooltipItems: MenuItem[];

    leftTooltipItems: MenuItem[];

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.tooltipItems = [
            {
                tooltip: 'Add',
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                tooltip: 'Update',
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                tooltip: 'Delete',
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                tooltip: 'Upload',
                icon: 'pi pi-upload',
                routerLink: ['/fileupload']
            },
            {
                tooltip: 'Angular Website',
                icon: 'pi pi-external-link',
                url: 'http://angular.io'
            }
        ];

        this.leftTooltipItems = [
            {
                tooltip: 'Add',
                icon: 'pi pi-pencil',
                tooltipPosition: 'left',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                tooltip: 'Update',
                icon: 'pi pi-refresh',
                tooltipPosition: 'left',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                tooltip: 'Delete',
                icon: 'pi pi-trash',
                tooltipPosition: 'left',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                tooltip: 'Upload',
                icon: 'pi pi-upload',
                tooltipPosition: 'left',
                routerLink: ['/fileupload']
            },
            {
                tooltip: 'Angular Website',
                icon: 'pi pi-external-link',
                tooltipPosition: 'left',
                url: 'http://angular.io'
            }
        ];
    }
}`,

        scss: `
:host ::ng-deep {
    .speeddial-tooltip-demo {
        .p-speeddial-direction-up {
            &.speeddial-left {
                left: 0;
                bottom: 0;
            }

            &.speeddial-right {
                right: 0;
                bottom: 0;
            }
        }
    }
}`
    };
}
