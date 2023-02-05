import { ChangeDetectorRef, Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

interface Props {
    id: string;
    title: string;
    component: any;
}

@Component({
    selector: 'app-docsection',
    templateUrl: './app.docsection.component.html'
})
export class AppDocSectionsComponent implements OnInit {
    @Input() docs!: [];

    currentDocIndex = -1;

    @ViewChild('docComponent', { read: ViewContainerRef }) docComponent: ViewContainerRef;

    constructor(private componentFactoryResolver: ComponentFactoryResolver, private cdRef: ChangeDetectorRef) {}

    ngOnInit() {
        for (let index = 0; index < this.docs.length; index++) {
            this.loadComponent();
        }
    }

    loadComponent() {
        this.cdRef.detectChanges();
        this.currentDocIndex = (this.currentDocIndex + 1) % this.docs.length;
        const newComponent: any = this.docs[this.currentDocIndex];

        const viewContainerRef = this.docComponent;

        if (newComponent.component !== undefined) {
            let component = viewContainerRef.createComponent<Props>(newComponent.component);
            component.instance.id = newComponent.id;
            component.instance.title = newComponent.label;
        }
    }
}
