import { Component, Input } from '@angular/core';
import { CodeLang } from '../../domain/codelang';

@Component({
    selector: 'image-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
        <p>Use the <i>image</i> property to display an image as an Avatar.</p>
        <div class="card">
            <p-avatar image="assets/showcase/images/demo/avatar/amyelsner.png" styleClass="mr-2" size="xlarge" shape="circle"></p-avatar>
            <p-avatar image="assets/showcase/images/demo/avatar/asiyajavayant.png" styleClass="mr-2" size="large" shape="circle"></p-avatar>
            <p-avatar image="assets/showcase/images/demo/avatar/onyamalimba.png" styleClass="mr-2" shape="circle"></p-avatar>
        </div>
        </app-docsectiontext>

        <app-code [code]="code"></app-code>
    </div>`
})
export class ImageDocComponent {

    @Input() id: string

    @Input() title: string

    code: CodeLang = {
        html: `
<p-avatar image="assets/showcase/images/demo/avatar/amyelsner.png" styleClass="mr-2" size="xlarge" shape="circle"></p-avatar>
<p-avatar image="assets/showcase/images/demo/avatar/asiyajavayant.png" styleClass="mr-2" size="large" shape="circle"></p-avatar>
<p-avatar image="assets/showcase/images/demo/avatar/onyamalimba.png" styleClass="mr-2" shape="circle"></p-avatar>`,
        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './avatardemo.html'
})

export class AvatarDemo {
}`,
    };
}
