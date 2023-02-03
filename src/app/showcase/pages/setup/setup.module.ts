import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppCodeModule } from 'src/app/showcase/layout/doc//code/app.code.component';
import { SetupRoutingModule } from './setup-routing.module';
import { SetupComponent } from './setup.component';

@NgModule({
    imports: [CommonModule, AppCodeModule, SetupRoutingModule],
    declarations: [SetupComponent]
})
export class SetupModule {}
