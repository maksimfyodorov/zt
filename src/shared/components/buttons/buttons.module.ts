import { NgModule } from "@angular/core";
import { CoreModule } from "../../../core/core.module";
import { PrimaryButtonComponent } from "./primary-button/primary-button.component";

const components = [
    PrimaryButtonComponent
]

@NgModule({
    imports: [
        CoreModule,
    ],
    declarations: components,
    exports: components,
})
export class ButtonsModule { }
