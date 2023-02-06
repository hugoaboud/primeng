import { Component } from '@angular/core';
import { BasicDocComponent } from '../../doc/blockui/basicdoc';
import { DocumentDocComponent } from '../../doc/blockui/documentdoc';
import { ImportDocComponent } from '../../doc/blockui/importdoc';
import { StyleDocComponent } from '../../doc/blockui/styledoc';

@Component({
    templateUrl: './blockuidemo.html',
    styles: [
        `
            :host ::ng-deep button {
                margin-right: 0.25em;
            }

            :host ::ng-deep .p-component-overlay-enter .pi.pi-lock {
                animation: enter 150ms forwards;
            }

            :host ::ng-deep .p-component-overlay-leave .pi.pi-lock {
                animation: leave 150ms forwards;
            }

            @keyframes enter {
                from {
                    color: transparent;
                }
                to {
                    color: var(--text-color);
                }
            }

            @keyframes leave {
                from {
                    color: var(--text-color);
                }
                to {
                    color: transparent;
                }
            }
        `
    ]
})
export class BlockUIDemo {
    blockedPanel: boolean = false;

    blockedDocument: boolean = false;

    blockDocument() {
        this.blockedDocument = true;
        setTimeout(() => {
            this.blockedDocument = false;
        }, 3000);
    }

    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDocComponent
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDocComponent
        },
        {
            id: 'document',
            label: 'Document',
            component: DocumentDocComponent
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDocComponent
        },
        {
            id: 'api',
            label: 'API',
            doc: [{ name: 'BlockUI', pathname: '/modules/blockui.html' }]
        }
    ]
}
