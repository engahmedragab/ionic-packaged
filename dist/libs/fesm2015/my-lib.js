import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated class for the CustomComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
class CustomComponent {
    constructor() {
        console.log('Hello CustomComponent Component');
        this.text = 'Hello World';
    }
}
CustomComponent.decorators = [
    { type: Component, args: [{
                selector: 'custom',
                template: `<!-- Generated template for the CustomComponent component -->
<div>
  {{text}}
</div>
`
            },] },
];
/** @nocollapse */
CustomComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MyLibModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: MyLibModule,
            providers: []
        };
    }
}
MyLibModule.decorators = [
    { type: NgModule, args: [{
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
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { CustomComponent, MyLibModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbGliLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AbXkvbGliL2N1c3RvbS9jdXN0b20udHMiLCJuZzovL0BteS9saWIvbGlicy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogR2VuZXJhdGVkIGNsYXNzIGZvciB0aGUgQ3VzdG9tQ29tcG9uZW50IGNvbXBvbmVudC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9hbmd1bGFyLmlvL2FwaS9jb3JlL0NvbXBvbmVudCBmb3IgbW9yZSBpbmZvIG9uIEFuZ3VsYXJcbiAqIENvbXBvbmVudHMuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N1c3RvbScsXG4gIHRlbXBsYXRlOiBgPCEtLSBHZW5lcmF0ZWQgdGVtcGxhdGUgZm9yIHRoZSBDdXN0b21Db21wb25lbnQgY29tcG9uZW50IC0tPlxuPGRpdj5cbiAge3t0ZXh0fX1cbjwvZGl2PlxuYFxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21Db21wb25lbnQge1xuXG4gIHRleHQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zb2xlLmxvZygnSGVsbG8gQ3VzdG9tQ29tcG9uZW50IENvbXBvbmVudCcpO1xuICAgIHRoaXMudGV4dCA9ICdIZWxsbyBXb3JsZCc7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgQ3VzdG9tQ29tcG9uZW50IH0gZnJvbSAnLi9jdXN0b20vY3VzdG9tJztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgSW9uaWNNb2R1bGVcbiAgICAgICAgXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQ3VzdG9tQ29tcG9uZW50XG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIEN1c3RvbUNvbXBvbmVudFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTXlMaWJNb2R1bGUge1xuICAgIHB1YmxpYyBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBNeUxpYk1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7QUFnQkE7SUFJRTtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQztLQUMzQjs7O1lBZkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxRQUFRO2dCQUNsQixRQUFRLEVBQUU7Ozs7Q0FJWDthQUNBOzs7Ozs7Ozs7QUNmRDs7OztJQW1CVyxPQUFPLE9BQU87UUFDakIsT0FBTztZQUNILFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFNBQVMsRUFBRSxFQUNWO1NBQ0osQ0FBQzs7OztZQW5CVCxRQUFRLFNBQUM7Z0JBQ04sT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osV0FBVztpQkFFZDtnQkFDRCxZQUFZLEVBQUU7b0JBQ1YsZUFBZTtpQkFDbEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLGVBQWU7aUJBQ2xCO2FBQ0o7Ozs7Ozs7Ozs7Ozs7OzsifQ==