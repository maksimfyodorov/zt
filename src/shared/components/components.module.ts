import { NgModule } from '@angular/core';
import { CoreModule } from "../../core/core.module";
import { InputsModule } from "./inputs/inputs.module";
import { ButtonsModule } from "./buttons/buttons.module";
import { MenuComponent } from "./menu/menu.component";

const modules = [
    CoreModule,
    InputsModule,
    ButtonsModule
]

const components = [
    MenuComponent,
]

@NgModule({
    declarations: components,
    imports: modules,
    exports: [...modules, ...components],
})
export class ComponentsModule { }
