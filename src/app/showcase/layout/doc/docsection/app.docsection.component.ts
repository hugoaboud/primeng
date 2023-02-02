import { CommonModule } from "@angular/common";
import { ChangeDetectorRef, Component, ComponentFactoryResolver, Input, NgModule, OnInit, ViewChild, ViewContainerRef } from "@angular/core";


interface DocItems {
    id: string,
    label: string
    component: any
}

@Component({
    selector: 'app-docsection',
    templateUrl: './app.docsection.component.html',
})
export class AppDocSectionsComponent implements OnInit {
    @Input() docs: [];

    currentDocIndex = -1;

    @ViewChild('docComponent', { read: ViewContainerRef }) docComponent: ViewContainerRef

    constructor(private componentFactoryResolver: ComponentFactoryResolver, private cdRef: ChangeDetectorRef) { }

    ngOnInit() {
        for (let index = 0; index < this.docs.length; index++) {
            this.loadComponent();
        }
    }

    loadComponent() {
        this.cdRef.detectChanges();
        this.currentDocIndex = (this.currentDocIndex + 1) % this.docs.length
        const newComponent: any = this.docs[this.currentDocIndex]
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(newComponent.component)

        const viewContainerRef = this.docComponent;
        viewContainerRef.createComponent(componentFactory);
    }

}

@NgModule({
    imports: [CommonModule],
    exports: [AppDocSectionsComponent],
    declarations: [AppDocSectionsComponent]
})
export class DocSectionModule { }

