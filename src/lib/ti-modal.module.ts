import { NgModule } from '@angular/core';
import { ModalsComponent } from './modal/modals.component';
import { CommonModule } from '@angular/common';
import { DynamicContentComponent } from './core/dynamic-content.component';
import { ClickStopPropagationDirective } from './core/click-stop-propagaton.directive';
import { ToastsComponent } from './toast/toasts.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { RouterModule } from '@angular/router';
import { Alert } from './alert/alert';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ClickStopPropagationDirective,
        DynamicContentComponent,
        ModalsComponent,
        ToastsComponent,
        ConfirmComponent,
    ],
    exports: [
        ModalsComponent,
        ToastsComponent,
        ConfirmComponent,
    ],
    bootstrap: [
        ConfirmComponent,
        ToastsComponent,
        ModalsComponent,
    ]
})
export class TiModalModule { }
