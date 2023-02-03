import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { AppCodeModule } from 'src/app/showcase/layout/doc//code/app.code.component';
import { AccessibilityDemoRoutingModule } from './accessibilitydemo-routing.module';
import { AccessibilityDemoComponent } from './accessibilitydemo.component';

@NgModule({
    imports: [CommonModule, CheckboxModule, AccessibilityDemoRoutingModule, AppCodeModule],
    declarations: [AccessibilityDemoComponent]
})
export class AccessibilityDemoModule {}
