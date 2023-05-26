import { NgModule } from "@angular/core";
import { TextInputComponent } from "./text-input/text-input.component";
import { CoreModule } from "../../../core/core.module";

const components = [
    TextInputComponent
]

@NgModule({
    imports: [
        CoreModule,
    ],
    declarations: components,
    exports: components,
})
export class InputsModule { }
