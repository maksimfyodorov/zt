import { NgModule } from "@angular/core";
import { CoreModule } from "../../../core/core.module";
import { InputTextComponent } from "./input-text/input-text.component";

const components = [
    InputTextComponent
]

@NgModule({
  imports: [
    CoreModule,
  ],
    declarations: components,
    exports: components,
})
export class InputsModule { }
