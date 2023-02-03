import { CommonModule } from "@angular/common";
import { Component, Input, NgModule } from "@angular/core";
import { AppDocSectionTextModule } from "../docsectiontext/app.docsectiontext.component";

@Component({
    selector: 'app-docapisection',
    templateUrl: './app.docapisection.component.html'
})
export class AppDocApiSection  {
    @Input() docs;

}

@NgModule({
    imports: [CommonModule, AppDocSectionTextModule],
    exports: [AppDocApiSection],
    declarations: [AppDocApiSection]
})
export class DocApiSectionModule { }