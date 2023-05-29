import { NgModule } from "@angular/core";
import { CoreModule } from "../../../core/core.module";
import { ButtonPrimaryComponent } from "./button-primary/button-primary.component";

const components = [
    ButtonPrimaryComponent
]

@NgModule({
    imports: [
        CoreModule,
    ],
    declarations: components,
    exports: components,
})
export class ButtonsModule { }
