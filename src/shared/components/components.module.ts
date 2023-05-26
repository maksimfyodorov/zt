import { NgModule } from '@angular/core';
import { CoreModule } from "../../core/core.module";
import { InputsModule } from "./inputs/inputs.module";
import { ButtonsModule } from "./buttons/buttons.module";

const modules = [
    CoreModule,
    InputsModule,
    ButtonsModule
]

@NgModule({
    imports: modules,
    exports: modules,
})
export class ComponentsModule { }
