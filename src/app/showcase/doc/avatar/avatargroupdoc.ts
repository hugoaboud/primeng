import { Component, Input } from '@angular/core';
import { CodeLang } from '../../domain/codelang';

@Component({
    selector: 'avatargroup-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
        <p>Grouping is available by wrapping multiple Avatar components inside an AvatarGroup.</p>
        <div class="card justify-content-center">
            <p-avatarGroup styleClass="mb-3">
                <p-avatar image="assets/showcase/images/demo/avatar/amyelsner.png" size="large" shape="circle"></p-avatar>
                <p-avatar image="assets/showcase/images/demo/avatar/asiyajavayant.png" size="large" shape="circle"></p-avatar>
                <p-avatar image="assets/showcase/images/demo/avatar/onyamalimba.png" size="large" shape="circle"></p-avatar>
                <p-avatar image="assets/showcase/images/demo/avatar/ionibowcher.png" size="large" shape="circle"></p-avatar>
                <p-avatar image="assets/showcase/images/demo/avatar/xuxuefeng.png" size="large"shape="circle"></p-avatar>
                <p-avatar label="+2" shape="circle" size="large" [style]="{'background-color':'#9c27b0', 'color': '#ffffff'}"></p-avatar>
            </p-avatarGroup>
        </div>
        </app-docsectiontext>

        <app-code [code]="code"></app-code>
    </div>`
})
export class AvatarGroupDocComponent {

    @Input() id: string;

    @Input() title: string;

    code: CodeLang = {
        html: `
<p-avatarGroup styleClass="mb-3">
    <p-avatar image="assets/showcase/images/demo/avatar/amyelsner.png" size="large" shape="circle"></p-avatar>
    <p-avatar image="assets/showcase/images/demo/avatar/asiyajavayant.png" size="large" shape="circle"></p-avatar>
    <p-avatar image="assets/showcase/images/demo/avatar/onyamalimba.png" size="large" shape="circle"></p-avatar>
    <p-avatar image="assets/showcase/images/demo/avatar/ionibowcher.png" size="large" shape="circle"></p-avatar>
    <p-avatar image="assets/showcase/images/demo/avatar/xuxuefeng.png" size="large"shape="circle"></p-avatar>
    <p-avatar label="+2" shape="circle" size="large" [style]="{'background-color':'#9c27b0', 'color': '#ffffff'}"></p-avatar>
</p-avatarGroup>`,
        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './avatardemo.html'
})

export class AvatarDemo {
}`,
        module:`
import { AvatarGroupModule } from 'primeng/avatargroup';`
    };
}
