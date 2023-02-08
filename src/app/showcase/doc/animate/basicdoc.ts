import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'basic-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>
                Animate uses PrimeFlex animations, however it can perform animations with custom CSS classes too. Takes <i>enterClass</i> and <i>leaveClass</i> properties to simply add animation class during scroll or page load to manage elements
                animation if the element is entering or leaving the viewport.
            </p>
        </app-docsectiontext>
        <div class="card flex flex-column align-items-center">
            <div pAnimate enterClass="flip" leaveClass="fadeoutleft" class="flex justify-content-center align-items-center h-20rem w-20rem border-round shadow-2 animation-duration-1000 animation-ease-out">
                <span class="text-900 text-3xl font-bold">flip</span>
            </div>
            <div class="h-30rem"></div>
            <div pAnimate enterClass="flipup" class="flex justify-content-center align-items-center h-20rem w-20rem border-round shadow-2 animation-duration-1000 animation-ease-out">
                <span class="text-900 text-3xl font-bold">flipup</span>
            </div>
            <div class="h-30rem"></div>
            <div pAnimate enterClass="flipleft" class="flex justify-content-center align-items-center h-20rem w-20rem border-round shadow-2 animation-duration-1000 animation-ease-out">
                <span class="text-900 text-3xl font-bold">flipleft</span>
            </div>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class BasicDocComponent {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        html: `
<div class="card">
    <div pAnimate enterClass="flip" leaveClass="fadeoutleft" class="flex justify-content-center align-items-center h-20rem w-20rem border-round shadow-2 animation-duration-1000 animation-ease-out">
        <span class="text-900 text-3xl font-bold">flip</span>
    </div>
    <div class="h-30rem"></div>
    <div pAnimate enterClass="flipup" class="flex justify-content-center align-items-center h-20rem w-20rem border-round shadow-2 animation-duration-1000 animation-ease-out">
        <span class="text-900 text-3xl font-bold">flipup</span>
    </div>
    <div class="h-30rem"></div>
    <div pAnimate enterClass="flipleft" class="flex justify-content-center align-items-center h-20rem w-20rem border-round shadow-2 animation-duration-1000 animation-ease-out">
        <span class="text-900 text-3xl font-bold">flipleft</span>
    </div>
</div>`,
        typescript: `
import { Component } from '@angular/core';

@Component({
    templateUrl: './animatedemo.html'
})

export class AnimateDemo {
}`
    };
}
