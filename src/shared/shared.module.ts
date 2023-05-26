import { NgModule } from "@angular/core";
import { ComponentsModule } from "./components/components.module";

const modules = [
    ComponentsModule
]

@NgModule({
    imports: modules,
    exports: modules,
})
export class SharedModule { }
