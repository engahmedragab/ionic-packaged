(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('ionic-angular')) :
    typeof define === 'function' && define.amd ? define('@my/lib', ['exports', '@angular/core', '@angular/common', 'ionic-angular'], factory) :
    (factory((global.my = global.my || {}, global.my.lib = {}),global.ng.core,global.ng.common,null));
}(this, (function (exports,core,common,ionicAngular) { 'use strict';

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
    var CustomComponent = (function () {
        function CustomComponent() {
            console.log('Hello CustomComponent Component');
            this.text = 'Hello World';
        }
        CustomComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'custom',
                        template: "<!-- Generated template for the CustomComponent component -->\n<div>\n  {{text}}\n</div>\n"
                    },] },
        ];
        /** @nocollapse */
        CustomComponent.ctorParameters = function () { return []; };
        return CustomComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MyLibModule = (function () {
        function MyLibModule() {
        }
        /**
         * @return {?}
         */
        MyLibModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: MyLibModule,
                    providers: []
                };
            };
        MyLibModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            ionicAngular.IonicModule
                        ],
                        declarations: [
                            CustomComponent
                        ],
                        exports: [
                            CustomComponent
                        ]
                    },] },
        ];
        return MyLibModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.CustomComponent = CustomComponent;
    exports.MyLibModule = MyLibModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbGliLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQG15L2xpYi9jdXN0b20vY3VzdG9tLnRzIiwibmc6Ly9AbXkvbGliL2xpYnMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIEN1c3RvbUNvbXBvbmVudCBjb21wb25lbnQuXG4gKlxuICogU2VlIGh0dHBzOi8vYW5ndWxhci5pby9hcGkvY29yZS9Db21wb25lbnQgZm9yIG1vcmUgaW5mbyBvbiBBbmd1bGFyXG4gKiBDb21wb25lbnRzLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjdXN0b20nLFxuICB0ZW1wbGF0ZTogYDwhLS0gR2VuZXJhdGVkIHRlbXBsYXRlIGZvciB0aGUgQ3VzdG9tQ29tcG9uZW50IGNvbXBvbmVudCAtLT5cbjxkaXY+XG4gIHt7dGV4dH19XG48L2Rpdj5cbmBcbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tQ29tcG9uZW50IHtcblxuICB0ZXh0OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc29sZS5sb2coJ0hlbGxvIEN1c3RvbUNvbXBvbmVudCBDb21wb25lbnQnKTtcbiAgICB0aGlzLnRleHQgPSAnSGVsbG8gV29ybGQnO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7IEN1c3RvbUNvbXBvbmVudCB9IGZyb20gJy4vY3VzdG9tL2N1c3RvbSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIElvbmljTW9kdWxlXG4gICAgICAgIFxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEN1c3RvbUNvbXBvbmVudFxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBDdXN0b21Db21wb25lbnRcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE15TGliTW9kdWxlIHtcbiAgICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogTXlMaWJNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJJb25pY01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7O1FBb0JFO1lBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDO1NBQzNCOztvQkFmRkEsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsNEZBSVg7cUJBQ0E7Ozs7OEJBZkQ7Ozs7Ozs7QUNBQTs7Ozs7O1FBbUJrQixtQkFBTzs7OztnQkFDakIsT0FBTztvQkFDSCxRQUFRLEVBQUUsV0FBVztvQkFDckIsU0FBUyxFQUFFLEVBQ1Y7aUJBQ0osQ0FBQzs7O29CQW5CVEMsYUFBUSxTQUFDO3dCQUNOLE9BQU8sRUFBRTs0QkFDTEMsbUJBQVk7NEJBQ1pDLHdCQUFXO3lCQUVkO3dCQUNELFlBQVksRUFBRTs0QkFDVixlQUFlO3lCQUNsQjt3QkFDRCxPQUFPLEVBQUU7NEJBQ0wsZUFBZTt5QkFDbEI7cUJBQ0o7OzBCQWpCRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9