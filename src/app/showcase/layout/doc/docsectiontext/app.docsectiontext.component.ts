import { CommonModule } from "@angular/common";
import { Component, Input, NgModule, ViewChild } from "@angular/core";

@Component({
    selector: 'app-docsectiontext',
    templateUrl: './app.docsectiontext.component.html'
})
export class AppDocSectionTextComponent {
    @Input() title: string;
}

@NgModule({
    imports: [CommonModule,],
    exports: [AppDocSectionTextComponent],
    declarations: [AppDocSectionTextComponent]
})
export class AppDocSectionTextModule { }