import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { CustomComponent } from './custom/custom';

@NgModule({
    imports: [
        CommonModule,
        IonicModule
        
    ],
    declarations: [
        CustomComponent
    ],
    exports: [
        CustomComponent
    ]
})
export class MyLibModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: MyLibModule,
            providers: [
            ]
        };
    }
}
